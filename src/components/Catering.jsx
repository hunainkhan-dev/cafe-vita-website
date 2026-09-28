import { useState } from 'react'
import { Reveal, SplitReveal } from './Reveal'
import Counter from './Counter'

export default function Catering() {
  const [sent, setSent] = useState(false)

  return (
    <section id="catering" className="border-y border-white/10 bg-char py-20 md:py-32">
      <div className="wrap grid items-center gap-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal><span className="label">Corporate catering</span></Reveal>
          <h2 className="display mt-3.5 text-[clamp(34px,5.4vw,76px)]"><SplitReveal text="Feed the whole floor." /></h2>
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-[42ch] text-ash">Serving offices and factories across the Korangi Industrial Area — hot, on time, and priced for teams. Meetings, shifts, events. Tell us the headcount, we'll handle the rest.</p>
          </Reveal>

          <Reveal delay={0.2} className="mt-8 overflow-hidden rounded-2xl border border-white/10">
            <img src="/img/delivery-rider.webp" alt="Cafe Vita delivery rider" className="h-44 w-full object-cover object-center" loading="lazy" width="1100" height="176" />
          </Reveal>

          <div className="mt-8 flex flex-wrap gap-9">
            {[['4.7', 'Google rating', 1, ''], ['50', 'Offices served', 0, '+'], ['30', 'Avg. delivery', 0, '′']].map(([n, t, dec, suf]) => (
              <Reveal key={t} delay={0.24}>
                <div className="font-display text-[40px] leading-none text-lime"><Counter to={parseFloat(n)} dec={dec} suffix={suf} /></div>
                <div className="mt-1.5 text-[11px] uppercase tracking-[0.16em] text-ash">{t}</div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} className="rounded-3xl border border-white/10 bg-void p-8">
            <Field label="Company / office" placeholder="e.g. Descon, Korangi" />
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              <Field label="Contact name" placeholder="Your name" />
              <Field label="Headcount" placeholder="25" inputMode="numeric" />
            </div>
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              <Field label="Date" type="date" />
              <div className="mb-4">
                <label htmlFor="cater-meal" className="mb-2 block text-[11px] uppercase tracking-[0.16em] text-ash">Meal</label>
                <select id="cater-meal" aria-label="Meal type" className="w-full rounded-[10px] border border-white/10 bg-char px-4 py-3 text-sm text-smoke outline-none transition-colors focus:border-lime">
                  <option>Lunch</option><option>Dinner</option><option>Event / hi-tea</option>
                </select>
              </div>
            </div>
            <Field label="WhatsApp number" placeholder="0311 1000340" />
            <button type="submit" className="btn btn-lime mt-1.5 w-full justify-center">
              {sent ? 'Request sent ✓' : 'Request a catering quote'}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

function Field({ label, ...rest }) {
  const id = 'f-' + label.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-2 block text-[11px] uppercase tracking-[0.16em] text-ash">{label}</label>
      <input id={id} aria-label={label} {...rest} className="w-full rounded-[10px] border border-white/10 bg-char px-4 py-3 text-sm text-smoke outline-none transition-colors placeholder:text-ash/60 focus:border-lime" />
    </div>
  )
}
