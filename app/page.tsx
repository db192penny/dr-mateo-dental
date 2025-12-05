import Header from '@/components/Header'
import Hero from '@/components/Hero'
import CredentialsBar from '@/components/CredentialsBar'
import Services from '@/components/Services'
import About from '@/components/About'
import WhyChoose from '@/components/WhyChoose'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <About />
      <CredentialsBar />
      <Hero />
      <Services />
      <WhyChoose />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
