import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Reveal, SplitReveal } from './Reveal'
import { menu, menuImages } from '../lib/data'

const tabs = [['desi', 'Desi Delights'], ['fast', 'Pizzas & Fast Food'], ['sweet', 'Drinks & Desserts']]

export default function Menu() {
  const [cat, setCat] = useState('desi')

  return (
    <section id="menu" className="py-20 md:py-32">
      <div className="wrap grid items-center gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <Reveal className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10">
          <AnimatePresence mode="wait">
            <motion.img
              key={cat} src={menuImages[cat]} alt={`Cafe Vita — ${cat} dishes`} width="640" height="800" loading="lazy"
              className="h-full w-full object-cover"
              initial={{ opacity: 0, scale: 1.08 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
            />
          </AnimatePresence>
          <div className="pointer-events-none absolute inset-0" style={{ background: 'linear-gradient(180deg,transparent 60%,rgba(10,11,8,.7))' }} />
        </Reveal>

        <div>
          <Reveal><span className="label">The kitchen</span></Reveal>
          <h2 className="display mt-3.5 text-[clamp(34px,5vw,72px)]"><SplitReveal text="Browse the board." /></h2>
          <Reveal delay={0.12}><p className="mt-4 text-ash">From home-style desi to fast food that hits at midnight. Tap a category.</p></Reveal>

          <Reveal delay={0.16} className="mt-6 flex flex-wrap gap-2">
            {tabs.map(([id, t]) => (
              <button key={id} onClick={() => setCat(id)}
                className={`rounded-full border px-[18px] py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors
                  ${cat === id ? 'border-lime bg-lime text-[#0a0a0a]' : 'border-white/10 text-ash hover:border-lime/25 hover:text-smoke'}`}>
                {t}
              </button>
            ))}
          </Reveal>

          <div className="mt-6 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div key={cat} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                {menu[cat].map(([n, d, p], i) => (
                  <motion.div key={n} className="flex items-baseline gap-3.5 border-b border-white/10 py-4"
                    initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                    <span>
                      <span className="block font-semibold text-[clamp(16px,1.5vw,19px)] text-smoke">{n}</span>
                      <span className="text-[12.5px] text-ash">{d}</span>
                    </span>
                    <span className="mt-[-4px] flex-1 border-b border-dotted border-smoke/20" />
                    <span className="whitespace-nowrap font-bold tabular-nums text-gold">{p}</span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
