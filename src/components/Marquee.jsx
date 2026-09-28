const items = ['Daal Chawal', 'Artisan Pizza', 'Zinger Burger', 'Chicken Tikka', 'Office Catering']

export default function Marquee() {
  const row = [...items, ...items]
  return (
    <div className="relative z-[2] overflow-hidden border-y border-white/10 bg-char py-5" aria-hidden="true">
      <div className="flex w-max animate-scrollX whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center">
            <span className={`px-7 font-display text-[clamp(26px,4.4vw,58px)] uppercase leading-none ${i % 5 === 1 ? 'text-lime' : 'textstroke'}`}>{t}</span>
            <span className="px-1 text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
