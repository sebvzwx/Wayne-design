import React, { useState } from 'react';
import { getOptimizedImageUrl } from '../utils/imageHelper';

/**
 * CDN 图片优化测试组件
 * 用于演示和测试不同的图片优化选项
 */
const CDNTestComponent: React.FC = () => {
  const [imageFile] = useState('image 9.png');
  const [width, setWidth] = useState(1200);
  const [quality, setQuality] = useState(85);
  const [format, setFormat] = useState<'auto' | 'webp' | 'jpeg' | 'png'>('auto');

  const optimizedUrl = getOptimizedImageUrl(
    imageFile,
    { width, quality, format },
    'cloudinary'
  );

  return (
    <div className="p-8 bg-slate-900 rounded-lg border border-white/10">
      <h2 className="text-2xl font-bold text-white mb-6">📊 CDN 图片优化测试</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 控制面板 */}
        <div className="space-y-6">
          <div>
            <label className="block text-white font-semibold mb-2">
              宽度: {width}px
            </label>
            <input
              type="range"
              min="300"
              max="2000"
              step="100"
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>300px</span>
              <span>2000px</span>
            </div>
          </div>

          <div>
            <label className="block text-white font-semibold mb-2">
              质量: {quality}%
            </label>
            <input
              type="range"
              min="30"
              max="100"
              step="5"
              value={quality}
              onChange={(e) => setQuality(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>30%</span>
              <span>100%</span>
            </div>
          </div>

          <div>
            <label className="block text-white font-semibold mb-2">格式</label>
            <div className="flex gap-2">
              {['auto', 'webp', 'jpeg', 'png'].map((fmt) => (
                <button
                  key={fmt}
                  onClick={() => setFormat(fmt as any)}
                  className={`px-3 py-1 rounded text-sm font-medium transition-all ${
                    format === fmt
                      ? 'bg-neon-blue text-black'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {fmt.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-slate-800 p-4 rounded border border-white/10">
            <p className="text-xs text-gray-400 mb-2">生成的 CDN URL:</p>
            <code className="text-xs text-neon-blue break-all">
              {optimizedUrl}
            </code>
            <button
              onClick={() => navigator.clipboard.writeText(optimizedUrl)}
              className="mt-3 w-full px-3 py-2 bg-white/10 hover:bg-white/20 text-white text-xs rounded transition-colors"
            >
              📋 复制 URL
            </button>
          </div>
        </div>

        {/* 预览区域 */}
        <div className="space-y-4">
          <div className="bg-slate-800 rounded-lg overflow-hidden">
            <img
              src={optimizedUrl}
              alt="CDN optimized preview"
              className="w-full h-auto"
            />
          </div>
          <p className="text-xs text-gray-400">
            右键点击图片 → 检查 → Network 标签，查看实际文件大小和加载时间
          </p>
        </div>
      </div>

      {/* 预设配置 */}
      <div className="mt-8 border-t border-white/10 pt-6">
        <h3 className="text-white font-semibold mb-4">📌 推荐预设</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: '缩略图', w: 600, q: 80, f: 'auto' as const },
            { label: '正常', w: 1200, q: 85, f: 'auto' as const },
            { label: '高清', w: 1920, q: 90, f: 'auto' as const },
            { label: '移动', w: 400, q: 75, f: 'auto' as const },
          ].map((preset) => (
            <button
              key={preset.label}
              onClick={() => {
                setWidth(preset.w);
                setQuality(preset.q);
                setFormat(preset.f);
              }}
              className="px-3 py-2 bg-white/10 hover:bg-white/20 text-white text-xs rounded transition-colors"
            >
              <div className="font-semibold">{preset.label}</div>
              <div className="text-gray-400">{preset.w}×{preset.q}%</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CDNTestComponent;
