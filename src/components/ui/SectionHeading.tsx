import { motion } from 'framer-motion'

interface SectionHeadingProps {
  label: string
  title: string
  subtitle?: string
}

export function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-16 max-w-2xl"
    >
      <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
        {label}
      </span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-[var(--color-text-muted)] md:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
