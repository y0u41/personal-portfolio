// =====================================================================
// 全站内容配置 —— 唯一需要你填写真实信息的地方
// 修改本文件即可更新：姓名、头像、简介、关于我、联系方式、页脚。
// 组件层已全部改为从本文件读取，无需改动任何组件代码。
//
// 头像建议：把图片放到 public/ 目录下（如 public/avatar.jpg），
// 然后这里写 "/avatar.jpg" 即可，避免依赖外部随机图。
// 留空时 Hero 会自动显示姓名首字母占位，不会裂图。
// =====================================================================

export interface SocialLink {
  label: string // 显示名称，如 "微博" / "知乎"
  href: string // 链接地址
  icon: string // emoji 图标
}

export interface SiteProfile {
  name: string // 你的名字 / 昵称
  title: string // 职位 / 一句话头衔
  avatar: string // 头像图片地址（留空则用首字母占位）
  intro: string // 首页简介（1-2 句）
  about: string // "关于我" 详细介绍
  email: string // 邮箱
  github: string // GitHub 主页
  socials: SocialLink[] // 其他社交媒体（不含 GitHub）
}

export const profile: SiteProfile = {
  name: 'yu',
  title: '个人项目',
  avatar: '/avatar.jpg', // 头像已就位（public/avatar.jpg）
  intro:
    '我是 yu，喜欢用代码把想法变成能用的小工具。这里是我课余捣鼓的一些 Web 项目——从全栈应用到 AI 助手，记录一步步踩坑和成长。',
  about:
    '你好，我是 yu，一名喜欢动手的在校学生。\n\n比起空谈，我更相信先把东西做出来：从前端界面到后端接口、从数据库到部署，我都愿意亲手试一遍。目前我主要用 React + TypeScript 写界面，用 Node.js / Express 搭后端，数据库玩过 SQLite，最近也在尝试把大模型接进实际产品（比如简历相关的 AI 工具）。\n\n这个站点本身也是我用 Vite + Tailwind + Framer Motion 搭起来的。如果你也在做有趣的东西，欢迎随时找我聊——邮箱和 GitHub 都在下面。',
  email: 't3205502866@126.com',
  github: 'https://github.com/y0u41',
  socials: [], // 需要补充其他社交时，在此加 { label, href, icon }，例如微博 / 知乎
}
