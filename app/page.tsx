import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Pillars from '@/components/Pillars'
import Synergy from '@/components/Synergy'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative">
        <Hero />
        <Pillars />
        <Synergy />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
