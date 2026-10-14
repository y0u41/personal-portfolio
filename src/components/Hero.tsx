import { motion } from 'framer-motion'
import { profile } from '../data/site'

/**
 * 首页 Hero 区
 * 深色主题 + 渐变色：大标题（渐变文字）、职位小标题、简介、头像（渐变光环）
 * 进入时播放错峰淡入上浮动画（Framer Motion）
 * 内容全部来自 src/data/site.ts，填真实信息只改那一个文件。
 */

// 容器入场动画（子元素错峰上浮）
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
}

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* 背景渐变光晕，增强深色主题层次 */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-purple-600/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-3xl text-center"
      >
        {/* 头像 + 渐变光环 */}
        <motion.div variants={item} className="mb-8 flex justify-center">
          <div className="rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-indigo-500 p-1 shadow-[0_0_40px_rgba(168,85,247,0.45)]">
            {profile.avatar ? (
              <img
                src={profile.avatar}
                alt={`${profile.name} 的头像`}
                loading="lazy"
                className="h-32 w-32 rounded-full border-4 border-[#0a0a0a] object-cover"
              />
            ) : (
              <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-[#0a0a0a] bg-white/5 text-4xl font-bold text-white">
                {profile.name.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
        </motion.div>

        {/* 大标题（渐变文字） */}
        <motion.h1
          variants={item}
          className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl"
        >
          你好，我是{' '}
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent">
            {profile.name}
          </span>
        </motion.h1>

        {/* 职位小标题（渐变点缀） */}
        <motion.p
          variants={item}
          className="mt-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-lg font-medium text-transparent sm:text-xl"
        >
          {profile.title}
        </motion.p>

        {/* 简介 */}
        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg"
        >
          {profile.intro}
        </motion.p>

        {/* CTA 按钮（主按钮渐变 + 次按钮描边） */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 font-medium text-white shadow-lg shadow-purple-500/30 transition-all hover:opacity-90 hover:shadow-pink-500/40"
          >
            查看我的项目
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 px-8 py-3 font-medium text-white/90 transition-colors hover:border-white/40 hover:bg-white/5"
          >
            联系我
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
