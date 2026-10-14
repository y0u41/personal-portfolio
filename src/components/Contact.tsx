import { motion } from 'framer-motion'
import { profile } from '../data/site'

// 联系方式从 profile 派生：邮箱 + GitHub + 其他社交
// value 为对外展示的真实地址文字（不点也能看到），href 为实际跳转链接
const contacts = [
  { label: '邮箱', value: profile.email, href: `mailto:${profile.email}`, icon: '✉️' },
  {
    label: 'GitHub',
    value: profile.github.replace(/^https?:\/\//, ''),
    href: profile.github,
    icon: '🐙',
  },
  ...profile.socials.map((s) => ({
    label: s.label,
    value: s.href.replace(/^https?:\/\//, ''),
    href: s.href,
    icon: s.icon,
  })),
]

/**
 * 联系方式
 * 邮箱、GitHub、社交媒体链接，居中展示（内容来自 src/data/site.ts）
 * 默认直接显示真实地址文字，无需点击/悬停才可见
 */
function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto text-center max-w-2xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          联系方式
        </motion.h2>
        <motion.p
          className="text-gray-400 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          欢迎通过以下方式与我取得联系，期待交流～
        </motion.p>

        <div className="flex flex-col items-center gap-3">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full max-w-md flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400/50 transition-colors"
            >
              <span className="text-lg">{c.icon}</span>
              <span className="text-base text-gray-300 group-hover:text-purple-400 transition-colors">
                {c.label}：{c.value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
