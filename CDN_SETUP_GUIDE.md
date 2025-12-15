# 图片 CDN 配置指南

## 📋 概述

本项目已配置为使用 **Cloudinary** 作为图片 CDN，相比本地部署有以下优势：

- ✅ 自动图片优化和压缩（减少 50-70% 文件大小）
- ✅ WebP 格式自动转换
- ✅ 全球 CDN 加速
- ✅ 响应式图片自动生成
- ✅ 免费账户有 25GB 存储和 25GB 带宽
- ✅ 缓存和性能优化

---

## 🚀 快速开始

### 第一步：注册 Cloudinary 账户

1. 访问 [Cloudinary](https://cloudinary.com) 官网
2. 点击 "Sign up for free" 注册免费账户
3. 完成邮箱验证

### 第二步：获取你的 Cloud Name

1. 登录 Cloudinary Dashboard
2. 在首页顶部找到 **Cloud Name**（通常类似 `sebvzwx`）
3. 复制保存此值

### 第三步：上传图片到 Cloudinary

#### 方法 A：通过 Web 界面（简单）

1. 登录 Cloudinary Dashboard
2. 点击左侧 "Media Library"
3. 创建文件夹 `portfolio`（重要！）
4. 上传所有图片到 `portfolio` 文件夹：
   - image 5.png
   - image 6.png
   - image 7.png
   - image 8.png
   - image 9.png
   - image 10.png
   - Frame 141.png
   - Frame 142.png
   - All.png

#### 方法 B：通过 API（推荐用于自动化）

使用 Cloudinary 的 API 批量上传：

```bash
# 安装 Cloudinary CLI
npm install -g cloudinary-cli

# 配置认证
cloudinary config set cloud_name=YOUR_CLOUD_NAME api_key=YOUR_API_KEY api_secret=YOUR_API_SECRET

# 上传文件夹中的所有图片
cloudinary upload "public/images/*" --folder portfolio
```

### 第四步：更新环境变量

编辑 `.env.local`（如果没有则创建）：

```env
VITE_CLOUDINARY_CLOUD_NAME=你的_Cloud_Name
VITE_CDN_PROVIDER=cloudinary
```

例如：
```env
VITE_CLOUDINARY_CLOUD_NAME=sebvzwx
VITE_CDN_PROVIDER=cloudinary
```

### 第五步：验证配置

1. 运行开发服务器：
```bash
npm run dev
```

2. 打开 Portfolio 页面
3. 打开浏览器开发者工具 (F12)
4. 检查 Network 标签中的图片 URL
5. 应该看到类似这样的 URL：
```
https://res.cloudinary.com/sebvzwx/image/upload/w_600,q_80,c_limit,a_auto/f_auto/portfolio/image%209.png
```

---

## 📝 imageHelper.ts 详解

### 核心函数

#### `getOptimizedImageUrl(imagePath, options, provider)`

生成优化的图片 URL

**参数：**
- `imagePath`: 图片文件名（例如 `'image 9.png'`）
- `options`: 优化选项
  - `width`: 宽度（默认 1200）
  - `height`: 高度（可选）
  - `quality`: 质量 1-100（默认 85）
  - `format`: 格式 'webp'|'jpeg'|'png'|'auto'（默认 'auto'）
- `provider`: 'cloudinary'|'vercel'|'local'（默认 'cloudinary'）

**示例：**
```typescript
// 获取宽度 800px、质量 80 的 WebP 格式图片
getOptimizedImageUrl('image 9.png', { width: 800, quality: 80, format: 'webp' }, 'cloudinary')
```

#### `getResponsiveImageUrls(imagePath, provider)`

获取响应式图片的 srcSet

**返回值：**
```typescript
{
  src: 'https://...',  // 默认 1200px
  srcSet: 'https://... 640w, https://... 960w, ...'
}
```

**示例：**
```typescript
const { src, srcSet } = getResponsiveImageUrls('image 9.png');
// 在 img 标签中使用
// <img src={src} srcSet={srcSet} />
```

---

## 🎨 在组件中使用

### 基础使用

```typescript
import { getOptimizedImageUrl } from '../utils/imageHelper';

// 获取缩略图 URL
const thumbnailUrl = getOptimizedImageUrl('image 9.png', { width: 600 }, 'cloudinary');

// 获取大图 URL
const fullImageUrl = getOptimizedImageUrl('image 9.png', { width: 1200 }, 'cloudinary');

// 在 img 标签中使用
<img src={thumbnailUrl} alt="Portfolio item" />
```

### 响应式图片

```typescript
import { getResponsiveImageUrls } from '../utils/imageHelper';

const { src, srcSet } = getResponsiveImageUrls('image 9.png');

<img
  src={src}
  srcSet={srcSet}
  sizes="(max-width: 640px) 100vw, (max-width: 960px) 80vw, 50vw"
  alt="Portfolio item"
/>
```

---

## 🔧 Cloudinary 转换参数详解

Portfolio 项目使用的参数：

| 参数 | 含义 | 示例 |
|------|------|------|
| `w_` | 宽度 | `w_600` |
| `h_` | 高度 | `h_400` |
| `q_` | 质量 (1-100) | `q_85` |
| `f_` | 格式 | `f_auto`, `f_webp` |
| `c_` | 裁剪方式 | `c_limit`, `c_fill` |
| `a_` | 自动化 | `a_auto` (自动方向) |

### 完整示例

```
https://res.cloudinary.com/sebvzwx/image/upload/
  w_1200,           # 宽度 1200px
  q_85,             # 质量 85%
  c_limit,          # 按比例缩放，不超过指定宽度
  f_auto,           # 自动选择最佳格式
  a_auto/           # 自动调整方向
  portfolio/image%209.png
```

---

## 💡 性能优化建议

### 1. 不同场景使用不同尺寸

```typescript
// 缩略图：600px
getThumbnailUrl(imagePath)

// 详情页大图：1200px
getDetailImageUrl(imagePath)

// 移动设备：400px
getMobileImageUrl(imagePath)
```

### 2. 使用 lazy loading

```tsx
<img 
  src={url}
  loading="lazy"  // 重要！延迟加载
  alt="description"
/>
```

### 3. 合理设置质量

- **缩略图**：质量 70-80（文件小）
- **详情页**：质量 85-90（平衡）
- **高端设备**：质量 95+（高质量）

---

## 🚨 常见问题

### Q1: 图片仍然显示本地路径
**A:** 检查是否更新了环境变量。运行 `npm run dev` 重启开发服务器。

### Q2: 403 错误
**A:** 确保：
1. Cloud Name 正确
2. 图片已上传到 `portfolio` 文件夹
3. 文件名完全匹配（包括空格）

### Q3: 在本地测试不使用 CDN
**A:** 修改 `imageHelper.ts` 中的 `CDN_CONFIG.cloudinary.enabled`:

```typescript
cloudinary: {
  baseUrl: 'https://res.cloudinary.com/sebvzwx',
  enabled: process.env.NODE_ENV === 'production', // 仅生产环境
},
```

### Q4: 如何切换回本地图片
**A:** 修改 `.env.local`:
```env
VITE_CDN_PROVIDER=local
```

---

## 📊 预期改进

| 指标 | 本地部署 | CDN 部署 |
|------|---------|---------|
| 平均文件大小 | 500KB | 100-150KB |
| 首屏加载时间 | 2-3s | 0.5-1s |
| 全球加载速度 | 取决于地域 | 快速 |
| 缓存命中率 | 低 | 高 |

---

## 🔐 安全建议

- Cloudinary 免费账户已提供足够安全性
- 不要在代码中硬编码 API Secret
- 使用环境变量管理敏感信息

---

## 📚 更多资源

- [Cloudinary 文档](https://cloudinary.com/documentation)
- [图片优化最佳实践](https://cloudinary.com/blog/image_optimization_best_practices)
- [响应式图片指南](https://web.dev/responsive-images/)

