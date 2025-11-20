# Dokumentasi Website Hobi Basket

## 📋 Ringkasan Proyek

Website Hobi Basket adalah sebuah single-page application (SPA) yang menampilkan portfolio pribadi bertema bola basket dengan inspirasi dari NBA. Website ini dirancang untuk menjadi responsif, estetik, dan menarik dengan fokus pada animasi scroll yang halus.

## 🎯 Target Pengguna

- Penggemar basketball/NBA
- Teman dan kontak profesional
- Recruiter atau professional network

## 🏗️ Struktur Halaman

### 1. **Navbar (Fixed Top)**
```
├── Logo/Brand
├── Navigation Links (Home, About, Gallery, Contact)
└── Mobile Toggler (Responsive)
```

**Fitur:**
- Fixed di bagian atas (selalu terlihat saat scroll)
- Responsif dengan navbar-toggler untuk mobile
- Active state indicator
- Smooth scroll ke section terkait
- Warna: Primary Dark (#001F3F) dengan hover orange

### 2. **Hero Banner**
```
├── Judul Utama (Display 3)
├── Subtitle/Deskripsi
└── CTA Button
```

**Fitur:**
- Full viewport height
- Gradient background (Dark Blue)
- AOS animation (fade-up)
- CTA button ke gallery

### 3. **About Section**
```
├── Title
├── Column 1: Passion NBA
├── Column 2: Pengalaman Bermain
└── Responsive Grid Layout
```

**Fitur:**
- Bootstrap 2-column grid
- Hover effect pada cards
- AOS animation
- Icon heading dengan warna orange

### 4. **Gallery Section**
```
├── Title
└── 4 Gallery Cards
    ├── Image
    ├── Title
    └── Description
```

**Fitur:**
- Responsive 4-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Bootstrap Card component
- Image hover zoom effect
- Shadow pada hover
- AOS animation dengan delay

### 5. **Contact Section**
```
├── Title
├── Form
│   ├── Name Input
│   ├── Email Input
│   ├── Message Textarea
│   └── Submit Button
└── Kontak Alternatif (Email, Phone, Lokasi)
```

**Fitur:**
- Bootstrap Form components
- Client-side validation
- Success message alert
- Form reset setelah submit
- Error messages untuk field invalid

### 6. **Footer**
```
├── Copyright Text
└── Social Media Links (Twitter, Instagram, Facebook)
```

**Fitur:**
- Dark background (#001F3F)
- Responsive alignment
- Hover effect pada links

## 🎨 Desain & Styling

### Color Palette (NBA Inspired)
```
PRIMARY DARK BLUE:    #001F3F  (Header, Footer, Text)
PRIMARY ORANGE:       #FF6600  (Accents, Hover, CTA)
LIGHT BACKGROUND:     #F5F5F5  (Section backgrounds)
WHITE:                #FFFFFF  (Card backgrounds)
DARK TEXT:            #2C3E50  (Body text)
SECONDARY GRAY:       #9A9A9A  (Secondary text)
```

### Typography
- **Font Family**: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto)
- **Heading**: Font-weight 700 (Bold)
- **Body**: Font-weight 400 (Regular)
- **Secondary**: Font-weight 300 (Light)

### Spacing & Layout
- Bootstrap 5 grid system (12-column)
- Responsive breakpoints:
  - XS: < 576px (Mobile)
  - SM: ≥ 576px
  - MD: ≥ 768px (Tablet)
  - LG: ≥ 992px (Desktop)
  - XL: ≥ 1200px
  - XXL: ≥ 1400px

## ✨ Animasi

### AOS (Animate On Scroll)
Semua section utama menggunakan AOS untuk smooth scroll animation:

```javascript
AOS.init({
    duration: 1000,        // 1 detik
    easing: 'ease-in-out', // Smooth easing
    once: true,            // Animasi hanya 1 kali
    offset: 100            // Trigger 100px sebelum terlihat
});
```

**Animasi yang diterapkan:**
- Hero Banner: `fade-up`
- About Content: `fade-up` with delay
- Gallery Cards: `fade-up` with delay
- Contact Form: `fade-up`

### Additional Animations (CSS)
- Button hover: scale transform
- Card hover: translate Y, shadow
- Link hover: color change
- Navbar shadow: perubahan saat scroll

## 🔧 Teknologi & Dependencies

### Framework & Libraries
- **Bootstrap 5**: CSS framework untuk komponen & grid
- **AOS**: Library animasi pada scroll
- **Font Awesome**: Icon library
- **SCSS**: CSS preprocessor

### Development Tools
- **Node.js & npm**: Package management
- **Sass**: SCSS compilation
- **Live Server**: Development server

## 📱 Responsive Design

### Mobile First Approach
```css
/* Base (Mobile) */
.gallery-card { width: 100%; }

/* Tablet (≥768px) */
@media (min-width: 768px) {
    .gallery-card { width: 50%; }
}

/* Desktop (≥992px) */
@media (min-width: 992px) {
    .gallery-card { width: 25%; }
}
```

### Breakpoints Utama
- **Mobile (<768px)**: Single column layout
- **Tablet (768px-991px)**: 2-column layout
- **Desktop (≥992px)**: 3-4 column layout

### Responsive Features
- Flexible navbar dengan toggler
- Image responsive dengan object-fit
- Font size yang scalable
- Touch-friendly buttons (min 44px height)

## 🔐 Form Validation

### Validasi Client-Side
```javascript
// Nama: Required
// Email: Required + valid email format
// Message: Required
```

### Validation Feedback
- Display error messages setelah submit
- Visual feedback (red border pada invalid)
- Success alert setelah submit berhasil
- Form auto-reset setelah sukses

### Bootstrap Validation Classes
```html
<form class="needs-validation" novalidate>
    <input class="form-control is-invalid" />
    <div class="invalid-feedback">Error message</div>
</form>
```

## 🚀 Performance

### Optimization Tips
1. **Image Optimization**
   - Gunakan compressed images
   - Appropriate image size untuk breakpoints
   - Lazy loading untuk multiple images

2. **CSS/JS Optimization**
   - Minify CSS dan JS untuk production
   - Bootstrap utility classes untuk styling
   - Tree-shake unused components

3. **Caching**
   - Browser cache untuk assets
   - Service worker untuk offline support (optional)

4. **Loading**
   - Critical CSS inline
   - Defer non-critical JS
   - Preload essential fonts

## 📝 File Structure

```
website-hobi/
├── index.html          # Main HTML file
├── package.json        # Dependencies config
├── README.md           # Project README
├── DOCUMENTATION.md    # This file
├── .gitignore          # Git ignore rules
├── .browserslistrc     # Browser support config
│
├── css/
│   └── style.css       # Compiled CSS (dari SCSS)
│
├── scss/
│   └── style.scss      # Custom SCSS with variables
│
├── js/
│   └── main.js         # JavaScript functionality
│
└── img/                # Image assets folder
```

## 🔄 Development Workflow

### Setup
```bash
npm install
```

### Development
```bash
npm run sass:watch    # Watch SCSS changes
npm run serve         # Start dev server
```

### Build
```bash
npm run sass          # Compile SCSS to CSS
```

## 🌐 Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

**Not Supported:**
- Internet Explorer
- Very old browsers (< 2 years)

## 📖 Usage Guide

### Mengganti Konten
1. **Hero Banner**: Edit h1 dan p di section `#home`
2. **About**: Edit content di section `#about`
3. **Gallery**: Tambah/edit card di section `#gallery`
4. **Contact Info**: Edit kontak alternatif di section `#contact`
5. **Social Media**: Edit links di footer

### Mengganti Warna
Edit CSS variables di `css/style.css`:
```css
:root {
    --primary-dark: #001F3F;
    --primary-orange: #FF6600;
    /* etc */
}
```

### Menambah Section Baru
1. Tambah HTML di `index.html`
2. Tambah CSS di `css/style.css`
3. Jika perlu, tambah JS di `js/main.js`
4. Update navbar links

### Hosting
Website dapat di-host di:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting

## 🐛 Troubleshooting

### Animasi tidak jalan
- Pastikan AOS library sudah loaded
- Check console untuk error messages
- Verify `data-aos` attributes ada

### Form tidak submit
- Check browser console untuk error
- Pastikan validasi tidak ada error
- Verify form IDs dan input names

### Styling tidak tampil
- Pastikan CSS file loaded di HTML
- Check CSS file path di link tag
- Clear browser cache (Ctrl+Shift+Delete)

## 📞 Support & Contact

Untuk pertanyaan atau issues:
1. Check documentation
2. Review code comments
3. Check browser console errors
4. Create issue di repository

## 📄 Lisensi

MIT License - Free to use for personal and commercial projects

## ✅ Checklist Final

- ✅ Responsive di semua device
- ✅ AOS animations berjalan
- ✅ Form validation berfungsi
- ✅ All 6 sections terlihat
- ✅ Navbar fixed dan responsive
- ✅ Bootstrap utility classes digunakan
- ✅ No inline CSS (menggunakan CSS file)
- ✅ SCSS untuk styling
- ✅ Warna NBA palette
- ✅ Smooth scroll functionality

---

**Created with ❤️ for Basketball Enthusiasts**
Last Updated: November 2025
