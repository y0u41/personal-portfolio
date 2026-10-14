import { motion } from 'framer-motion'
import { projects, type Project } from '../data/projects'

/**
 * 项目展示
 * 按 type 分组：每组含小标题 + 卡片网格（截图/标题/描述/技术栈/链接）
 * 卡片滚动进入视口时错峰淡入上浮
 * 数据来自 src/data/projects.ts（已填入 E:\git 下的真实项目）
 */

// 按 type 分组，保持首次出现顺序
const groups = projects.reduce<Record<string, Project[]>>((acc, project) => {
  ;(acc[project.type] ??= []).push(project)
  return acc
}, {})
const groupEntries = Object.entries(groups)

// 按类型给占位卡分配不同渐变，避免四张卡撞色
const TYPE_GRADIENT: Record<string, string> = {
  '全栈应用': 'from-purple-600 via-violet-600 to-indigo-600',
  'AI 工具': 'from-pink-600 via-rose-600 to-fuchsia-600',
  '前端作品集': 'from-cyan-600 via-sky-600 to-blue-600',
}
const FALLBACK_GRADIENT = 'from-slate-600 via-purple-600 to-indigo-600'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-colors hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      {/* 项目截图：有真实截图用图（懒加载+悬停放大），否则渲染带项目名的渐变占位卡 */}
      <div className="overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div
            className={`flex h-48 w-full items-center justify-center bg-gradient-to-br ${
              TYPE_GRADIENT[project.type] ?? FALLBACK_GRADIENT
            }`}
          >
            <div className="flex flex-col items-center gap-2 px-4 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/30 bg-white/10 text-3xl font-bold text-white shadow-lg backdrop-blur-sm">
                {project.name.charAt(0)}
              </span>
              <span className="text-sm font-medium tracking-wide text-white/80">
                {project.name}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="p-5">
        {/* 标题 */}
        <h3 className="mb-2 text-lg font-semibold transition-colors group-hover:text-purple-400">
          {project.name}
        </h3>

        {/* 描述 */}
        <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-400">
          {project.description}
        </p>

        {/* 技术栈标签 */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-xs text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 跳转链接 */}
        <span className="inline-flex items-center text-sm font-medium text-purple-400 transition-colors group-hover:text-pink-400">
          查看项目
          <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </motion.a>
  )
}

function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6">
      {/* 背景渐变光晕，呼应 Hero 的深色层次 */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="container relative z-10 mx-auto">
        {/* 区块标题（渐变点缀） */}
        <motion.h2
          className="mb-4 text-center text-3xl font-extrabold md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent">
            项目展示
          </span>
        </motion.h2>
        <motion.p
          className="mb-14 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          以下是一些我参与或独立完成的作品，按类型分类展示
        </motion.p>

        {/* 按类型分组渲染 */}
        <div className="space-y-14">
          {groupEntries.map(([type, items]) => (
            <div key={type}>
              {/* 类型小标题 */}
              <motion.div
                className="mb-6 flex items-center gap-3"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="h-5 w-1.5 rounded-full bg-gradient-to-b from-purple-400 to-pink-500" />
                <h3 className="text-xl font-bold text-white">{type}</h3>
              </motion.div>

              {/* 该类型下的卡片网格 */}
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
