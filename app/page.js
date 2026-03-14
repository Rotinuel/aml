import Navbar     from '@/components/Navbar'
import Hero       from '@/components/Hero'
import Ticker     from '@/components/Ticker'
import Features   from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import About      from '@/components/About'
import CTABanner  from '@/components/CTABanner'
import Footer     from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Features />
        <HowItWorks />
        <About />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
