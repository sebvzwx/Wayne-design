/**
 * 图片 CDN 优化工具
 * 支持多个 CDN 提供商，可根据需要切换
 */

type CDNProvider = 'vercel' | 'cloudinary' | 'local';

interface ImageOptimizationOptions {
  width?: number;
  height?: number;
  quality?: number; // 1-100
  format?: 'webp' | 'jpeg' | 'png' | 'auto';
}

const CDN_CONFIG = {
  // Vercel Image Optimization
  vercel: {
    baseUrl: '/_vercel/image',
    enabled: process.env.NODE_ENV === 'production' && typeof window !== 'undefined' && window.location.host.includes('vercel'),
  },
  // Cloudinary
  cloudinary: {
    baseUrl: 'https://res.cloudinary.com/sebvzwx', // 替换为您的 Cloudinary 账户
    enabled: true,
  },
  // 本地备选
  local: {
    baseUrl: '/images',
    enabled: true,
  },
};

/**
 * 获取优化后的图片 URL
 * @param imagePath 图片路径 (例如: '/images/image-9.png' 或 'image-9.png')
 * @param options 优化选项
 * @param provider CDN 提供商
 */
export function getOptimizedImageUrl(
  imagePath: string,
  options: ImageOptimizationOptions = {},
  provider: CDNProvider = 'cloudinary'
): string {
  // 标准化路径（移除前导斜杠和 /images/ 前缀）
  const cleanPath = imagePath.replace(/^\/images\//, '').replace(/^\//, '');

  if (provider === 'cloudinary') {
    return getCloudinaryUrl(cleanPath, options);
  } else if (provider === 'vercel') {
    return getVercelImageUrl(imagePath, options);
  } else {
    return `/images/${cleanPath}`;
  }
}

/**
 * 生成 Cloudinary 优化 URL
 * 支持两种格式：
 * 1. 简单文件名：'image.png' → 查找 portfolio 文件夹中的文件
 * 2. 完整 Cloudinary URL：直接使用或添加转换参数
 */
function getCloudinaryUrl(
  imagePath: string,
  options: ImageOptimizationOptions
): string {
  // 检查是否已经是完整的 Cloudinary URL
  if (imagePath.includes('res.cloudinary.com')) {
    // 如果已经是完整 URL，直接返回或添加查询参数
    return addTransformationsToExistingUrl(imagePath, options);
  }

  // 否则，构建新的 URL（用于 portfolio 文件夹中的文件）
  const {
    width = 1200,
    height,
    quality = 85,
    format = 'auto',
  } = options;

  const transformations: string[] = [];

  if (width) {
    transformations.push(`w_${width}`);
  }

  if (height) {
    transformations.push(`h_${height}`);
    transformations.push('c_fill');
  } else {
    transformations.push('c_limit');
  }

  transformations.push(`q_${quality}`);
  transformations.push(`f_${format}`);
  transformations.push('a_auto');

  const transformString = transformations.join(',');
  const baseUrl = 'https://res.cloudinary.com/diar08qd4';

  return `${baseUrl}/image/upload/${transformString}/portfolio/${imagePath}`;
}

/**
 * 为现有的 Cloudinary URL 添加转换参数
 */
function addTransformationsToExistingUrl(
  url: string,
  options: ImageOptimizationOptions
): string {
  const { width = 1200, quality = 85, format = 'auto' } = options;

  // 提取版本号和文件名
  // 格式: https://res.cloudinary.com/diar08qd4/image/upload/v1765808047/Frame_142_n8e2zt.png
  const match = url.match(/\/image\/upload\/(.*)/);
  if (!match) return url;

  const transformations = [
    `w_${width}`,
    `q_${quality}`,
    'c_limit',
    `f_${format}`,
  ].join(',');

  // 返回带有转换参数的 URL
  return `https://res.cloudinary.com/diar08qd4/image/upload/${transformations}/${match[1]}`;
}

/**
 * 生成 Vercel Image Optimization URL
 * 仅在 Vercel 部署时可用
 */
function getVercelImageUrl(
  imagePath: string,
  options: ImageOptimizationOptions
): string {
  const { width = 1200, quality = 85 } = options;

  const params = new URLSearchParams({
    url: imagePath,
    w: width.toString(),
    q: quality.toString(),
  });

  return `/_vercel/image?${params.toString()}`;
}

/**
 * 获取响应式图片的多个版本 (用于 srcset)
 */
export function getResponsiveImageUrls(
  imagePath: string,
  provider: CDNProvider = 'cloudinary'
): { src: string; srcSet: string } {
  const sizes = [640, 960, 1280, 1920];

  const srcSet = sizes
    .map((size) => {
      const url = getOptimizedImageUrl(imagePath, { width: size }, provider);
      return `${url} ${size}w`;
    })
    .join(', ');

  const src = getOptimizedImageUrl(imagePath, { width: 1200 }, provider);

  return { src, srcSet };
}

/**
 * 创建 picture 标签的源列表（支持 WebP）
 */
export function getPictureSourceList(
  imagePath: string,
  provider: CDNProvider = 'cloudinary'
): Array<{ srcSet: string; type: string; media?: string }> {
  return [
    {
      // 移动设备 WebP
      srcSet: getResponsiveImageUrls(imagePath, provider).srcSet.replace(/,/g, ',').split(',').map(s => {
        const [url, size] = s.trim().split(' ');
        return `${getOptimizedImageUrl(imagePath.replace(/\.[^.]+$/, ''), { width: parseInt(size), format: 'webp' }, provider)} ${size}`;
      }).join(', '),
      type: 'image/webp',
      media: '(max-width: 768px)',
    },
    {
      // 桌面 WebP
      srcSet: getResponsiveImageUrls(imagePath, provider).srcSet.replace(/,/g, ',').split(',').map(s => {
        const [url, size] = s.trim().split(' ');
        return `${getOptimizedImageUrl(imagePath.replace(/\.[^.]+$/, ''), { width: parseInt(size), format: 'webp' }, provider)} ${size}`;
      }).join(', '),
      type: 'image/webp',
    },
  ];
}

/**
 * 检查当前环境是否支持图片 CDN
 */
export function isCDNEnabled(provider: CDNProvider = 'cloudinary'): boolean {
  return CDN_CONFIG[provider].enabled;
}

export default {
  getOptimizedImageUrl,
  getResponsiveImageUrls,
  getPictureSourceList,
  isCDNEnabled,
};
