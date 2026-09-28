import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const ring = useRef(null)
  const dot = useRef(null)
  const [enabled, setEnabled] = useState(false)
  const [hot, setHot] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(hover:hover) and (pointer:fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return
    setEnabled(true)

    let rx = innerWidth / 2, ry = innerHeight / 2, tx = rx, ty = ry, raf
    const move = (e) => {
      tx = e.clientX; ty = e.clientY
      if (dot.current) dot.current.style.transform = `translate(${tx}px,${ty}px)`
    }
    const loop = () => {
      rx += (tx - rx) * 0.18; ry += (ty - ry) * 0.18
      if (ring.current) ring.current.style.transform = `translate(${rx}px,${ry}px)`
      raf = requestAnimationFrame(loop)
    }
    loop()
    addEventListener('pointermove', move)

    const hotEls = 'a,button,[data-hot]'
    const on = (e) => { if (e.target.closest(hotEls)) setHot(true) }
    const off = (e) => { if (e.target.closest(hotEls)) setHot(false) }
    addEventListener('pointerover', on)
    addEventListener('pointerout', off)
    return () => { cancelAnimationFrame(raf); removeEventListener('pointermove', move); removeEventListener('pointerover', on); removeEventListener('pointerout', off) }
  }, [])

  if (!enabled) return null
  return (
    <>
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[130] rounded-full border mix-blend-difference transition-[width,height,margin,border-color] duration-200"
        style={{
          width: hot ? 56 : 34, height: hot ? 56 : 34,
          margin: hot ? '-28px 0 0 -28px' : '-17px 0 0 -17px',
          borderColor: hot ? '#E9C46A' : 'rgba(198,241,53,.7)',
        }}
      />
      <div ref={dot} className="pointer-events-none fixed left-0 top-0 z-[130] h-[5px] w-[5px] -ml-[2.5px] -mt-[2.5px] rounded-full bg-lime mix-blend-difference" />
    </>
  )
}
