import { motion } from 'framer-motion'
import { skillCategories } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'

const iconMap: Record<string, string> = {
  Python: '🐍',
  Java: '☕',
  JavaScript: 'JS',
  Dart: '◇',
  C: 'C',
  Flutter: '◆',
  ReactJS: '⚛',
  FastAPI: '⚡',
  AWS: '☁',
  Docker: '🐳',
  PostgreSQL: '🐘',
  MongoDB: '🍃',
  default: '●',
}

export function Skills() {
  return (
    <section id="skills" className="section-padding relative bg-[var(--color-bg-secondary)]/30">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Skills"
          title="Technical arsenal"
          subtitle="A curated stack spanning languages, frameworks, cloud, and tooling."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.08, duration: 0.5 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-cyan-400">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-border)] bg-white/[0.03] px-3 py-1.5 text-sm text-[var(--color-text-primary)] transition-colors hover:border-cyan-500/30 hover:bg-cyan-500/5"
                    style={{ transitionDelay: `${si * 20}ms` }}
                  >
                    <span className="text-xs opacity-60">
                      {iconMap[skill] ?? iconMap.default}
                    </span>
                    {skill}
                  </motion.span>
                ))}
              </div>

              <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${70 + (ci % 3) * 10}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + ci * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
