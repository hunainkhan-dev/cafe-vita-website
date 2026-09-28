import { useEffect, useRef } from 'react'

const AREA = 2000
const cols = ['rgba(231,227,214,.75)', 'rgba(231,227,214,.5)', 'rgba(198,241,53,.6)', 'rgba(233,196,106,.55)']

function tile(n, size, pick) {
  const t = document.createElement('div')
  t.style.position = 'absolute'
  t.style.left = '0'
  const sh = []
  for (let i = 0; i < n; i++) sh.push(`${(Math.random() * AREA) | 0}px ${(Math.random() * AREA) | 0}px ${cols[pick()]}`)
  t.style.cssText += `width:${size}px;height:${size}px;border-radius:50%;box-shadow:${sh.join(',')}`
  return t
}
function layer(host, n, size, dur, pick) {
  const l = document.createElement('div')
  l.style.cssText = `position:absolute;inset:0;animation:starUp ${dur}s linear infinite;will-change:transform`
  const a = tile(n, size, pick), b = tile(n, size, pick)
  b.style.top = AREA + 'px'
  l.append(a, b); host.appendChild(l)
}

export default function StarField() {
  const ref = useRef(null)
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const host = ref.current
    if (!host) return
    if (reduce) return
    host.innerHTML = ''
    layer(host, 180, 1, 60, () => (Math.random() < 0.8 ? (Math.random() < 0.5 ? 0 : 1) : (Math.random() < 0.5 ? 2 : 3)))
    layer(host, 80, 2, 110, () => (Math.random() < 0.6 ? 1 : (Math.random() < 0.5 ? 2 : 3)))
    layer(host, 35, 3, 170, () => (Math.random() < 0.5 ? 2 : 3))
    return () => { host.innerHTML = '' }
  }, [])
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      style={{ WebkitMaskImage: 'linear-gradient(180deg,#000 55%,transparent 92%)', maskImage: 'linear-gradient(180deg,#000 55%,transparent 92%)' }}
    />
  )
}
