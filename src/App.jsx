import useSmoothScroll from './hooks/useSmoothScroll'
import Preloader from './components/Preloader'
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Deals from './components/Deals'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Catering from './components/Catering'
import Location from './components/Location'
import Footer from './components/Footer'
import FloatingWA from './components/FloatingWA'

export default function App() {
  useSmoothScroll()
  return (
    <>
      <Preloader />
      <Cursor />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Deals />
        <Menu />
        <Gallery />
        <Catering />
        <Location />
      </main>
      <Footer />
      <FloatingWA />
    </>
  )
}
