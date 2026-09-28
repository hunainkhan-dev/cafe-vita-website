import { motion } from 'framer-motion'
import { WhatsApp } from './icons'
import { Reveal } from './Reveal'
import { WA, IG, MAPS, PHONE, ADDRESS } from '../lib/data'

const explore = [
  ['Deals', '#deals'], ['Menu', '#menu'], ['Gallery', '#gallery'],
  ['Catering', '#catering'], ['Location', '#location'],
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      {/* CTA band */}
      <div className="border-b border-white/10 bg-char">
        <div className="wrap flex flex-col items-center justify-between gap-6 py-12 text-center md:flex-row md:text-left">
          <Reveal>
            <p className="eyebrow text-lg text-gold">Still hungry?</p>
            <h3 className="display mt-1 text-[clamp(28px,5vw,52px)]">Order in one tap.</h3>
          </Reveal>
          <Reveal delay={0.1}>
            <a href={WA} target="_blank" rel="noopener" className="btn btn-lime text-sm">
              <WhatsApp className="h-[18px] w-[18px]" /> Order on WhatsApp
            </a>
          </Reveal>
        </div>
      </div>

      {/* columns */}
      <div className="wrap grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1.2fr] md:gap-16">
        <Reveal>
          <div className="flex items-center gap-3">
            <img src="/img/logo.jpg" alt="Cafe Vita logo" width="48" height="48" className="h-12 w-12 rounded-full object-cover ring-1 ring-lime/40" />
            <div>
              <div className="font-display text-2xl uppercase leading-none">Cafe <span className="text-lime">Vita</span></div>
              <div className="mt-1 text-[9px] uppercase tracking-[0.36em] text-ash">Live · Love · Eat</div>
            </div>
          </div>
          <p className="mt-5 max-w-[38ch] text-sm text-ash">Fresh daily desi dining, wood-fired pizzas and sizzling grills on Main Korangi Road — plus corporate catering for the whole office floor.</p>
          <div className="mt-6 flex gap-3">
            <a href={IG} target="_blank" rel="noopener" aria-label="Cafe Vita on Instagram" className="grid h-10 w-10 place-content-center rounded-full border border-white/10 text-ash transition-colors hover:border-lime/40 hover:text-lime">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4a3.7 3.7 0 0 1-1.4-.9 3.7 3.7 0 0 1-.9-1.4c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1C2.6 9.5 2.6 9.9 2.6 12s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1a3.5 3.5 0 0 0-.8-1.3 3.5 3.5 0 0 0-1.3-.8c-.4-.2-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Zm5.1-.3a1.1 1.1 0 1 1-2.3 0 1.1 1.1 0 0 1 2.3 0Z"/></svg>
            </a>
            <a href={WA} target="_blank" rel="noopener" aria-label="Cafe Vita on WhatsApp" className="grid h-10 w-10 place-content-center rounded-full border border-white/10 text-ash transition-colors hover:border-lime/40 hover:text-lime">
              <WhatsApp className="h-[18px] w-[18px]" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="text-[11px] uppercase tracking-[0.2em] text-lime">Explore</div>
          <ul className="mt-4 flex flex-col gap-3">
            {explore.map(([t, h]) => (
              <li key={h}><a href={h} className="text-sm text-ash transition-colors hover:text-smoke">{t}</a></li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="text-[11px] uppercase tracking-[0.2em] text-lime">Visit &amp; order</div>
          <ul className="mt-4 flex flex-col gap-4 text-sm">
            <li className="flex gap-3"><span className="text-lime">◉</span><a href={MAPS} target="_blank" rel="noopener" className="text-ash transition-colors hover:text-smoke">{ADDRESS}</a></li>
            <li className="flex gap-3"><span className="text-lime">✆</span><a href={`tel:+92${PHONE.replace(/\s/g, '').replace(/^0/, '')}`} className="text-ash transition-colors hover:text-smoke">{PHONE}</a></li>
            <li className="flex gap-3"><span className="text-lime">◷</span><span className="text-ash">Daily · 12:00 PM – 2:00 AM</span></li>
            <li className="flex gap-3"><span className="text-gold">★</span><span className="text-ash">4.7 on Google · 500+ orders / week</span></li>
          </ul>
        </Reveal>
      </div>

      {/* giant wordmark */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-x-0 bottom-6 top-0 z-0"
          style={{ background: 'radial-gradient(60% 120% at 50% 120%, rgba(198,241,53,.12), transparent 70%)' }} />
        <motion.div
          className="relative select-none px-4 text-center font-display text-[clamp(64px,20vw,300px)] uppercase leading-[.8]"
          style={{ color: 'transparent', WebkitTextStroke: '1px rgba(198,241,53,.28)' }}
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
        >
          Cafe<b className="font-normal text-lime" style={{ WebkitTextStroke: '0' }}>.</b>Vita
        </motion.div>
      </div>

      <div className="wrap flex flex-wrap justify-center gap-4 border-t border-white/10 py-8 text-[12px] tracking-wide text-ash sm:justify-between">
        <span>© 2026 Cafe Vita · Korangi, Karachi</span>
        <span>Live · Love · Eat</span>
        <span>Design &amp; build · <a href={WA} className="text-smoke transition-colors hover:text-lime">Axiom Web Builder</a></span>
      </div>
    </footer>
  )
}
