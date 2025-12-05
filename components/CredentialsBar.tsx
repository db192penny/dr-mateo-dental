import { Award, GraduationCap, Heart } from 'lucide-react'

export default function CredentialsBar() {
  const credentials = [
    {
      icon: Award,
      title: 'Dentist of the Year',
      subtitle: '2019 Nominee',
    },
    {
      icon: GraduationCap,
      title: 'NYU & Tufts',
      subtitle: 'Advanced Training',
    },
    {
      icon: Heart,
      title: 'Pain-Free',
      subtitle: 'Techniques',
    },
  ]

  return (
    <section className="bg-black py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {credentials.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.subtitle}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
