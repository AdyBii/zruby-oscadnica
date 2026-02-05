# Zruby Oščadnica - Statický Web

Moderný a responsívny statický web pre **Zruby Oščadnica** - prenájom dvoch útulných chát a spoločenskej miestnosti v Oščadnici na Slovensku.

## 🌟 Vlastnosti

- **Plne responsívny** - optimalizovaný pre mobil, tablet a desktop
- **Moderný dizajn** - inšpirovaný prírodou Beskýd
- **Rýchly a optimalizovaný** - žiadne frameworky, čistý vanilla JavaScript
- **SEO optimalizovaný** - sémantické HTML5 tagy, meta údaje
- **Prístupný** - ARIA labels, keyboard navigácia
- **Animácie** - plynulé prechody a fade-in efekty
- **Lightbox galéria** - s filtrovacími kategóriami
- **Validovaný formulár** - kompletná validácia rezervačného formulára

## 🛠️ Technológie

- **HTML5** - sémanticky správne štruktúrované
- **CSS3** - CSS Grid, Flexbox, CSS Custom Properties
- **Vanilla JavaScript** - bez závislostí
- **Google Fonts** - Montserrat, Open Sans

## 📁 Štruktúra projektu

```
zruby-oscadnica/
├── index.html                      # Hlavná stránka
├── chata1.html                     # Detail Chaty 1
├── chata2.html                     # Detail Chaty 2
├── spolocenska-miestnost.html      # Detail spoločenskej miestnosti
├── cennik.html                     # Cenník
├── galeria.html                    # Fotogaléria
├── kontakt.html                    # Kontakt a rezervácia
├── css/
│   ├── style.css                   # Hlavné štýly
│   └── responsive.css              # Media queries
├── js/
│   ├── main.js                     # Navigácia, animácie
│   ├── gallery.js                  # Lightbox galéria
│   └── form.js                     # Validácia formulára
├── images/
│   ├── placeholder/                # Placeholder obrázky
│   └── icons/                      # Ikony
└── README.md                       # Dokumentácia
```

## 🚀 Spustenie

Web je statický a nevyžaduje žiadny build proces. Jednoducho otvorte `index.html` v prehliadači alebo ho nahrajte na webhosting.

### Lokálne testovanie

1. Klonujte repozitár:
```bash
git clone https://github.com/AdyBii/zruby-oscadnica.git
cd zruby-oscadnica
```

2. Otvorte `index.html` v prehliadači alebo použite lokálny server:
```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve

# PHP
php -S localhost:8000
```

3. Otvorte prehliadač na `http://localhost:8000`

## 📄 Stránky

### 1. Hlavná stránka (index.html)
- Hero sekcia s veľkým bannerom
- O nás sekcia
- Ponuka (3 karty: Chata 1, Chata 2, Spoločenská miestnosť)
- Benefity (6 dôvodov prečo si vybrať Zruby Oščadnica)
- Náhľad galérie
- Call-to-action sekcia

### 2. Chata 1 (chata1.html)
- Detailný popis chaty
- Kompletné vybavenie
- Fotogaléria
- Cenník v sidebari
- Breadcrumb navigácia

### 3. Chata 2 (chata2.html)
- Detailný popis romantickej chaty
- Vybavenie pre páry
- Fotogaléria
- Cenník

### 4. Spoločenská miestnosť (spolocenska-miestnost.html)
- Kapacita a účel
- Technické vybavenie
- Doplnkové služby
- Pravidlá prenájmu

### 5. Cenník (cennik.html)
- Prehľadné tabuľky s cenami
- Dodatočné služby
- Zľavy a balíčky
- Dôležité informácie

### 6. Galéria (galeria.html)
- Responzívny grid layout
- Filtrovanie podľa kategórií:
  - Všetky
  - Chata 1
  - Chata 2
  - Spoločenská miestnosť
  - Okolie a príroda
- Lightbox s navigáciou
- Keyboard navigácia (← → ESC)

### 7. Kontakt (kontakt.html)
- Kontaktné informácie
- Rezervačný formulár s validáciou
- Google Maps integrácia
- Dopravné možnosti
- Časté otázky (FAQ)

## 🎨 Dizajn

### Farebná paleta
```css
--primary-color: #2d5016;    /* Tmavo zelená */
--secondary-color: #8b4513;  /* Hnedá */
--accent-color: #f4a460;     /* Béžová/zlatá */
--text-dark: #333;           /* Tmavý text */
--text-light: #fff;          /* Svetlý text */
--bg-light: #f9f9f9;         /* Svetlé pozadie */
```

### Breakpoints
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

### Typografia
- **Nadpisy:** Montserrat (700, 600, 400)
- **Text:** Open Sans (600, 400)

## 📱 Responzivita

### Mobile (< 768px)
- Hamburger menu
- Jednosĺpcový layout
- Touch-friendly tlačidlá (min 44x44px)
- Stack layout pre všetky sekcie

