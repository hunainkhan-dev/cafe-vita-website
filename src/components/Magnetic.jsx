import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Magnetic({ children, className = '', strength = 0.3, as = 'a', ...rest }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 15 })
  const sy = useSpring(y, { stiffness: 200, damping: 15 })
  const M = motion[as] || motion.a

  const move = (e) => {
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width / 2) * strength)
    y.set((e.clientY - r.top - r.height / 2) * (strength + 0.1))
  }
  const leave = () => { x.set(0); y.set(0) }

  return (
    <M ref={ref} onPointerMove={move} onPointerLeave={leave} style={{ x: sx, y: sy }} className={className} {...rest}>
      {children}
    </M>
  )
}
