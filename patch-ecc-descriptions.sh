#!/usr/bin/env bash
# patch-ecc-descriptions.sh
# 将中文描述应用到 ECC 的 commands/skills/agents 文件
# 同时 patch marketplaces 和 cache 两个目录
# 用法: patch-ecc-descriptions.sh [--dry-run]

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
MARKETPLACE_DIR="${HOME}/.claude/plugins/marketplaces/ecc"
CACHE_DIR="${HOME}/.claude/plugins/cache/ecc/ecc/2.0.0"
ZH_FILE="${SCRIPT_DIR}/ecc-descriptions-zh.json"
DRY_RUN=false

# 解析参数
if [[ "${1:-}" == "--dry-run" ]]; then
  DRY_RUN=true
  echo "=== 干跑模式（不实际修改文件）==="
fi

# 检查文件是否存在
if [[ ! -f "$ZH_FILE" ]]; then
  echo "错误: 找不到翻译文件 $ZH_FILE"
  echo "请先运行: node ecc-translate-descriptions.js"
  exit 1
fi

# 定义 patch 函数
patch_directory() {
  local ECC_DIR="$1"
  local DIR_NAME="$2"

  if [[ ! -d "$ECC_DIR" ]]; then
    echo "跳过 $DIR_NAME（目录不存在）"
    return
  fi

  echo "--- Patching $DIR_NAME ---"
  export ECC_DIR="$ECC_DIR"
  export ZH_FILE="$ZH_FILE"
  export DRY_RUN="$DRY_RUN"
  node -e "
const fs = require('fs');
const path = require('path');

const ECC_DIR = process.env.ECC_DIR;
const ZH_FILE = process.env.ZH_FILE;
const DRY_RUN = process.env.DRY_RUN === 'true';

const zhData = JSON.parse(fs.readFileSync(ZH_FILE, 'utf-8'));
let patched = 0;
let skipped = 0;
let errors = 0;

function patchFile(filePath, zhDesc) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');

    // 匹配 YAML frontmatter 中的 description 字段
    const regex = /^((?:---\s*\n[\s\S]*?)?description:\s*)(.+?)$/m;
    const match = content.match(regex);

    if (!match) {
      skipped++;
      return;
    }

    const oldDesc = match[2].trim();
    if (oldDesc === zhDesc) {
      skipped++;
      return;
    }

    const newContent = content.replace(regex, '\$1' + zhDesc);

    if (!DRY_RUN) {
      fs.writeFileSync(filePath, newContent, 'utf-8');
    }

    patched++;
  } catch (e) {
    console.error('  错误: ' + path.relative(ECC_DIR, filePath) + ' - ' + e.message);
    errors++;
  }
}

// 处理命令
for (const [key, zhDesc] of Object.entries(zhData.commands || {})) {
  const filePath = path.join(ECC_DIR, key);
  if (fs.existsSync(filePath)) {
    patchFile(filePath, zhDesc);
  }
}

// 处理技能
for (const [key, zhDesc] of Object.entries(zhData.skills || {})) {
  const filePath = path.join(ECC_DIR, key);
  if (fs.existsSync(filePath)) {
    patchFile(filePath, zhDesc);
  }
}

// 处理子代理
for (const [key, zhDesc] of Object.entries(zhData.agents || {})) {
  const filePath = path.join(ECC_DIR, key);
  if (fs.existsSync(filePath)) {
    patchFile(filePath, zhDesc);
  }
}

console.log('  已更新: ' + patched + ' 个文件');
console.log('  跳过: ' + skipped + ' 个文件');
console.log('  错误: ' + errors + ' 个文件');
" ECC_DIR="$ECC_DIR" ZH_FILE="$ZH_FILE" DRY_RUN="$DRY_RUN"
}

# 同时 patch 两个目录
patch_directory "$MARKETPLACE_DIR" "marketplaces"
patch_directory "$CACHE_DIR" "cache"

echo ""
echo "=== 完成 ==="
