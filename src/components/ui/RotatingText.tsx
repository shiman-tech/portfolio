import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface RotatingTextProps {
  words: string[]
  interval?: number
}

export function RotatingText({ words, interval = 3000 }: RotatingTextProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length)
    }, interval)
    return () => clearInterval(id)
  }, [words.length, interval])

  return (
    <span className="inline-flex min-h-[1.5em] items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -24, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient font-semibold"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
