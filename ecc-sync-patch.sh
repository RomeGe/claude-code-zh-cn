#!/usr/bin/env bash
# ecc-sync-patch.sh
# 每次 ecc:sync 后运行，自动检测新增/变更的描述并更新翻译
# 用法: ecc-sync-patch.sh [--force]

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ECC_DIR="${HOME}/.claude/plugins/marketplaces/ecc"
EN_FILE="${SCRIPT_DIR}/ecc-descriptions-en.json"
ZH_FILE="${SCRIPT_DIR}/ecc-descriptions-zh.json"
FORCE=false

# 解析参数
if [[ "${1:-}" == "--force" ]]; then
  FORCE=true
  echo "=== 强制重新翻译所有描述 ==="
fi

echo "=== ECC 描述增量更新 ==="

# 步骤 1: 重新提取所有描述
echo "1. 提取当前 ECC 描述..."
node "${SCRIPT_DIR}/ecc-extract-descriptions.js" 2>/dev/null

# 步骤 2: 对比新增/变更的描述
echo "2. 检测新增/变更的描述..."
export EN_FILE="$EN_FILE"
export ZH_FILE="$ZH_FILE"
export FORCE="$FORCE"
node -e "
const fs = require('fs');
const path = require('path');

const enFile = process.env.EN_FILE;
const zhFile = process.env.ZH_FILE;
const force = process.env.FORCE === 'true';

const enData = JSON.parse(fs.readFileSync(enFile, 'utf-8'));
let zhData = { commands: {}, skills: {}, agents: {} };
if (fs.existsSync(zhFile)) {
  zhData = JSON.parse(fs.readFileSync(zhFile, 'utf-8'));
}

const stats = { new: 0, changed: 0, removed: 0, unchanged: 0 };
const toTranslate = { commands: {}, skills: {}, agents: {} };

// 检查新增和变更
for (const [type, entries] of Object.entries(enData)) {
  for (const [key, enDesc] of Object.entries(entries)) {
    const zhDesc = zhData[type]?.[key];

    if (!zhDesc) {
      // 新增
      stats.new++;
      toTranslate[type][key] = enDesc;
    } else if (force || zhDesc === enDesc) {
      // 变更（或强制重新翻译）
      stats.changed++;
      toTranslate[type][key] = enDesc;
    } else {
      stats.unchanged++;
    }
  }
}

// 检查删除
for (const [type, entries] of Object.entries(zhData)) {
  for (const [key] of Object.entries(entries)) {
    if (!enData[type]?.[key]) {
      stats.removed++;
      delete zhData[type][key];
    }
  }
}

// 保存更新后的翻译（移除已删除的）
fs.writeFileSync(zhFile, JSON.stringify(zhData, null, 2), 'utf-8');

// 保存待翻译的条目
const toTranslateFile = enFile.replace('-en.json', '-to-translate.json');
fs.writeFileSync(toTranslateFile, JSON.stringify(toTranslate, null, 2), 'utf-8');

console.log('  新增: ' + stats.new + ' 条');
console.log('  变更: ' + stats.changed + ' 条');
console.log('  删除: ' + stats.removed + ' 条');
console.log('  未变: ' + stats.unchanged + ' 条');
console.log('  待翻译: ' + (stats.new + stats.changed) + ' 条');

// 输出是否需要翻译
if (stats.new + stats.changed > 0) {
  process.exit(0); // 需要翻译
} else {
  process.exit(2); // 无需翻译
}
" EN_FILE="$EN_FILE" ZH_FILE="$ZH_FILE" FORCE="$FORCE"
NEED_TRANSLATE=$?

# 步骤 3: 翻译新增/变更的描述
if [[ $NEED_TRANSLATE -eq 0 ]]; then
  echo "3. 翻译新增/变更的描述..."
  node "${SCRIPT_DIR}/ecc-translate-descriptions.js" --resume 2>/dev/null
else
  echo "3. 无需翻译（所有描述已是最新）"
fi

# 步骤 4: 应用翻译
echo "4. 应用翻译到 ECC 文件..."
bash "${SCRIPT_DIR}/patch-ecc-descriptions.sh"

echo ""
echo "=== 更新完成 ==="
