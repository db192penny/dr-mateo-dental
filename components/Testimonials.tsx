import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah M.',
      text: 'Dr. Mateo is absolutely incredible! I have always been terrified of dentists, but his gentle approach and painless techniques completely changed my perspective. The entire staff is warm and professional. I actually look forward to my dental appointments now!',
      rating: 5,
      treatment: 'Dental Implants',
    },
    {
      name: 'Michael R.',
      text: 'After years of neglecting my dental health, Dr. Mateo helped restore my smile with compassion and expertise. His advanced training really shows - the quality of work is exceptional. I could not recommend him more highly!',
      rating: 5,
      treatment: 'Smile Makeover',
    },
    {
      name: 'Jennifer L.',
      text: 'Dr. Mateo takes the time to explain everything and genuinely cares about his patients. His pain-free injection technique is no exaggeration - I barely felt a thing! The office is modern and clean, and the results speak for themselves.',
      rating: 5,
      treatment: 'Cosmetic Dentistry',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-black to-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our valued patients have to say
            about their experience with Dr. Mateo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-xl relative hover:shadow-2xl transition-shadow"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              <div className="border-t pt-4">
                <div className="font-bold text-secondary">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.treatment}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div className="text-center mt-12 pt-12 border-t border-white/20">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-3xl font-bold text-white">5.0</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-200">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="font-medium">Google Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
