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
    title: 'SIMAN JOB - Web3平台运营',
    description: 'Web3 的运营到底在做什么？通过分享运营的核心竞争力，帮助新人快速破局入行。免费 Web3 & AI 实习岗位与培训指导。',
    imageUrl: 'https://res.cloudinary.com/diar08qd4/image/upload/f_auto,q_auto/v1765808051/image_9_ncqpuw.png',
    tags: ['Web3', 'Community', 'Growth'],
    category: 'Web3 Community'
  },
  {
    id: '2',
    title: '招募海报设计',
    description: '通过智能匹配与学习，为 AI 创业者找到理想的联合创始人。致力于构建智能匹配工作平台，机会无限。',
    imageUrl: 'https://res.cloudinary.com/diar08qd4/image/upload/f_auto,q_auto/v1765808050/image_10_xifdvq.png',
    tags: ['AI', 'Startup', 'Matching'],
    category: 'AI Platform'
  },
  {
    id: '3',
    title: 'SIMAN LABS 合作伙伴宣传图',
    description: '与 OKIE Finance 达成战略合作，推动 Web3 生态创新。SIMAN LABS 致力于赋能 AI 和区块链的融合应用。',
    imageUrl: 'https://res.cloudinary.com/diar08qd4/image/upload/f_auto,q_auto/v1765808049/image_5_pecbgt.png',
    tags: ['Partnership', 'Web3', 'Finance'],
    category: 'Strategic Alliance'
  },
  {
    id: '4',
    title: '行业分享会物料设计',
    description: '',
    imageUrl: 'https://res.cloudinary.com/diar08qd4/image/upload/f_auto,q_auto/v1765808053/image_8_ckgh7t.png',
    tags: ['Content', 'Community'],
    category: 'Content Platform'
  },
  {
    id: '5',
    title: 'Sovo AI助听器UI设计',
    description: '智能语音处理与助听器的创新应用。结合 AI 自主匹配、降噪处理、多设备支持，提供沉浸式交互体验。',
    imageUrl: 'https://res.cloudinary.com/diar08qd4/image/upload/f_auto,q_auto/v1765808047/Frame_141_vmpyr2.png',
    tags: ['Audio', 'AI', 'Social'],
    category: 'AI Platform'
  },
  {
    id: '6',
    title: 'AI学习助手小程序UI设计',
    description: '',
    imageUrl: 'https://res.cloudinary.com/diar08qd4/image/upload/f_auto,q_auto/v1765808047/Frame_142_n8e2zt.png',
    tags: ['Education'],
    category: 'EdTech'
  },
  {
    id: '7',
    title: '个人网站UI设计',
    description: '',
    imageUrl: 'https://res.cloudinary.com/diar08qd4/image/upload/f_auto,q_auto/v1765808047/All_zyubgw.png',
    tags: ['Design', 'React', 'Tailwind'],
    category: 'Personal Project'
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
