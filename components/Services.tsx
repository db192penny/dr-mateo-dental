import { Smile, Sparkles, Wrench, Sun, Crown, AlertCircle } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Smile,
      title: 'General Dentistry',
      description: 'Comprehensive dental care including cleanings, exams, and preventive treatments to keep your smile healthy.',
    },
    {
      icon: Sparkles,
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with veneers, bonding, and smile makeovers designed to boost your confidence.',
    },
    {
      icon: Wrench,
      title: 'Dental Implants',
      description: 'Permanent tooth replacement solutions that look, feel, and function like natural teeth.',
    },
    {
      icon: Sun,
      title: 'Teeth Whitening',
      description: 'Professional whitening treatments for a brighter, more radiant smile in just one visit.',
    },
    {
      icon: Crown,
      title: 'Crowns & Bridges',
      description: 'Restore damaged or missing teeth with custom-crafted crowns and bridges for lasting results.',
    },
    {
      icon: AlertCircle,
      title: 'Emergency Dental Care',
      description: "Same-day appointments for dental emergencies. We're here when you need us most.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Dental Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From routine care to advanced procedures, we offer a full range of dental services
            to meet all your oral health needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group bg-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 p-8"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
