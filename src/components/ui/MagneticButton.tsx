import { motion } from 'framer-motion'
import { useRef, type ReactNode, type MouseEvent } from 'react'
import clsx from 'clsx'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  type?: 'button' | 'submit'
  disabled?: boolean
}

export function MagneticButton({
  children,
  className,
  href,
  onClick,
  variant = 'primary',
  type = 'button',
  disabled = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null)

  const handleMove = (e: MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`
  }

  const handleLeave = () => {
    const el = ref.current
    if (el) el.style.transform = 'translate(0, 0)'
  }

  const variants = {
    primary:
      'bg-gradient-to-r from-cyan-500 to-cyan-400 text-[#0b0f19] font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30',
    secondary:
      'glass text-[var(--color-text-primary)] hover:border-cyan-500/30',
    ghost: 'text-[var(--color-text-muted)] hover:text-cyan-400',
  }

  const base = clsx(
    'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm transition-all duration-300',
    variants[variant],
    disabled && 'pointer-events-none opacity-60',
    className,
  )

  const motionProps = {
    whileHover: disabled ? undefined : { scale: 1.02 },
    whileTap: disabled ? undefined : { scale: 0.98 },
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    className: base,
    ref,
  }

  if (href) {
    return (
      <motion.a href={href} {...motionProps} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button type={type} onClick={onClick} disabled={disabled} {...motionProps}>
      {children}
    </motion.button>
  )
}
