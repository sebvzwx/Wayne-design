# 🎯 CDN 配置快速参考

## ⚡ 5 分钟快速开始

### 1. 注册 Cloudinary
👉 [https://cloudinary.com/users/register/free](https://cloudinary.com/users/register/free)

### 2. 获取 Cloud Name
登录 Dashboard → 顶部看到 Cloud Name → 记下来

### 3. 创建 `.env.local` 文件
```env
VITE_CLOUDINARY_CLOUD_NAME=你的_Cloud_Name
VITE_CDN_PROVIDER=cloudinary
```

### 4. 上传图片
1. Cloudinary Dashboard → Media Library
2. 创建文件夹 `portfolio`
3. 上传 `public/images/` 中的所有 PNG 文件

### 5. 重启开发服务器
```powershell
npm run dev
```

---

## 📁 项目结构变更

```diff
components/
  Portfolio.tsx          (✏️ 已更新：添加 CDN 集成)
  CDNTest.tsx           (✨ 新增：CDN 测试组件)

utils/
  imageHelper.ts        (✨ 新增：CDN 工具函数)

constants.ts           (✏️ 已更新：图片路径改为相对路径)

.env.example          (✨ 新增：环境变量示例)
.env.local            (📝 需要创建：本地配置)

CDN_SETUP_GUIDE.md    (✨ 新增：完整配置指南)
MIGRATION_STEPS.md    (✨ 新增：迁移步骤)
QUICK_REFERENCE.md    (📄 本文件)
```

---

## 🔄 图片路径变更

### 之前
```typescript
imageUrl: '/images/image 9.png'
```

### 现在
```typescript
// 在 constants.ts
imageUrl: 'image 9.png'

// 在组件中使用
const cdnUrl = getOptimizedImageUrl(imageUrl, { width: 600 }, 'cloudinary');
```

---

## 🛠️ 核心函数用法

### 获取优化的图片 URL
```typescript
import { getOptimizedImageUrl } from '../utils/imageHelper';

const url = getOptimizedImageUrl(
  'image 9.png',           // 图片文件名
  { width: 800, quality: 80 }, // 选项
  'cloudinary'             // CDN 提供商
);
```

### 获取响应式图片
```typescript
import { getResponsiveImageUrls } from '../utils/imageHelper';

const { src, srcSet } = getResponsiveImageUrls('image 9.png');
// 在 img 标签中：
// <img src={src} srcSet={srcSet} alt="..." />
```

---

## 📊 Cloudinary 转换参数

| 参数 | 含义 | 值范围 | 默认值 |
|------|------|--------|--------|
| `w` | 宽度 | 100-2000 | 1200 |
| `q` | 质量 | 30-100 | 85 |
| `f` | 格式 | auto/webp/jpeg/png | auto |

### 常用组合

```
缩略图：w_600,q_80,f_auto
详情页：w_1200,q_85,f_auto
高清：w_1920,q_90,f_auto
移动：w_400,q_75,f_auto
```

---

## 🧪 测试清单

- [ ] `.env.local` 已创建
- [ ] Cloud Name 正确填写
- [ ] 图片已上传到 `portfolio` 文件夹
- [ ] 开发服务器已重启
- [ ] 打开 localhost:3000，检查图片加载
- [ ] F12 → Network → 查看 CDN URL
- [ ] 图片来自 `res.cloudinary.com`

---

## 🚀 部署到 Vercel

1. Vercel Dashboard → Settings → Environment Variables
2. 添加：
   ```
   VITE_CLOUDINARY_CLOUD_NAME = 你的_Cloud_Name
   VITE_CDN_PROVIDER = cloudinary
   ```
3. 保存并重新部署

---

## ⚙️ 环境变量

### 开发环境 (`.env.local`)
```env
VITE_CLOUDINARY_CLOUD_NAME=sebvzwx
VITE_CDN_PROVIDER=cloudinary
```

### 生产环境 (Vercel)
在 Vercel Dashboard 中设置相同的环境变量

### 切换到本地图片
```env
VITE_CDN_PROVIDER=local
```

---

## 🐛 常见问题速答

| 问题 | 解决方案 |
|------|---------|
| 图片显示 404 | 检查 Cloud Name 和文件夹名 `portfolio` |
| 仍显示本地路径 | 检查 `.env.local` 并重启开发服务器 |
| 权限错误 403 | 检查图片是否公开（不是私有） |
| 网速没改进 | 清空缓存，用无痕模式测试 |

---

## 📈 性能提升预期

```
加载时间：3-5秒 → 0.5-1秒（5-10倍提升）
文件大小：500KB → 100KB（80%减少）
格式支持：PNG → WebP + PNG（自动选择）
全球速度：取决于地域 → 一致快速
```

---

## 📚 完整文档

- 详细指南：[CDN_SETUP_GUIDE.md](./CDN_SETUP_GUIDE.md)
- 迁移步骤：[MIGRATION_STEPS.md](./MIGRATION_STEPS.md)
- 工具源码：[utils/imageHelper.ts](./utils/imageHelper.ts)
- 测试组件：[components/CDNTest.tsx](./components/CDNTest.tsx)

---

## 💡 提示

1. **免费额度**：Cloudinary 免费账户有 25GB 存储和 25GB 月带宽
2. **自动优化**：CDN 会自动选择最优格式（WebP 优先）
3. **缓存友好**：URL 包含优化参数，便于精确缓存
4. **随时回退**：可通过环境变量轻松切换回本地

---

**配置完毕？** 🎉 恭喜！您现在已拥有企业级的图片 CDN！

