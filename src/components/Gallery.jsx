import { motion } from 'framer-motion'
import { Reveal, SplitReveal } from './Reveal'
import { gallery, IG } from '../lib/data'

export default function Gallery() {
  return (
    <section id="gallery" className="border-y border-white/10 bg-char py-20 md:py-32">
      <div className="wrap">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
          <div>
            <Reveal><span className="label">From our kitchen</span></Reveal>
            <h2 className="display mt-3.5 text-[clamp(38px,7vw,96px)]"><SplitReveal text="Straight off the grill." /></h2>
          </div>
          <Reveal delay={0.14}>
            <a href={IG} target="_blank" rel="noopener" className="btn btn-ghost">Follow on Instagram</a>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {gallery.map((g, i) => (
            <motion.a
              key={g.src} href={IG} target="_blank" rel="noopener"
              className={`group relative overflow-hidden rounded-2xl border border-white/10 ${i % 5 === 0 ? 'md:row-span-2' : ''}`}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.06, ease: [0.2, 0.7, 0.2, 1] }}
            >
              <img src={g.src} alt={`Cafe Vita — ${g.title}`} loading="lazy"
                className="aspect-square h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/10 to-transparent opacity-70" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-[10px] uppercase tracking-[0.24em] text-lime">{g.tag}</span>
                <div className="font-display text-lg uppercase text-smoke">{g.title}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
