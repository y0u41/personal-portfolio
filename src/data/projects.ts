// 项目数据：每个项目对应 PRD 中"项目展示"卡片所需的字段
// type 用于按类型分组展示（全栈应用 / AI 工具 / 前端作品集）
export interface Project {
  id: number
  name: string // 项目名称
  description: string // 简短描述
  image?: string // 项目截图（可选）。当前用抽象渐变占位卡，待项目完善后放真实截图到 public/shots/ 并填此处
  techStack: string[] // 技术栈标签
  link: string // 项目链接（指向对应子目录的具体代码）
  type: string // 项目类型，用于分组
}

// 链接指向 y0u41/git 仓库中各项目的真实子目录（非仓库主页，避免点过去看不到具体项目）
export const projects: Project[] = [
  {
    id: 1,
    name: '简易记账本',
    description:
      '前后端分离的记账应用：支持注册登录、收支记录增删、日期区间筛选与汇总。后端 Express + SQLite，每个用户数据隔离。',
    techStack: ['React', 'TypeScript', 'Express', 'SQLite', 'Vite'],
    link: 'https://github.com/y0u41/git/tree/master/react-router-app',
    type: '全栈应用',
  },
  {
    id: 2,
    name: '简历参谋',
    description:
      '面向应届生的求职全流程 AI 工具：贴简历 + 说岗位即出评分、挑刺、改法与岗位匹配，覆盖「评估 → 改简历 → 面试准备」闭环。',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'LLM'],
    link: 'https://github.com/y0u41/git/tree/master/resume-evaluator',
    type: 'AI 工具',
  },
  {
    id: 3,
    name: '简历助手',
    description:
      '面向毕业生的简历制作 + 岗位匹配 + 评价建议 Web/H5 工具（MVP）。六个切片（骨架 / 认证 / 简历 / 导出 / 评测 / 历史反馈）已全部完成。',
    techStack: ['React', 'TypeScript', 'Express', 'Tailwind CSS', 'Vite'],
    link: 'https://github.com/y0u41/git/tree/master/resume-workshop/resume-workshop',
    type: '全栈应用',
  },
  {
    id: 4,
    name: 'yu 的作品集',
    description:
      '单页滚动个人作品集静态站点（React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion），即本项目的早期版本。',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://github.com/y0u41/git/tree/master/personal%20work%20collection/yu-portfolio',
    type: '前端作品集',
  },
]
