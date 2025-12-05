import type { Metadata } from 'next'
import { Inter, Cinzel } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cinzel'
})

export const metadata: Metadata = {
  title: 'Dr. Geoff Mateo, DMD - Excellence and Integrity in Dentistry | Boca Raton, FL',
  description: 'Experience pain-free dentistry with award-winning care from Dr. Geoff Mateo in Boca Raton. NYU trained, Dentist of the Year nominee, specializing in gentle, compassionate dental care.',
  keywords: 'dentist Boca Raton, pain-free dentistry, cosmetic dentistry, dental implants, Dr. Geoff Mateo, gentle dentist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${cinzel.variable}`}>{children}</body>
    </html>
  )
}
