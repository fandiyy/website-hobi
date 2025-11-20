# Website Hobi Basket 🏀

Website portofolio/hobi pribadi yang responsif dan estetik bertema bola basket (NBA).

## Fitur Utama

- ✅ **Navbar Fixed** - Navigasi responsif di bagian atas dengan logo dan menu
- ✅ **Hero Banner** - Section pembuka dengan judul menarik dan CTA button
- ✅ **About Section** - Deskripsi hobi basket dengan layout 2-kolom
- ✅ **Gallery** - Galeri foto basket dengan kartu responsif (3-4 kolom)
- ✅ **Contact Form** - Formulir kontak dengan validasi dasar
- ✅ **Footer** - Footer dengan copyright dan social media links
- ✅ **AOS Animations** - Animasi smooth pada scroll untuk Hero, About, dan Gallery
- ✅ **Bootstrap 5** - Styling responsif menggunakan Bootstrap
- ✅ **SCSS** - Custom styling dengan SCSS untuk manajemen warna
- ✅ **Mobile Responsive** - Fully responsive di mobile, tablet, dan desktop

## Struktur Proyek

```
website-hobi/
├── index.html           # File HTML utama
├── package.json         # Dependencies dan scripts
├── css/
│   └── style.css       # Custom CSS (compiled dari SCSS)
├── scss/
│   └── style.scss      # Custom SCSS
├── js/
│   └── main.js         # JavaScript untuk interaktivitas
├── img/                # Folder untuk gambar
└── README.md           # Dokumentasi
```

## Teknologi yang Digunakan

- **Bootstrap 5** - Framework CSS untuk komponen dan grid
- **SCSS** - CSS preprocessor untuk styling yang lebih terstruktur
- **AOS (Animate On Scroll)** - Library untuk scroll animations
- **Font Awesome** - Icon library untuk social media icons
- **JavaScript Vanilla** - Untuk form validation dan smooth scroll

## Warna Palet (NBA Inspired)

```
Primary Dark Blue:  #001F3F (Biru Tua NBA)
Primary Orange:     #FF6600 (Oranye NBA)
Light Gray:         #F5F5F5 (Background terang)
Dark Text:          #2C3E50 (Teks gelap)
Secondary Gray:     #9A9A9A (Gray sekunder)
```

## Installation & Setup

### 1. Clone atau Download Proyek
```bash
cd website-hobi
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Development

#### Option A: Compile SCSS (One-time)
```bash
npm run sass
```

#### Option B: Watch SCSS (Continuous)
```bash
npm run sass:watch
```

#### Jalankan Development Server
```bash
npm run serve
```

Kemudian buka di browser: `http://localhost:8080`

## Komponen & Sections

### 1. Navbar (Fixed)
- Logo/Brand dengan hover effect
- Menu navigasi responsif (Home, About, Gallery, Contact)
- Navbar toggler untuk mobile

### 2. Hero Banner
- Display judul Bootstrap
- Deskripsi catchy headline
- CTA button "Jelajahi Gallery"
- Animasi AOS fade-up

### 3. About Section
- Layout 2-kolom (Bootstrap Grid)
- Passion NBA dan Pengalaman Bermain
- Hover effect pada cards
- Animasi AOS

### 4. Gallery Section
- 4 kartu foto dengan placeholder
- Responsive grid (3-4 kolom)
- Hover effect dengan scale
- Animasi AOS pada cards

### 5. Contact Section
- Form dengan validasi:
  - Nama (required)
  - Email (required, email format)
  - Message (required)
- Info kontak alternatif
- Success message setelah submit

### 6. Footer
- Copyright text
- Social media links (Twitter, Instagram, Facebook)
- Dark background

## Form Validation

Form contact memiliki validasi dasar:
- **Nama**: Tidak boleh kosong
- **Email**: Harus format email valid
- **Message**: Tidak boleh kosong

Validasi dilakukan client-side menggunakan Bootstrap validation class dan JavaScript custom.

## Responsive Breakpoints

Website fully responsive di:
- **Desktop** (≥992px): Tampilan optimal dengan 4-kolom gallery
- **Tablet** (768px - 991px): 2-kolom layout
- **Mobile** (<768px): 1-kolom layout, navbar toggler aktif

## AOS Animation

Animasi diterapkan pada:
- **Hero Banner**: `data-aos="fade-up"`
- **About Section**: `data-aos="fade-up"` dengan delay
- **Gallery Cards**: `data-aos="fade-up"` dengan delay per card

### Konfigurasi AOS:
```javascript
duration: 1000,        // 1 detik
easing: 'ease-in-out', // Easing function
once: true,            // Animasi hanya sekali
offset: 100            // Trigger 100px sebelum element terlihat
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Mengubah Warna

Edit file `css/style.css` atau `scss/style.scss`:

```css
:root {
    --primary-dark: #001F3F;
    --primary-orange: #FF6600;
    --light-bg: #F5F5F5;
    /* etc */
}
```

### Menambah Foto Gallery

Edit `index.html` di section gallery:
```html
<div class="col-lg-3 col-md-6">
    <div class="card gallery-card border-0">
        <img src="your-image-url" class="card-img-top" alt="Description">
        <div class="card-body">
            <h5 class="card-title">Title</h5>
            <p class="card-text">Description</p>
        </div>
    </div>
</div>
```

### Menambah Social Media

Edit footer di `index.html`:
```html
<a href="your-url" class="text-light me-3" title="Platform">
    <i class="fab fa-icon"></i> Platform Name
</a>
```

## Performance Tips

- Gunakan optimized images untuk gallery
- Minify CSS dan JS di production
- Lazy load images jika ada banyak foto
- Cache assets untuk faster loading

## Lisensi

MIT License - Feel free to use this project for personal or commercial purposes.

## Support

Untuk pertanyaan atau issue, silakan buat issue di repository ini.

---

**Created with ❤️ for Basketball Enthusiasts**
