#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function main() {
  console.log('\n🔍 CDN 配置验证\n');

  const checks = [
    { name: '图片 CDN 工具库', file: 'utils/imageHelper.ts' },
    { name: 'CDN 验证工具', file: 'components/CDNVerify.tsx' },
    { name: '环境变量示例', file: '.env.example' },
    { name: '.env.local 配置', file: '.env.local' },
  ];

  let successCount = 0;
  
  for (const check of checks) {
    const fullPath = path.join(__dirname, '..', check.file);
    if (fs.existsSync(fullPath)) {
      console.log(`✅ ${check.name}`);
      successCount++;
    } else {
      console.log(`❌ ${check.file} - 文件不存在`);
    }
  }

  console.log(`\n📊 完成度: ${successCount}/${checks.length}`);
  
  if (successCount === checks.length) {
    console.log('\n✅ 所有配置就绪！');
    console.log('\n接下来运行：npm run dev\n');
  } else {
    console.log('\n⚠️  请检查缺失的文件\n');
  }
}

main();
