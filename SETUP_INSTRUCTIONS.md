# Setup Instructions for Dr. Mateo's Website

## Current Status
✅ Website is built and running at http://localhost:3002

## What's Complete
- All 9 website sections are built and fully functional
- Responsive design for mobile, tablet, and desktop
- Premium $5,000+ quality design with teal/navy/gold color scheme
- All of Dr. Mateo's credentials and bio information included
- Professional dental service images from Unsplash
- Interactive contact form
- Smooth scrolling navigation

## Next Steps to Finalize

### 1. Add Dr. Mateo's Professional Photo

**Option A: Download from Original Site**
1. Visit https://www.drgeoffmateo.com/
2. Right-click on Dr. Mateo's photo and save it
3. Save as `public/images/dr-mateo.jpg` in this project

**Option B: Use Your Own Photo**
1. Get a high-quality professional headshot (at least 800x800px)
2. Save as `public/images/dr-mateo.jpg`

**Then Update the Code:**

In `components/Hero.tsx` (around line 50), replace the placeholder div with:
```tsx
<Image
  src="/images/dr-mateo.jpg"
  alt="Dr. Geoffrey Mateo, DMD"
  fill
  className="object-cover rounded-2xl"
/>
```

In `components/About.tsx` (around line 25), replace the placeholder div with:
```tsx
<Image
  src="/images/dr-mateo.jpg"
  alt="Dr. Geoffrey Mateo, DMD"
  fill
  className="object-cover rounded-2xl"
/>
```

### 2. Update Contact Information

**Current Placeholder:**
- Phone: (561) 555-1234
- Email: info@drgeoffmateo.com

**To Update:**
Search and replace these values in:
- `components/Header.tsx`
- `components/Hero.tsx`
- `components/Contact.tsx`
- `components/Footer.tsx`

### 3. Add Google Maps Integration

In `components/Contact.tsx` (line 188), replace the map placeholder with:

```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.4!2d-80.1234!3d26.3456!..."
  width="100%"
  height="256"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="rounded-xl"
/>
```

Get the embed URL from:
1. Go to Google Maps
2. Search for "2600 N Military Trail, Suite 345, Boca Raton, FL 33431"
3. Click "Share" → "Embed a map"
4. Copy the iframe src URL

### 4. Connect Contact Form

The form currently shows an alert. To make it functional:

**Option A: Use a Form Service (Recommended)**
- FormSpree: https://formspree.io/
- Netlify Forms: Built-in if hosting on Netlify
- EmailJS: https://www.emailjs.com/

**Option B: Add API Route**
Create `app/api/contact/route.ts` with your email service integration.

### 5. Add Social Media Links

Update in `components/Footer.tsx` (lines 39-41):
```tsx
<a href="https://facebook.com/drmateo" ...>
<a href="https://instagram.com/drmateo" ...>
<a href="https://linkedin.com/in/drmateo" ...>
```

### 6. Optional: Add Actual Patient Testimonials

Edit `components/Testimonials.tsx` to replace placeholder reviews with real ones.

## Deployment Options

### Option 1: Vercel (Recommended - Easy)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
1. Push code to GitHub
2. Connect GitHub repo to Netlify
3. Deploy automatically

### Option 3: Traditional Hosting
```bash
npm run build
```
Upload the `.next` folder and `node_modules` to your server.

## Testing Checklist

- [ ] Website loads at http://localhost:3002
- [ ] All sections visible and properly styled
- [ ] Mobile menu works on small screens
- [ ] Smooth scrolling navigation works
- [ ] Contact form displays correctly
- [ ] All images load properly
- [ ] Replaced Dr. Mateo's photo
- [ ] Updated real phone number and email
- [ ] Added Google Maps
- [ ] Social media links work

## Need Help?

The website is built with:
- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

All components are in the `components/` folder and fully customizable.

## Preview

Visit http://localhost:3002 to see your live website!
