import { motion } from 'framer-motion'

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0b0f19]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="relative mx-auto mb-6 h-16 w-16">
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-cyan-500/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute inset-1 rounded-full border-t-2 border-cyan-400"
            animate={{ rotate: -360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
          <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-cyan-400">
            SK
          </span>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-mono text-sm tracking-widest text-slate-400"
        >
          LOADING PORTFOLIO
        </motion.p>
        <motion.div
          className="mx-auto mt-4 h-0.5 w-32 overflow-hidden rounded-full bg-slate-800"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 to-violet-500"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
