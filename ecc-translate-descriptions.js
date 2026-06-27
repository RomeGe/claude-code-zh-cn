#!/usr/bin/env node
// ecc-translate-descriptions.js
// 批量翻译 ECC 描述为中文
// 用法: node ecc-translate-descriptions.js [--batch-size 20] [--resume]

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const INPUT_FILE = path.join(__dirname, 'ecc-descriptions-en.json');
const OUTPUT_FILE = path.join(__dirname, 'ecc-descriptions-zh.json');
const API_BASE = process.env.ANTHROPIC_BASE_URL || 'https://api.anthropic.com';
const API_KEY = process.env.ANTHROPIC_AUTH_TOKEN || process.env.ANTHROPIC_API_KEY;

// 解析命令行参数
const args = process.argv.slice(2);
let batchSize = 20;
let resume = false;
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--batch-size' && args[i + 1]) {
    batchSize = parseInt(args[i + 1]);
    i++;
  }
  if (args[i] === '--resume') {
    resume = true;
  }
}

async function translateBatch(texts) {
  const prompt = `将以下英文技术描述翻译成简洁的中文。要求：
1. 保持专业术语准确（如 Agent、Hook、PR、API 等保留英文）
2. 译文简洁，适合作为命令说明
3. 返回 JSON 数组，顺序与输入一致
4. 不要添加任何解释，只返回 JSON

英文描述：
${JSON.stringify(texts, null, 2)}

请返回中文翻译的 JSON 数组：`;

  const url = new URL(`${API_BASE}/v1/messages`);
  const isHttps = url.protocol === 'https:';
  const client = isHttps ? https : http;

  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      model: 'mimo-v2.5',
      max_tokens: 4096,
      messages: [{ role: 'user', content: prompt }]
    });

    const req = client.request(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
        'anthropic-version': '2023-06-01'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          if (result.error) {
            reject(new Error(result.error.message));
            return;
          }
          const text = result.content?.[0]?.text || '';
          // 提取 JSON 数组
          const match = text.match(/\[[\s\S]*\]/);
          if (match) {
            try {
              const translations = JSON.parse(match[0]);
              // 确保返回的数组长度与输入一致
              if (translations.length === texts.length) {
                resolve(translations);
              } else {
                // 如果长度不一致，用原文填充
                const result = texts.map((t, i) => translations[i] || t);
                resolve(result);
              }
            } catch (parseError) {
              // JSON 解析失败，尝试修复常见问题
              console.warn('JSON 解析失败，尝试修复...');
              let fixed = match[0]
                .replace(/,\s*\]/g, ']')  // 移除尾部逗号
                .replace(/\n/g, ' ')      // 移除换行
                .replace(/\s+/g, ' ');     // 合并空白
              try {
                const translations = JSON.parse(fixed);
                if (translations.length === texts.length) {
                  resolve(translations);
                } else {
                  const result = texts.map((t, i) => translations[i] || t);
                  resolve(result);
                }
              } catch (e) {
                // 仍然失败，返回原文
                console.warn('无法修复 JSON，使用原文');
                resolve(texts);
              }
            }
          } else {
            // 如果无法解析 JSON，返回原文
            console.warn('警告: 无法解析翻译结果，使用原文');
            resolve(texts);
          }
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

async function main() {
  // 读取英文描述
  const enData = JSON.parse(fs.readFileSync(INPUT_FILE, 'utf-8'));

  // 读取已有翻译（如果 resume）
  let zhData = { commands: {}, skills: {}, agents: {} };
  if (resume && fs.existsSync(OUTPUT_FILE)) {
    zhData = JSON.parse(fs.readFileSync(OUTPUT_FILE, 'utf-8'));
    console.log('已加载现有翻译，继续翻译...');
  }

  // 收集所有待翻译的条目
  const allEntries = [];
  for (const [type, entries] of Object.entries(enData)) {
    for (const [key, value] of Object.entries(entries)) {
      // 检查是否已翻译
      if (zhData[type] && zhData[type][key]) {
        continue;
      }
      allEntries.push({ type, key, en: value });
    }
  }

  console.log(`待翻译: ${allEntries.length} 条`);
  console.log(`批大小: ${batchSize}`);

  // 分批翻译
  for (let i = 0; i < allEntries.length; i += batchSize) {
    const batch = allEntries.slice(i, i + batchSize);
    const texts = batch.map(e => e.en);

    console.log(`翻译第 ${i + 1}-${Math.min(i + batchSize, allEntries.length)} 条...`);

    try {
      const translations = await translateBatch(texts);

      // 保存翻译结果
      for (let j = 0; j < batch.length; j++) {
        const { type, key } = batch[j];
        if (!zhData[type]) zhData[type] = {};
        zhData[type][key] = translations[j] || batch[j].en;
      }

      // 每批翻译后保存一次
      fs.writeFileSync(OUTPUT_FILE, JSON.stringify(zhData, null, 2), 'utf-8');
      console.log(`  已保存 ${Object.keys(zhData.commands).length + Object.keys(zhData.skills).length + Object.keys(zhData.agents).length} 条翻译`);

      // 避免 API 限速
      if (i + batchSize < allEntries.length) {
        await new Promise(r => setTimeout(r, 2000));
      }
    } catch (e) {
      console.error(`翻译失败: ${e.message}`);
      // 保存已翻译的部分
      fs.writeFileSync(OUTPUT_FILE, JSON.stringify(zhData, null, 2), 'utf-8');
      console.log(`已保存已翻译的部分，可用 --resume 继续`);
      // 如果是限速错误，等待后重试
      if (e.message.includes('429') || e.message.includes('rate')) {
        console.log('等待 5 秒后重试...');
        await new Promise(r => setTimeout(r, 5000));
        continue;
      }
      process.exit(1);
    }
  }

  console.log('\n翻译完成!');
  console.log(`  命令: ${Object.keys(zhData.commands).length} 条`);
  console.log(`  技能: ${Object.keys(zhData.skills).length} 条`);
  console.log(`  子代理: ${Object.keys(zhData.agents).length} 条`);
}

main().catch(e => {
  console.error('错误:', e.message);
  process.exit(1);
});
