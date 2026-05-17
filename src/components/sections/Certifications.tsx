import { motion } from 'framer-motion'
import { certifications } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'
import { FiAward } from 'react-icons/fi'

export function Certifications() {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Certifications"
          title="Validated expertise"
          subtitle="Industry-recognized credentials across Python, Java, Flutter, and web development."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="glass group flex gap-4 rounded-2xl p-6 transition-all duration-300 hover:border-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 transition-colors group-hover:bg-cyan-500/20">
                <FiAward size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-text-primary)]">
                  {cert.name}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  {cert.issuer} · {cert.date}
                </p>
                {cert.badge && (
                  <span className="mt-2 inline-block rounded-md bg-violet-500/10 px-2 py-0.5 text-xs font-medium text-violet-400">
                    {cert.badge}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
