'use client'

import { Phone, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-serif font-medium text-gray-900 tracking-wide">
              Dr. Geoff Mateo<span className="text-gray-900">,</span> <span className="text-xl">DMD</span>
            </h1>
            <p className="text-sm text-gray-600 mt-1 font-light tracking-wide">Excellence and Integrity in Dentistry</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary transition-colors font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary transition-colors font-medium">
              Contact
            </button>
          </nav>

          {/* Contact & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:5619977500" className="flex items-center text-gray-900 font-semibold hover:text-primary transition-colors">
              <Phone className="w-5 h-5 mr-2" />
              (561) 997-7500
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary transition-colors font-medium text-left py-2">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary transition-colors font-medium text-left py-2">
                Services
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary transition-colors font-medium text-left py-2">
                Contact
              </button>
              <a href="tel:5619977500" className="flex items-center text-gray-900 font-semibold hover:text-primary transition-colors py-2">
                <Phone className="w-5 h-5 mr-2" />
                (561) 997-7500
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all text-center"
              >
                Book Appointment
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
