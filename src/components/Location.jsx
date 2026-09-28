import { Reveal, SplitReveal } from './Reveal'
import { WhatsApp } from './icons'
import { ADDRESS, PHONE, MAPS, WA } from '../lib/data'

const MAP_EMBED =
  'https://maps.google.com/maps?q=Cafe+Vita+Vita+Chowrangi+Korangi+Industrial+Area+Karachi&z=15&output=embed'

const rows = [
  ['◉', 'Address', ADDRESS],
  ['✆', 'Order line', PHONE],
  ['◷', 'Hours', 'Daily · 12:00 PM – 2:00 AM'],
  ['★', 'Rated', '4.7 on Google · 500+ orders a week'],
]

export default function Location() {
  return (
    <section id="location" className="py-20 md:py-32">
      <div className="wrap">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-8 md:mb-16">
          <div>
            <Reveal><span className="label">Find us</span></Reveal>
            <h2 className="display mt-3.5 text-[clamp(38px,7vw,96px)]"><SplitReveal text="Come through." /></h2>
          </div>
          <Reveal delay={0.14}><p className="max-w-[40ch] text-[15px] text-ash">On Main Korangi Road at Vita Chowrangi. Dine in, take away, or send a rider — we're open late.</p></Reveal>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              {rows.map(([ic, h, v]) => (
                <div key={h} className="flex gap-4 border-b border-white/10 py-6">
                  <span className="w-6 flex-none text-lime">{ic}</span>
                  <div>
                    <div className="mb-1 text-[11px] uppercase tracking-[0.2em] text-ash">{h}</div>
                    <div className="text-smoke">{v}</div>
                  </div>
                </div>
              ))}
              <div className="mt-8 flex flex-wrap gap-3.5">
                <a href={MAPS} target="_blank" rel="noopener" className="btn btn-lime">Get directions</a>
                <a href={WA} target="_blank" rel="noopener" className="btn btn-ghost"><WhatsApp className="h-[17px] w-[17px]" /> Order now</a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="group relative min-h-[360px] overflow-hidden rounded-3xl border border-lime/20 lg:h-full">
              <iframe
                title="Cafe Vita location on Google Maps"
                src={MAP_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0, filter: 'grayscale(0.25) contrast(1.05) brightness(0.95)' }}
              />
              {/* soft brand frame — never covers the interactive centre */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-lime/10"
                style={{ boxShadow: 'inset 0 0 90px rgba(10,11,8,.55)' }} />
              <a href={MAPS} target="_blank" rel="noopener"
                className="absolute bottom-4 left-4 z-10 inline-flex items-center gap-2 rounded-full border border-lime/30 bg-void/85 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-lime backdrop-blur transition-colors hover:bg-lime hover:text-[#0a0a0a]">
                <span className="text-base leading-none">◉</span> Vita Chowrangi, Korangi
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
