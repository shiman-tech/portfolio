import { motion } from 'framer-motion'
import { hackathons } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'
import { HiLightningBolt } from 'react-icons/hi'

export function Hackathons() {
  return (
    <section id="activities" className="section-padding relative bg-[var(--color-bg-secondary)]/30">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Activities"
          title="Hackathons & competitions"
          subtitle="Consistent participation in national and institutional innovation challenges."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hackathons.map((h, i) => (
            <motion.div
              key={h.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="glass group rounded-2xl p-5 transition-all duration-300 hover:border-violet-500/20"
            >
              <HiLightningBolt className="text-violet-400" size={20} />
              <h3 className="mt-3 font-semibold text-[var(--color-text-primary)]">
                {h.name}
              </h3>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">{h.org}</p>
              <span className="mt-3 inline-block font-mono text-xs text-cyan-400">
                {h.year}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