### Tablet (768px - 1024px)
- 2-3 stĺpcový layout
- Optimalizovaný grid pre galériu
- Horizontálne alebo hamburger menu

### Desktop (> 1024px)
- 3-4 stĺpcový layout
- Plná horizontálna navigácia
- Hover efekty
- Sticky sidebar

## 🔧 JavaScript Funkcie

### main.js
- **Hamburger menu** - toggle, zatvorenie mimo, zatvorenie pri kliknutí na link
- **Sticky header** - mení sa pri scrollovaní
- **Smooth scroll** - plynulé posúvanie ku kotvám
- **Scroll animations** - fade-in efekty pomocou Intersection Observer
- **Active link** - označenie aktuálnej stránky v menu

### gallery.js
- **Lightbox** - zobrazenie obrázkov na celú obrazovku
- **Navigácia** - prev/next tlačidlá, keyboard (← → ESC)
- **Counter** - zobrazuje aktuálny obrázok (napr. "3 / 20")
- **Filter** - filtrovanie obrázkov podľa kategórie
- **Animácie** - fade-in pri prepnutí kategórie

### form.js
- **Validácia povinných polí**
- **Email validácia** (regex)
- **Telefón validácia** (slovenský formát)
- **Dátum validácia** (príchod < odchod, príchod >= dnes)
- **Počet osôb** (kontrola kapacity podľa vybraného objektu)
- **Real-time validácia** (on blur)
- **Success/error notifikácie**
- **Integrácia s email službami** (komentáre s návodom)

## 📧 Email Integrácia

Formulár je pripravený pre integráciu s email službami. V súbore `js/form.js` nájdete komentáre s návodmi pre:

### Možnosť 1: Formspree
1. Registrácia na https://formspree.io/
2. Vytvorenie nového formulára
3. Získanie endpoint URL
4. Odkomentovanie a úprava kódu v `form.js`

### Možnosť 2: EmailJS
1. Registrácia na https://www.emailjs.com/
2. Nastavenie email služby a šablóny
3. Odkomentovanie a úprava kódu v `form.js`

## 🖼️ Obrázky

Aktuálne používa **placeholder obrázky** z https://placehold.co/

### Nahradenie obrázkov:
1. Vytvorte skutočné fotky chát a okolia
2. Optimalizujte obrázky (WebP, JPEG)
3. Nahrajte do `images/` priečinka
4. Zmeňte `src` atribúty v HTML súboroch

### Odporúčané veľkosti:
- Hero banner: 1920x800px
- Karty ponuky: 600x400px
- Galéria: 800x600px
- Náhľady: 400x300px

## ♿ Prístupnosť

- Sémantické HTML5 tagy
- ARIA labels pre interaktívne elementy
- Keyboard navigácia
- Alt texty pre všetky obrázky
- Dostatočný farebný kontrast
- Touch-friendly tlačidlá (min 44x44px)
- Prefers-reduced-motion podporované

## 🔍 SEO

- Meta tagy (description, keywords)
- Open Graph tagy
- Sémantické HTML5 tagy
- Optimalizované nadpisy (H1-H3)
- Alt texty pre obrázky
- Popisné URL adresy
- Robots.txt friendly

## 🚀 Nasadenie

### GitHub Pages
```bash
# V repozitári GitHub:
# Settings → Pages → Source: main branch
```

### Netlify
```bash
# Drag & drop priečinok na netlify.com/drop
# alebo spojte GitHub repozitár
```

### Vlastný hosting
1. Nahrajte všetky súbory cez FTP
2. Nastavte doménu na váš hosting
3. Hotovo!

## 📝 Úpravy

### Zmena farieb
Upravte CSS premenné v `css/style.css`:
```css
:root {
  --primary-color: #2d5016;
  --secondary-color: #8b4513;
  --accent-color: #f4a460;
}
```

### Zmena kontaktných údajov
Aktualizujte v každom HTML súbore v sekcii Footer a na `kontakt.html`.

### Pridanie nových fotiek
1. Nahrajte obrázky do `images/`
2. Aktualizujte `galeria.html` s novými obrázkami
3. Pridajte `data-category` atribút pre filtrovanie

## 🐛 Riešenie problémov

### Nefunguje hamburger menu
- Skontrolujte, či je načítaný `js/main.js`
- Otvorte konzolu prehliadača pre chyby

### Nefunguje lightbox
- Skontrolujte, či je načítaný `js/gallery.js`
- Overte, že existuje `<div id="lightbox">`

### Nefunguje validácia formulára
- Skontrolujte, či je načítaný `js/form.js`
- Overte, že formulár má `id="reservation-form"`

## 📞 Podpora

Pre otázky a problémy vytvorte issue na GitHube alebo kontaktujte majiteľa repozitára.

## 📜 Licencia

Copyright © 2026 Zruby Oščadnica. Všetky práva vyhradené.

---

**Vytvorené s ❤️ pre Zruby Oščadnica**