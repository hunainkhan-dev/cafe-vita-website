import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import StarField from './StarField'
import Magnetic from './Magnetic'
import { WhatsApp } from './icons'
import { WA } from '../lib/data'

export default function Hero() {
  const root = useRef(null)
  const poster = useRef(null)
  const inner = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll parallax only on desktop pointers — on touch it fights native scroll.
      const mm = gsap.matchMedia()
      mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
        gsap.to(inner.current, { yPercent: 14, opacity: 0.4, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true } })
        gsap.to(poster.current, { yPercent: -12, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true } })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  const rise = { hidden: { y: '110%' }, show: { y: 0 } }

  return (
    <section id="top" ref={root} className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pt-28">
      <StarField />
      <div className="pointer-events-none absolute -bottom-1/4 left-1/2 z-0 h-[80vh] w-[120vw] -translate-x-1/2 blur-md"
        style={{ background: 'radial-gradient(50% 55% at 50% 60%, rgba(198,241,53,.16), rgba(233,196,106,.07) 42%, transparent 72%)' }} />

      <span className="absolute right-4 top-1/2 z-[2] hidden -translate-y-1/2 rotate-90 text-[11px] uppercase tracking-[0.4em] text-ash lg:block" style={{ transformOrigin: 'right center' }}>
        Est. Korangi · Karachi
      </span>

      <div className="wrap relative z-[2] grid items-center gap-8 pb-12 md:pb-20 lg:grid-cols-[1.15fr_.85fr]">
        <div ref={inner}>
          <motion.span className="label" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Fresh daily · Corporate catering
          </motion.span>
          <motion.p className="eyebrow mt-2 text-lg sm:text-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.9 }}>
            Good food, made to be shared —
          </motion.p>

          <h1 className="display mt-3 text-[clamp(58px,11vw,150px)]">
            <motion.span className="block" initial="hidden" animate="show" transition={{ staggerChildren: 0.09, delayChildren: 0.35 }}>
              <span className="word"><motion.span className="inline-block" variants={rise} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>Too</motion.span></span>{' '}
              <span className="word"><motion.span className="inline-block text-lime" variants={rise} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>good</motion.span></span>
              <br />
              <span className="word"><motion.span className="hero-outline inline-block" variants={rise} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>to&nbsp;miss.</motion.span></span>
            </motion.span>
          </h1>

          <motion.div className="mt-8 h-px w-full origin-left bg-lime/20" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.7, duration: 1, ease: [0.2, 0.7, 0.2, 1] }} />

          <div className="mt-6 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <motion.p className="max-w-[44ch] text-ash" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
              Signature <b className="font-semibold text-smoke">Daal Chawal</b>, wood-fired <b className="font-semibold text-smoke">artisan pizzas</b> and sizzling grills — served fast across Korangi, or catered to your whole office floor.
            </motion.p>
            <motion.div className="flex flex-wrap gap-3.5" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
              <Magnetic href={WA} target="_blank" rel="noopener" className="btn btn-lime">
                <WhatsApp className="h-[17px] w-[17px]" /> Order on WhatsApp
              </Magnetic>
              <a href="#menu" className="btn btn-ghost">View the menu</a>
            </motion.div>
          </div>
        </div>

        <motion.div ref={poster} className="relative hidden aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 lg:block"
          initial={{ opacity: 0, scale: 1.06 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 1.1, ease: [0.2, 0.7, 0.2, 1] }}>
          <img src="/img/burger-first-bite.webp" alt="Cafe Vita signature loaded burger" width="900" height="1125" fetchpriority="high" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg,transparent 55%,rgba(10,11,8,.85))' }} />
          <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-lime/30 bg-void/60 px-3.5 py-2 backdrop-blur">
            <span className="text-gold text-sm">★ 4.7</span>
            <span className="text-[11px] uppercase tracking-wider text-ash">500+ orders / week</span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-5 left-1/2 z-[2] flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-ash">
        <span className="h-[34px] w-px animate-cue" style={{ background: 'linear-gradient(#C6F135,transparent)' }} />
        Scroll
      </div>
    </section>
  )
}
