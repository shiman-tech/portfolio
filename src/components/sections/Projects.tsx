import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { projects } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'
import { ProjectCard } from '../ui/ProjectCard'

const filters = ['All', 'Full-Stack', 'Mobile', 'AI/ML'] as const

export function Projects() {
  const [active, setActive] = useState<string>('All')

  const filtered = projects.filter((p) => {
    if (active === 'All') return true
    if (active === 'Full-Stack') return p.id === 'stream-sphere' || p.id === 'public-eye'
    if (active === 'Mobile') return p.id === 'herd-ai'
    if (active === 'AI/ML') return p.id === 'herd-ai' || p.id === 'public-eye'
    return true
  })

  return (
    <section id="projects" className="section-padding relative">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Projects"
          title="Selected work"
          subtitle="Production-grade systems spanning streaming, AI, and enterprise mobile."
        />

        <div className="mb-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                active === f
                  ? 'bg-cyan-500/15 text-cyan-400 ring-1 ring-cyan-500/30'
                  : 'glass text-[var(--color-text-muted)] hover:text-cyan-400'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-8 lg:grid-cols-1">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
