'use client'

import { Phone, Calendar } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="intro" className="bg-white py-16 md:py-24">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                Award-Winning Dental Care in Boca Raton
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Experience Pain-Free Dentistry with Award-Winning Care
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Dr. Geoffrey Mateo brings advanced training from NYU and Tufts, combined with a gentle touch
              that's earned him recognition as a 2019 Dentist of the Year nominee. Experience dentistry
              that prioritizes your comfort and transforms your smile.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToContact}
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-lg"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </button>
              <a
                href="tel:5619977500"
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 text-lg"
              >
                <Phone className="w-5 h-5" />
                (561) 997-7500
              </a>
            </div>
          </div>

          {/* Right: Dental Practice Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Left - Beautiful Natural Smile */}
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Beautiful smile from Dr. Mateo's dental care"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Right - Modern Dental Office Interior */}
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Modern dental office in Boca Raton"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Accent decoration */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
