# Dr. Geoffrey Mateo, DMD - Premium Dental Website

A premium, modern dental website built with Next.js, TypeScript, and Tailwind CSS for Dr. Geoffrey Mateo's dental practice in Boca Raton, FL.

## Features

- **Modern, Responsive Design**: Fully responsive layout that works beautifully on all devices
- **Premium Aesthetic**: Clean, professional design with teal/turquoise accent colors
- **SEO Optimized**: Built with Next.js for optimal search engine performance
- **Fast Loading**: Optimized images and code for quick page loads
- **Smooth Scrolling**: Elegant navigation with smooth scroll to sections
- **Professional Typography**: Clean, medical-appropriate Inter font
- **Interactive Components**: Hover effects, mobile menu, contact form

## Sections

1. **Header**: Navigation with sticky positioning and mobile menu
2. **Hero Section**: Eye-catching split layout with call-to-action buttons
3. **Credentials Bar**: Highlighting Dr. Mateo's achievements
4. **Services**: 6 comprehensive dental services with images
5. **About Dr. Mateo**: Full bio with all credentials and personal touches
6. **Why Choose**: 4 key differentiators with icons
7. **Testimonials**: Patient reviews with ratings
8. **Contact**: Form and contact information with map placeholder
9. **Footer**: Complete navigation and contact details

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Replace Dr. Mateo's Photo

1. Download Dr. Mateo's professional photo from the original website
2. Save it as `public/images/dr-mateo.jpg`
3. Update the image placeholders in:
   - `components/Hero.tsx`
   - `components/About.tsx`

Replace the placeholder divs with:
```tsx
<Image
  src="/images/dr-mateo.jpg"
  alt="Dr. Geoffrey Mateo"
  fill
  className="object-cover"
/>
```

### Update Contact Information

Edit the following in the component files:
- Phone number: Search for "(561) 555-1234" and replace
- Email: Search for "info@drgeoffmateo.com" and replace
- Update office hours in `components/Contact.tsx` and `components/Footer.tsx`

### Add Google Maps

In `components/Contact.tsx`, replace the map placeholder with an actual Google Maps embed:

```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
/>
```

## Color Scheme

- **Primary (Teal)**: #0d9488
- **Secondary (Navy)**: #1e3a5f
- **Accent (Gold)**: #d4af37
- **Background**: White and #f8fafc

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Images**: Next.js Image optimization

## License

© 2025 Dr. Geoffrey Mateo, DMD. All rights reserved.
