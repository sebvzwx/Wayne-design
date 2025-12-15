# 📝 Cloudinary URL 配置指南

由于您已上传图片到 Cloudinary，现在需要配置实际的文件 URL。

## 📋 您的实际 URL 格式

您提供的 URL 格式：
```
https://res.cloudinary.com/diar08qd4/image/upload/v1765808047/Frame_142_n8e2zt.png
```

## 🔍 获取所有文件的 URL

### 方法 1：通过 Cloudinary Dashboard（推荐）

1. 登录 [Cloudinary Dashboard](https://cloudinary.com/console)
2. 进入 **Media Library**
3. 找到您的 **portfolio** 文件夹
4. 点击每个文件获取 **Public URL**
5. 复制完整的 URL

### 方法 2：使用 Cloudinary Admin API（高级）

运行以下命令获取所有文件列表：

```bash
curl -X GET "https://api.cloudinary.com/v1_1/diar08qd4/resources/image" \
  -H "Authorization: Basic $(echo -n 'api_key:api_secret' | base64)"
```

## 📝 更新 CDNVerify.tsx

编辑 `components/CDNVerify.tsx`，在 `actualUrls` 中添加您的实际 URL：

```typescript
const actualUrls: Record<string, string> = {
  'Frame 142.png': 'https://res.cloudinary.com/diar08qd4/image/upload/v1765808047/Frame_142_n8e2zt.png',
  'image 9.png': 'https://res.cloudinary.com/diar08qd4/image/upload/v1234567890/image_9_abc123.png',
  'image 10.png': 'https://res.cloudinary.com/diar08qd4/image/upload/v1234567890/image_10_def456.png',
  'image 5.png': 'https://res.cloudinary.com/diar08qd4/image/upload/v1234567890/image_5_ghi789.png',
  'image 8.png': 'https://res.cloudinary.com/diar08qd4/image/upload/v1234567890/image_8_jkl012.png',
  'Frame 141.png': 'https://res.cloudinary.com/diar08qd4/image/upload/v1234567890/Frame_141_mno345.png',
  'All.png': 'https://res.cloudinary.com/diar08qd4/image/upload/v1234567890/All_pqr678.png',
};
```

## 🚀 自动化方式

或者，您可以使用以下方式自动扫描所有文件。创建一个临时脚本：

```javascript
// scripts/fetch-cloudinary-urls.js
import fetch from 'node-fetch';

async function getCloudinaryFiles() {
  const cloudName = 'diar08qd4';
  const apiKey = '468613792354299';
  const apiSecret = 'YOUR_API_SECRET';
  
  const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');
  
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/resources/search`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        expression: 'folder:"portfolio"',
        sort_by: 'public_id',
        max_results: 500,
      }),
    }
  );
  
  const data = await response.json();
  
  const urls: Record<string, string> = {};
  for (const resource of data.resources) {
    urls[resource.public_id] = resource.secure_url;
  }
  
  console.log('const actualUrls = ', JSON.stringify(urls, null, 2));
}

getCloudinaryFiles();
```

## ✅ 验证步骤

1. 获取所有实际 URL
2. 更新 `CDNVerify.tsx` 中的 `actualUrls`
3. 运行 `npm run dev`
4. 点击右下角 "🔍 检查 CDN"
5. 验证所有 7 张图片都加载成功

## 📊 URL 格式说明

```
https://res.cloudinary.com/{cloud_name}/image/upload/{version}/{public_id}.{format}

示例：
https://res.cloudinary.com/diar08qd4/image/upload/v1765808047/Frame_142_n8e2zt.png

拆解：
- cloud_name: diar08qd4
- version: v1765808047
- public_id: Frame_142_n8e2zt
- format: png
```

## 💡 后续优化

收集完所有 URL 后，可以在 `constants.ts` 中更新为使用完整 URL：

```typescript
export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'SIMAN JOB - Web3平台运营',
    imageUrl: 'https://res.cloudinary.com/diar08qd4/image/upload/v1765808047/Frame_142_n8e2zt.png',
    // ...
  },
];
```

这样可以跳过转换参数生成，直接使用 Cloudinary 上的文件。

