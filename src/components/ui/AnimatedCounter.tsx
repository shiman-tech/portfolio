import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  label: string
  detail?: string
}

export function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  decimals,
  label,
  detail,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const decPlaces = decimals ?? (Number.isInteger(value) ? 0 : 2)
  const [count, setCount] = useState<string>(decPlaces > 0 ? (0).toFixed(decPlaces) : '0')

  useEffect(() => {
    if (!inView) return
    const duration = 1500
    const startTime = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = eased * value
      setCount(decPlaces > 0 ? current.toFixed(decPlaces) : Math.round(current).toString())
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [inView, value, decPlaces])

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
