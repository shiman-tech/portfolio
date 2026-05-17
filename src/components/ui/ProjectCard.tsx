import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, type MouseEvent } from 'react'
import type { projects } from '../../data/portfolio'

type Project = (typeof projects)[number]

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 })

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={`glass group relative overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradient} p-[1px]`}
    >
      <div className="relative h-full rounded-2xl bg-[var(--color-bg-elevated)] p-6 md:p-8">
        <motion.div
          className="absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-40"
          style={{ backgroundColor: project.accent }}
        />

        <span
          className="font-mono text-xs uppercase tracking-widest"
          style={{ color: project.accent }}
        >
          0{index + 1}
        </span>

        <h3 className="mt-3 text-2xl font-bold text-[var(--color-text-primary)]">
          {project.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-cyan-400/90">{project.tagline}</p>
        <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
          {project.description}
        </p>

        <ul className="mt-5 space-y-2">
          {project.highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-[var(--color-border)] bg-white/[0.03] px-2.5 py-1 text-xs text-[var(--color-text-muted)] transition-colors group-hover:border-cyan-500/20 group-hover:text-[var(--color-text-primary)]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
