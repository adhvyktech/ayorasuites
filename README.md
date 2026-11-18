# Ayora Suites – Premium Boutique Hotel Website

Production-quality, bespoke boutique hotel website for **Ayora Suites**, designed and developed with React, TypeScript, Vite, and Tailwind CSS.

## 🏨 Brand Positioning & Identity
- **Brand Name:** AYORA SUITES
- **Tagline:** LUXURY STAYS | CONFERENCE | AIRPORT ROAD
- **Official Website:** [ayorasuites.com](https://ayorasuites.com)
- **Primary Color Palette:**
  - Primary Background: `#F8F4EC` (Warm Ivory)
  - Secondary Background: `#EEE7DB` (Soft Beige)
  - Primary Gold Accent: `#C49A50`
  - Deep Gold Accent: `#A8782D`
  - Primary Text: `#20221F` (Charcoal)
  - Secondary Text: `#77736C` (Warm Slate)
  - Dark Charcoal Footer/Sections: `#20231F`
- **Typography:**
  - Serif Headings: *Cormorant Garamond* (Google Fonts)
  - Sans-Serif Body & UI: *Manrope* (Google Fonts)

---

## 📍 Property & Contact Details
- **Address:** Building No: 1997/1289/9/32, New International Airport Road, Near Decathlon, Chikkajala, Kadigenahalli Gate, Bengaluru Urban, Karnataka – 562157, India.
- **Phone Lines:**
  - Primary / WhatsApp: `+91 99800 28502`
  - Reservations: `+91 91487 03006`
- **Emails:**
  - Primary: `ayorasuites@gmail.com`
  - Additional: `sushanthshetty456.ss@gmail.com`
- **WhatsApp Concierge Link:** `https://wa.me/919980028502`

---

## 🚀 Key Features & Architectural Highlights
1. **Official Brand Logo Integration:** Features the client's official gold lotus crest logo (`public/images/ayora-logo.jpg`) across the sticky navbar and framed in the luxury dark footer.
2. **Interactive Booking Bar:** Real-time date validation preventing check-out before check-in, guest selector, category selector, and instant prefilled WhatsApp booking dispatch.
3. **Four Room Categories:**
   - *Deluxe Room*
   - *Twin Sharing Room*
   - *Executive Room*
   - *Suite Room*
   - Dedicated detail views, photo carousels, and room-specific enquiry handlers.
4. **Corporate Meetings & Events:** Dedicated section and enquiry modal for corporate accommodation, seminars, board meetings, and team retreats.
5. **Icon-Based Amenities:** Configurable layout for high-speed Wi-Fi, secure parking, air conditioning, in-room dining, 24/7 reception, conference facilities, and daily housekeeping.
6. **Curated Photo Gallery & Lightbox:** Masonry grid with category filtering (*All, Property, Rooms, Interiors, Meetings & Events, Surroundings*) and full-screen keyboard-navigable Lightbox.
7. **Location & Transit Hub:** Interactive Google Maps embed with address-based query, transit proximity times (Kempegowda International Airport ~15 Mins, Decathlon ~2 Mins), and direct directions/call buttons.
8. **Truthful Testimonials State:** Verified Google Reviews integration placeholder, ensuring client integrity with no fabricated reviews.
9. **Centralized Configuration:** All contact information, room data, gallery images, and amenities are managed centrally in `src/data/hotelConfig.ts`.
10. **SEO & Structured Data:** Semantic HTML5, Open Graph tags, Twitter Card metadata, and `Hotel` / `LodgingBusiness` Schema.org JSON-LD structured data.

---

## 🛠️ Tech Stack
- **Framework:** React 19 + TypeScript
- **Bundler:** Vite
- **Styling:** Tailwind CSS + PostCSS + Autoprefixer
- **Icons:** Lucide React
- **Routing:** React Router v7

---

## 📦 Getting Started & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ How to Update Hotel Information
All dynamic hotel details can be modified in one single file:
👉 `src/data/hotelConfig.ts`
- To update phone numbers, emails, or address: edit `HOTEL_CONFIG.contact`.
- To update room descriptions or verified amenities: edit `HOTEL_CONFIG.rooms`.
- To replace gallery images: edit `HOTEL_CONFIG.gallery`.
