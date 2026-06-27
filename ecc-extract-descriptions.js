#!/usr/bin/env node
// ecc-extract-descriptions.js
// 从 ECC 的 commands/skills/agents 文件中提取 frontmatter description 字段
// 输出: ecc-descriptions-en.json

const fs = require('fs');
const path = require('path');

const ECC_DIR = path.join(process.env.HOME, '.claude/plugins/marketplaces/ecc');
const OUTPUT_FILE = path.join(__dirname, 'ecc-descriptions-en.json');

function extractDescription(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  // 匹配 YAML frontmatter 中的 description 字段
  const match = content.match(/^---\s*\n[\s\S]*?^description:\s*(.+?)$/m);
  if (match) {
    return match[1].trim();
  }
  // 也尝试匹配没有 frontmatter 的情况
  const match2 = content.match(/^description:\s*(.+?)$/m);
  if (match2) {
    return match2[1].trim();
  }
  return null;
}

// 扫描 commands
const commandsDir = path.join(ECC_DIR, 'commands');
const commands = {};
if (fs.existsSync(commandsDir)) {
  for (const file of fs.readdirSync(commandsDir)) {
    if (file.endsWith('.md')) {
      const desc = extractDescription(path.join(commandsDir, file));
      if (desc) {
        commands[`commands/${file}`] = desc;
      }
    }
  }
}

// 扫描 skills
const skillsDir = path.join(ECC_DIR, 'skills');
const skills = {};
if (fs.existsSync(skillsDir)) {
  for (const entry of fs.readdirSync(skillsDir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      const skillFile = path.join(skillsDir, entry.name, 'SKILL.md');
      if (fs.existsSync(skillFile)) {
        const desc = extractDescription(skillFile);
        if (desc) {
          skills[`skills/${entry.name}/SKILL.md`] = desc;
        }
      }
    }
  }
}

// 扫描 agents
const agentsDir = path.join(ECC_DIR, 'agents');
const agents = {};
if (fs.existsSync(agentsDir)) {
  for (const file of fs.readdirSync(agentsDir)) {
    if (file.endsWith('.md')) {
      const desc = extractDescription(path.join(agentsDir, file));
      if (desc) {
        agents[`agents/${file}`] = desc;
      }
    }
  }
}

// 合并结果
const allDescriptions = { commands, skills, agents };
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(allDescriptions, null, 2), 'utf-8');

console.log(`提取完成:`);
console.log(`  命令: ${Object.keys(commands).length} 条`);
console.log(`  技能: ${Object.keys(skills).length} 条`);
console.log(`  子代理: ${Object.keys(agents).length} 条`);
console.log(`  总计: ${Object.keys(commands).length + Object.keys(skills).length + Object.keys(agents).length} 条`);
console.log(`输出文件: ${OUTPUT_FILE}`);
