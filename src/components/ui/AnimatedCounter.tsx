import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  value: number
  prefix?: string
  suffix?: string
  label: string
  detail?: string
}

export function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  label,
  detail,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1500
    const startTime = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      start = Math.round(eased * value)
      setCount(start)
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [inView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass group rounded-2xl p-6 transition-all duration-300 hover:border-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/5"
    >
      <span className="text-gradient text-4xl font-bold md:text-5xl">
        {prefix}
        {count}
        {suffix}
      </span>
      <p className="mt-3 font-medium text-[var(--color-text-primary)]">{label}</p>
      {detail && (
        <p className="mt-1 text-sm text-[var(--color-text-muted)]">{detail}</p>
      )}
    </motion.div>
  )
}
