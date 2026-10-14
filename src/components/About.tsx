import { motion } from 'framer-motion'
import { skills } from '../data/skills'
import { profile } from '../data/site'

/**
 * 关于我
 * 详细介绍 + 技能列表（带熟练度进度条），滚动进入视口时淡入
 */
function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          关于我
        </motion.h2>

        <motion.p
          className="text-gray-400 leading-relaxed mb-12 text-center md:text-left whitespace-pre-line"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {profile.about}
        </motion.p>

        {/* 技能列表 */}
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-gray-200">{skill.name}</span>
                <span className="text-gray-500 text-sm">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-purple-400 to-pink-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
