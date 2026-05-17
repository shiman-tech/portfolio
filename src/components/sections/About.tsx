import { motion } from 'framer-motion'
import { personal, education } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="About"
          title="Engineering with intent"
          subtitle="Passionate about building software that solves real problems at scale."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 lg:grid-cols-2"
        >
          <div className="glass rounded-2xl p-8">
            <p className="leading-relaxed text-[var(--color-text-muted)]">
              {personal.objective}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { label: 'Location', value: personal.location },
                { label: 'Email', value: personal.email },
                { label: 'Phone', value: personal.phone },
                { label: 'Status', value: 'Open to internships & roles' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-medium uppercase tracking-wider text-cyan-400/80">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-text-primary)]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass group rounded-2xl p-6 transition-all duration-300 hover:border-cyan-500/20"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-[var(--color-text-primary)]">
                      {edu.degree}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="rounded-lg bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-400">
                    {edu.score}
                  </span>
                </div>
                <p className="mt-2 font-mono text-xs text-[var(--color-text-muted)]">
                  {edu.period}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
