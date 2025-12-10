import { Project, Skill, Service } from './types';

export const SKILLS: Skill[] = [
  { name: 'Community Ops / Growth', description: 'Telegram, Discord, Twitter, Funnel Strategy', level: 95, color: '#EC4899' },
  { name: 'AI Visual & UI Design', description: 'Figma, Photoshop, Midjourney, Stable Diffusion', level: 90, color: '#3B82F6' },
  { name: 'Data Analysis & Python', description: 'Python, SQL, Data Visualization, Automation', level: 85, color: '#CCFF00' },
  { name: 'Web3 Research & Content', description: 'Market Analysis, English/Chinese, Airdrop', level: 88, color: '#FFFFFF' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Project Alpha: 个人全栈作品集',
    description: '一个融合了视觉设计与技术实现的个人全栈展示平台。不仅展示了作品，更体现了“设计即代码”的构建哲学。',
    imageUrl: 'https://placehold.co/600x400/111/CCFF00?text=Alpha',
    tags: ['Design', 'React', 'Tailwind'],
  },
  {
    id: '2',
    title: 'Project Beta: 电商自动化工具',
    description: '基于 Python 和 Pillow 库构建的图像批处理工具，为电商平台的大规模素材处理提供高效的自动化工作流。',
    imageUrl: 'https://placehold.co/600x400/111/CCFF00?text=Beta',
    tags: ['Python', 'Automation', 'Pillow'],
  },
  {
    id: '3',
    title: 'Project Gamma: 品牌视觉识别系统',
    description: '为一家 Web3 科技初创公司打造的完整 VI 系统，包含动态 Logo、版式规范及跨平台应用指南。',
    imageUrl: 'https://placehold.co/600x400/111/CCFF00?text=Gamma',
    tags: ['VI Design', 'Figma', 'Branding'],
  },
];

export const SERVICES: Service[] = [
  {
    title: '0-1 Community Growth',
    description: '擅长搭建千人规模垂直社区，通过"内容漏斗+SOP"实现从公域流量到私域沉淀的精准转化，甚至实现单月 20% 自然增长率。',
    icon: '👥',
  },
  {
    title: 'AI-Powered Design',
    description: '精通"AI生成+精细优化"全流程。使用 Figma 与 AI 工具打造风格统一的品牌视觉，曾独立支撑多场大型 Web3 活动视觉全案。',
    icon: '🎨',
  },
  {
    title: 'Data-Driven Strategy',
    description: '具备 Python 与 SQL 数据科学背景。能高效解读英文白皮书，并通过数据分析反哺运营策略，最大化降低团队试错成本。',
    icon: '📊',
  },
];
