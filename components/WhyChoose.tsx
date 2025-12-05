import { Heart, Microscope, Award, Users } from 'lucide-react'

export default function WhyChoose() {
  const features = [
    {
      icon: Heart,
      title: 'Pain-Free Techniques',
      description: 'Dr. Mateo is renowned for his gentle, painless anesthetic injection techniques. Experience dentistry without fear or discomfort.',
    },
    {
      icon: Microscope,
      title: 'Advanced Technology',
      description: 'We utilize the latest dental technology and techniques, including SPEAR and KOIS education principles, for optimal results.',
    },
    {
      icon: Award,
      title: 'Award-Winning Care',
      description: 'Recognized as a 2019 Dentist of the Year nominee and Academy of General Dentistry Board Director.',
    },
    {
      icon: Users,
      title: 'Patient-First Approach',
      description: 'Your comfort and satisfaction are our top priorities. We take time to listen and create personalized treatment plans.',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Why Choose Dr. Mateo?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference that advanced training, gentle care, and genuine compassion can make.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="text-center space-y-4 p-6 rounded-xl hover:bg-gray-50 transition-all group"
              >
                <div className="inline-block">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Icon className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-secondary">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
