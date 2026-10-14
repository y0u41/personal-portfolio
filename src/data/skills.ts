// 技能数据：用于"关于我"模块的技能列表与熟练度展示
// level 为 0-100 的熟练度，数值按作者在 4 个真实项目中的实际使用深度设定（默认值，可随时微调）
export interface Skill {
  name: string // 技能名称
  level: number // 熟练度（0-100）
}

export const skills: Skill[] = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 88 },
  { name: 'Vite', level: 82 },
  { name: 'Tailwind CSS', level: 80 },
  { name: 'Node.js', level: 78 },
  { name: 'Express', level: 76 },
  { name: 'Framer Motion', level: 72 },
  { name: 'LLM / AI 应用', level: 68 },
]
