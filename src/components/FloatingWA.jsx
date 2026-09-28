import { motion } from 'framer-motion'
import { WhatsApp } from './icons'
import { WA } from '../lib/data'

export default function FloatingWA() {
  return (
    <motion.a
      href={WA} target="_blank" rel="noopener" aria-label="Order on WhatsApp" data-hot
      className="fixed bottom-6 right-6 z-[60] grid h-14 w-14 place-content-center rounded-full bg-lime text-[#0a0a0a] animate-pulse2"
      style={{ boxShadow: '0 12px 34px -6px rgba(198,241,53,.5)' }}
      initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1.4, type: 'spring', stiffness: 200, damping: 14 }}
      whileHover={{ scale: 1.1 }}
    >
      <WhatsApp className="h-7 w-7" />
    </motion.a>
  )
}
