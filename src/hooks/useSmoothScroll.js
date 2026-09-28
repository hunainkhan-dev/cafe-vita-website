import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function useSmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const touch = window.matchMedia('(hover: none), (pointer: coarse)').matches

    // On touch devices we keep native scrolling (Lenis smooth-touch is janky and
    // can stop ScrollTrigger from updating). ScrollTrigger works with native scroll.
    let lenis
    if (!reduce && !touch) {
      lenis = new Lenis({ lerp: 0.1, smoothWheel: true })
      lenis.on('scroll', ScrollTrigger.update)
      const raf = (time) => lenis.raf(time * 1000)
      gsap.ticker.add(raf)
      gsap.ticker.lagSmoothing(0)
      lenis._raf = raf
    }

    // Recalculate trigger positions once fonts/images settle (fixes mobile offsets).
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    const t = setTimeout(refresh, 800)

    return () => {
      window.removeEventListener('load', refresh)
      clearTimeout(t)
      if (lenis) {
        gsap.ticker.remove(lenis._raf)
        lenis.destroy()
      }
    }
  }, [])
}
