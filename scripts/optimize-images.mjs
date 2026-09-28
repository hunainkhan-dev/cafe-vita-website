import sharp from 'sharp'
import { readdir } from 'node:fs/promises'
import path from 'node:path'

const DIR = path.resolve('public/img')
const MAX_W = 1100
const Q = 78

const files = (await readdir(DIR)).filter((f) => /\.(png|jpe?g)$/i.test(f) && f !== 'logo.jpg')

let saved = 0
for (const f of files) {
  const src = path.join(DIR, f)
  const out = path.join(DIR, f.replace(/\.(png|jpe?g)$/i, '.webp'))
  const img = sharp(src)
  const meta = await img.metadata()
  const width = Math.min(meta.width || MAX_W, MAX_W)
  await img.resize({ width }).webp({ quality: Q }).toFile(out)
  console.log(`✓ ${f} -> ${path.basename(out)} (${width}px)`)
  saved++
}
console.log(`\nDone. Generated ${saved} WebP images.`)
