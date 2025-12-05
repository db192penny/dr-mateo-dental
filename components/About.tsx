import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  const credentials = [
    'UC Berkeley undergraduate',
    'Tufts University School of Dental Medicine (2016)',
    'NYU Langone Advanced General Dentistry Residency',
    'SPEAR and KOIS Dental Education trained',
    'Academy of General Dentistry Board Director & Advocacy Committee Member',
    'Nominated Dentist of the Year 2019',
    'Fellowship Award in Academy of General Dentistry (2026)',
    'First recipient of the Dr. John S. Wolkowicz & Family Endowed Scholarship',
  ]

  return (
    <section id="home" className="bg-gradient-to-br from-gray-100 to-gray-50 py-16 md:py-24">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/dr-mateo.jpg"
                alt="Dr. Geoffrey Mateo, DMD"
                fill
                className="object-cover object-center"
                quality={100}
                priority
              />
              {/* Placeholder badge */}
              <div className="absolute top-4 right-4 bg-black/70 text-white px-4 py-2 rounded-lg text-sm font-semibold backdrop-blur-sm">
                High-res photo coming soon
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <div>
              <span className="text-primary font-semibold text-lg">About Dr. Mateo</span>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mt-2 mb-4">
                Meet Your Dentist
              </h2>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              Dr. Geoffrey Mateo is a highly accomplished dentist who combines advanced training
              with a genuinely caring approach. After earning his undergraduate degree from UC Berkeley,
              Dr. Mateo graduated from Tufts University School of Dental Medicine in 2016, followed by
              an Advanced General Dentistry Residency at NYU Langone.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Known for his painless anesthetic injection techniques, Dr. Mateo has earned recognition
              as a 2019 Dentist of the Year nominee. He serves on the Academy of General Dentistry Board
              and Advocacy Committee, and will receive his Fellowship Award in 2026.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Beyond dentistry, Dr. Mateo is a black belt in Shotokan Karate and a devoted family man.
              He previously served as Director of Project Bridge, a dental clinic for homeless youth in Boston,
              demonstrating his commitment to giving back to the community.
            </p>

            {/* Credentials List */}
            <div className="pt-4">
              <h3 className="text-xl font-bold text-secondary mb-4">Education & Credentials</h3>
              <div className="grid gap-3">
                {credentials.map((credential, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{credential}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
