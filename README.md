# Sardynia Astro Site

Interaktywna mapa Sardynii z najpiękniejszymi 46 atrakcjami, galerii zdjęć, kategoriami, informacjami o cenach i bezpośrednimi dojazdami z Bari (start z Badesi).

## Uruchamianie

```bash
pnpm dev
```

Lokalnie: `http://localhost:4321`

## Budowanie

```bash
pnpm build
```

Kompilacja do statycznych plików w `dist/`.

## Podgląd Offline

```bash
pnpm preview
```

## Features

- Pełnoekranowy interaktywny kontener mapy z Leaflet.js
- Kliknięcie na kropkę lub nazwę => panel z zdjęciem, opisem, kategorią, ceną, koordynatami i bezpośrednim linkiem do Google Maps
- Inteligentne wykrywanie grup, odpowiednie rozmieszczenie etykiet i wykrywanie kolizji
- Kategorie: miasta, przyroda, plaże, zabytki (dostępne w wariantach kolorystycznych)
- 46 atrakcji (w tym Olbia, Porto Cervo, Costa Smeralda, Capo Testa, Alghero, Tharros, plaże Cala Luna, Cala Mariolu, Spiaggia del Principe, La Pelosa)
- Responsywność (mobilna kolumna, panel lesty, mapka na pełen ekran)
- Ubarwiony motyw ciemny (adapter do mapy)
- Google Maps „Show route” z domyślnego startu: Résidence Pierre & Vacances Badus, Via Brigata Sassari, 27, 07030 Badesi OT, Włochy
- Tailwind CSS v4 z @tailwindcss/forms
- @astrojs/sitemap dla SEO
- W pełni zindeksowany produkt na potrzeby SEO (statyczne generowanie)
