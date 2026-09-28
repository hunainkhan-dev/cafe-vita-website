import { useRef, useState } from 'react'
import { Reveal, SplitReveal } from './Reveal'
import { WhatsApp } from './icons'
import { deals, WA } from '../lib/data'

function DealCard({ d, i }) {
  const parent = useRef(null)
  const card = useRef(null)
  const [on, setOn] = useState(false)

  const move = (e) => {
    const r = parent.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    card.current.style.transform = `rotate3d(${(-y).toFixed(2)},${x.toFixed(2)},0,16deg)`
    setOn(true)
  }
  const leave = () => { card.current.style.transform = ''; setOn(false) }

  return (
    <Reveal delay={Math.min(i, 3) * 0.08} className="[perspective:1200px]">
      <div ref={parent} onPointerMove={move} onPointerLeave={leave} className="h-full">
        <div
          ref={card}
          className={`relative h-[400px] rounded-3xl border [transform-style:preserve-3d] transition-[transform,box-shadow,border-color] duration-500
            ${d.big ? 'border-gold/40' : 'border-white/10'} ${on ? 'border-lime/25' : ''}`}
          style={{
            background: d.big ? 'linear-gradient(150deg,#1d1608,#0c0d09)' : 'linear-gradient(150deg,#1a1d13,#0c0d09)',
            boxShadow: on ? '0 40px 60px -30px rgba(198,241,53,.18),0 30px 45px -34px rgba(0,0,0,.9)' : '0 30px 45px -34px rgba(0,0,0,.9)',
          }}
        >
          {/* glass */}
          <div className="absolute inset-2 rounded-2xl border-b border-l transition-transform duration-500 [border-top-right-radius:78%]"
            style={{
              transform: `translate3d(0,0,${on ? 34 : 20}px)`,
              background: d.big ? 'linear-gradient(0deg,rgba(233,196,106,.04),rgba(233,196,106,.12))' : 'linear-gradient(0deg,rgba(198,241,53,.04),rgba(198,241,53,.13))',
              borderColor: d.big ? 'rgba(233,196,106,.28)' : 'rgba(198,241,53,.22)',
            }} />

          {/* floating badge circles */}
          <div className="absolute right-0 top-0 [transform-style:preserve-3d]">
            {[[120, 16, 10], [96, on ? 44 : 34, 14], [70, on ? 70 : 54, 22]].map(([w, z, t], k) => (
              <span key={k} className="absolute right-0 top-0 aspect-square rounded-full backdrop-blur-sm transition-transform duration-500"
                style={{ width: w, top: t, right: t, transform: `translate3d(0,0,${z}px)`, background: 'rgba(198,241,53,.10)', boxShadow: 'rgba(0,0,0,.25) -8px 8px 18px 0' }} />
            ))}
            <span className="absolute grid aspect-square w-[46px] place-content-center rounded-full backdrop-blur-sm transition-transform duration-500"
              style={{ top: 30, right: 30, transform: `translate3d(0,0,${on ? 104 : 78}px)`, background: 'rgba(198,241,53,.16)' }}>
              <span className={`font-display text-lg ${d.big ? 'text-gold' : 'text-lime'}`}>{d.b}</span>
            </span>
          </div>

          {/* content */}
          <div className="relative px-6 py-7" style={{ transform: 'translate3d(0,0,42px)' }}>
            <div className={`text-[10px] uppercase tracking-[0.24em] ${d.big ? 'text-gold' : 'text-lime'}`}>{d.k}</div>
            <div className={`mt-16 font-display text-[clamp(38px,3.6vw,50px)] leading-none ${d.big ? 'text-lime' : 'text-gold'}`}>{d.price}</div>
            <ul className="mt-3.5 flex flex-col gap-[7px]">
              {d.items.map((x) => (
                <li key={x} className="flex items-baseline gap-2.5 text-[12.5px] text-ash">
                  <span className="mt-[6px] h-[5px] w-[5px] flex-none rounded-full bg-lime" />{x}
                </li>
              ))}
            </ul>
          </div>

          <a href={WA} target="_blank" rel="noopener" className="absolute inset-x-6 bottom-5 flex items-center justify-between" style={{ transform: `translate3d(0,0,${on ? 70 : 50}px)` }}>
            <span className="inline-flex items-center gap-2 rounded-full bg-lime px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-[#0a0a0a]">
              <WhatsApp className="h-3.5 w-3.5" /> Order
            </span>
          </a>
        </div>
      </div>
    </Reveal>
  )
}

export default function Deals() {
  return (
    <section id="deals" className="py-20 md:py-32" style={{ background: 'linear-gradient(180deg,#0A0B08,#0c0d09)' }}>
      <div className="wrap">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-8 md:mb-16">
          <div>
            <Reveal><span className="label">Limited time</span></Reveal>
            <h2 className="display mt-3.5 text-[clamp(38px,7vw,96px)]"><SplitReveal text="The deals." /></h2>
          </div>
          <Reveal delay={0.16}><p className="max-w-[40ch] text-[15px] text-ash">Four combos built for the way Korangi eats — solo lunch, a quick bite with chai, or the whole crew after a shift. Prices that don't flinch.</p></Reveal>
        </div>
        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {deals.map((d, i) => <DealCard key={d.k} d={d} i={i} />)}
        </div>
      </div>
    </section>
  )
}
