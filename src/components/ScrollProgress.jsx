import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })
  return (
    <motion.div
      className="fixed left-0 top-0 z-[120] h-[2px] w-full origin-left"
      style={{ scaleX: x, background: 'linear-gradient(90deg,#E9C46A,#C6F135)' }}
    />
  )
}
