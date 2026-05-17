import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { HiArrowDown } from 'react-icons/hi'
import { personal, rotatingRoles } from '../../data/portfolio'
import { MagneticButton } from '../ui/MagneticButton'
import { RotatingText } from '../ui/RotatingText'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 2.4 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center section-padding pt-28"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400/80"
          >
            Portfolio · {personal.title}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-[var(--color-text-primary)] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {personal.name.split(' ').map((word, i) => (
              <span key={i} className={i === 2 ? 'text-gradient' : ''}>
                {word}{' '}
              </span>
            ))}
          </motion.h1>

          <motion.div variants={item} className="mt-6 text-lg md:text-xl">
            <span className="text-[var(--color-text-muted)]">I build as a </span>
            <RotatingText words={rotatingRoles} />
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-text-muted)] md:text-lg"
          >
            {personal.tagline} crafting scalable full-stack systems, intelligent mobile
            apps, and cloud-native solutions with precision and purpose.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#projects" variant="primary">
              View Projects
            </MagneticButton>
            <MagneticButton href="/resume.pdf" variant="secondary">
              <FaDownload size={14} /> Download Resume
            </MagneticButton>
            <MagneticButton href="#contact" variant="secondary">
              Contact Me
            </MagneticButton>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-5">
            {[
              { href: personal.github, icon: FaGithub, label: 'GitHub' },
              { href: personal.linkedin, icon: FaLinkedin, label: 'LinkedIn' },
              { href: personal.leetcode, icon: SiLeetcode, label: 'LeetCode' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="glass flex h-11 w-11 items-center justify-center rounded-xl text-[var(--color-text-muted)] transition-all duration-300 hover:border-cyan-500/30 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto"
        >
          <div className="glow-border relative rounded-full p-[3px]">
            <motion.div
              className="relative h-56 w-56 overflow-hidden rounded-full bg-[var(--color-bg-elevated)] sm:h-64 sm:w-64 md:h-72 md:w-72"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <motion.div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-[#151c2c] to-[#0b0f19]">
                <img
                  src="/profile.png"
                  alt="Shiman Kumar D"
                  className="absolute inset-0 h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <span className="text-gradient text-6xl font-bold sm:text-7xl">SK</span>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            className="absolute -right-2 top-8 glass rounded-xl px-4 py-2 text-xs font-mono text-cyan-400"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
          >
            Available for opportunities
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[var(--color-text-muted)] transition-colors hover:text-cyan-400"
        aria-label="Scroll to about"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <HiArrowDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  )
}
