import { motion } from 'framer-motion'
import { achievements, experience } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'
import { AnimatedCounter } from '../ui/AnimatedCounter'

export function Experience() {
  return (
    <section id="experience" className="section-padding relative bg-[var(--color-bg-secondary)]/30">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Experience"
          title="Achievements & exposure"
          subtitle="Recognized performance, industry visits, and continuous learning."
        />

        <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a) => (
            <AnimatedCounter
              key={a.label}
              value={a.value}
              prefix={a.prefix}
              suffix={a.suffix}
              label={a.label}
              detail={a.detail}
            />
          ))}
        </div>

        <div className="relative space-y-0">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/50 via-violet-500/30 to-transparent md:left-1/2 md:-translate-x-px" />

          {experience.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative flex gap-8 pb-12 md:w-1/2 ${
                i % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12 md:mt-[-4rem]'
              }`}
            >
              <div className="relative z-10 mt-1.5 h-4 w-4 shrink-0 rounded-full border-2 border-cyan-400 bg-[var(--color-bg-primary)] shadow-lg shadow-cyan-500/30 md:absolute md:left-auto md:right-[-26px] md:top-6 md:mx-0 md:translate-x-1/2" />

              <div className="glass flex-1 rounded-2xl p-6">
                <span className="font-mono text-xs text-cyan-400">{exp.period}</span>
                <h3 className="mt-2 font-semibold text-[var(--color-text-primary)]">
                  {exp.title}
                </h3>
                <p className="mt-1 text-sm text-violet-400/90">{exp.org}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
