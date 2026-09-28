import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { WhatsApp, Logo } from './icons'
import Magnetic from './Magnetic'
import { WA, PHONE } from '../lib/data'

const links = [
  ['Deals', '#deals'], ['Menu', '#menu'], ['Gallery', '#gallery'],
  ['Catering', '#catering'], ['Location', '#location'],
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    addEventListener('scroll', onScroll, { passive: true })
    return () => removeEventListener('scroll', onScroll)
  }, [])

  // Lock background scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${scrolled ? 'border-white/10 bg-void/90 backdrop-blur-xl' : 'border-transparent'}`}>
        <div className={`wrap flex items-center justify-between transition-all duration-500 ${scrolled ? 'py-3' : 'py-[18px]'}`}>
          <a href="#top" className="flex items-center gap-3" aria-label="Cafe Vita home">
            <img src="/img/logo.jpg" alt="Cafe Vita logo" width="40" height="40" className="h-10 w-10 rounded-full object-cover ring-1 ring-lime/40" />
            <span>
              <span className="block font-display text-xl uppercase leading-none tracking-wide">Cafe <b className="font-normal text-lime">Vita</b></span>
              <span className="mt-[2px] block text-[8px] uppercase tracking-[0.36em] text-ash">Live · Love · Eat</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {links.map(([t, h]) => (
              <a key={h} href={h} className="group relative text-xs uppercase tracking-[0.14em] text-ash transition-colors hover:text-smoke">
                {t}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-lime transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <Magnetic href={WA} target="_blank" rel="noopener" className="hidden items-center gap-2 rounded-full border border-gold/50 px-[18px] py-[9px] text-xs font-semibold uppercase tracking-wider text-gold transition-colors hover:bg-gold hover:text-[#0a0a0a] sm:inline-flex" aria-label="Order on WhatsApp">
            <WhatsApp className="h-[15px] w-[15px]" /> Order now
          </Magnetic>

          <button className="flex flex-col gap-[5px] p-1.5 lg:hidden" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
            <span className="h-[2px] w-6 bg-smoke" />
            <span className="h-[2px] w-6 bg-smoke" />
            <span className="h-[2px] w-6 bg-smoke" />
          </button>
        </div>
      </header>

      {/* Mobile menu — rendered OUTSIDE the header so the header's backdrop-blur
          can't trap this fixed overlay inside a 76px containing block. */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-[80] flex flex-col lg:hidden"
            style={{ backgroundColor: '#0A0B08' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2"
              style={{ background: 'radial-gradient(65% 60% at 50% 100%, rgba(198,241,53,.14), transparent 70%)' }} />

            <div className="wrap flex items-center justify-between py-[18px]">
              <div className="flex items-center gap-3">
                <Logo className="h-9 w-9" />
                <span className="font-display text-xl uppercase leading-none tracking-wide">Cafe <b className="font-normal text-lime">Vita</b></span>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="grid h-10 w-10 place-content-center rounded-full border border-white/10 text-smoke transition-colors hover:border-lime/40 hover:text-lime">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
              </button>
            </div>

            <nav aria-label="Mobile" className="relative flex flex-1 flex-col items-center justify-center gap-7">
              {links.map(([t, h], i) => (
                <motion.a key={h} href={h} onClick={() => setOpen(false)}
                  className="font-display text-4xl uppercase text-smoke transition-colors hover:text-lime"
                  initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  transition={{ delay: 0.06 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}>
                  {t}
                </motion.a>
              ))}
              <motion.a href={WA} target="_blank" rel="noopener" className="btn btn-lime mt-3" onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 + links.length * 0.06, duration: 0.4 }}>
                <WhatsApp /> Order on WhatsApp
              </motion.a>
            </nav>

            <div className="wrap pb-8 text-center text-[12px] uppercase tracking-[0.2em] text-ash">{PHONE} · Korangi, Karachi</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
