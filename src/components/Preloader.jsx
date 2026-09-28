import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Logo } from './icons'

export default function Preloader({ onDone }) {
  const [p, setP] = useState(0)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setGone(true); onDone?.(); return }
    let v = 0
    const iv = setInterval(() => {
      v = Math.min(100, v + Math.random() * 22)
      setP(v)
      if (v >= 100) {
        clearInterval(iv)
        setTimeout(() => { setGone(true); onDone?.() }, 350)
      }
    }, 130)
    return () => clearInterval(iv)
  }, [onDone])

  return (
    <AnimatePresence>
      {!gone && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-6 bg-void"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Logo className="w-16 h-16 animate-spinMark" />
          <div className="font-display text-2xl uppercase tracking-widest">
            Cafe <span className="text-lime">Vita</span>
          </div>
          <div className="h-[2px] w-[180px] overflow-hidden rounded bg-white/10">
            <div className="h-full rounded bg-lime transition-[width] duration-150" style={{ width: `${p}%` }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
