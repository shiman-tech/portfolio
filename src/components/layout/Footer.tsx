import { personal } from '../../data/portfolio'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)]/50">
      <div className="section-padding mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-semibold text-[var(--color-text-primary)]">
              {personal.shortName}
            </p>
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">
              Built with React, Vite & Framer Motion
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-muted)] transition-colors hover:text-cyan-400"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-muted)] transition-colors hover:text-cyan-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={personal.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-muted)] transition-colors hover:text-cyan-400"
              aria-label="LeetCode"
            >
              <SiLeetcode size={20} />
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-[var(--color-text-muted)]">
          © {year} {personal.shortName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
