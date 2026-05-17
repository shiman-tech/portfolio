import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { FiMoon, FiSun } from 'react-icons/fi'
import { navLinks } from '../../data/portfolio'
import clsx from 'clsx'

interface NavbarProps {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 40)
  })

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled ? 'py-3' : 'py-5',
      )}
    >
      <nav
        className={clsx(
          'mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 md:px-6',
          scrolled && 'glass shadow-lg shadow-black/10',
        )}
      >
        <a href="#" className="font-mono text-sm font-semibold tracking-tight">
          <span className="text-cyan-400">SK</span>
          <span className="text-[var(--color-text-muted)]">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-[var(--color-text-muted)] transition-colors hover:bg-white/5 hover:text-cyan-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <motion.div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="glass flex h-10 w-10 items-center justify-center rounded-xl text-[var(--color-text-muted)] transition-colors hover:text-cyan-400"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          <a
            href="#contact"
            className="hidden rounded-xl bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400 transition-colors hover:bg-cyan-500/20 sm:block"
          >
            Hire Me
          </a>

          <button
            type="button"
            className="glass flex h-10 w-10 items-center justify-center rounded-xl md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
          </button>
        </motion.div>
      </nav>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass mx-4 mt-2 rounded-2xl p-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-[var(--color-text-muted)] hover:bg-white/5 hover:text-cyan-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}
