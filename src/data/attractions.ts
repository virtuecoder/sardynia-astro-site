import type { Attraction } from '../types';

export const startLocation = "Résidence Pierre & Vacances Badus, Via Brigata Sassari, 27, 07030 Badesi OT, Italy";

export const initialMapCenter: [number, number] = [40.1209, 9.0129];
export const initialZoom = 8.5;

export const attractions: Attraction[] = [
  {
    name: 'Olbia',
    desc: 'Bazylika San Simplicio (XI w.), Muzeum Archeologiczne z wrakami rzymskich statków.',
    lat: 40.9238,
    lng: 9.4944,
    img: 'https://kimi-web-img.kimi.ai/img/www.sardegnaturismo.it/3c369b40ed230a504e2c6c1e33993412cee03112.jpg',
    category: 'miasto',
    price: '💶 Bezpłatny (muzeum bezpłatne)',
  },
  {
    name: 'Archipelag La Maddalena',
    desc: 'Park Narodowy z turkusową wodą i różowymi skałami granitowymi.',
    lat: 41.2166,
    lng: 9.4046,
    img: 'https://kimi-web-img.kimi.ai/img/www.sardegnaturismo.it/2d69090e6f936b2e23d7fac345038e3bb5074f95.jpg',
    category: 'natura',
    price: '💶 Park: bezpłatny; Rejsy: 50-70 EUR',
  },
  {
    name: 'Porto Cervo',
    desc: 'Serce Costa Smeralda. Luksusowy kurort z Piazzettą, kościołem Stella Maris i mariną.',
    lat: 41.1356,
    lng: 9.5381,
    img: 'https://kimi-web-img.kimi.ai/img/www.sardegnaturismo.it/6ff79fcf7a1d1bf43213625789a3d6cf2fdf21d8.jpg',
    category: 'miasto',
    price: '💶 Bezpłatny (parking ~2-3 EUR/h)',
  },
  {
    name: 'Spiaggia del Principe',
    desc: 'Jedna z najpiękniejszych plaż Smeraldy – drobny różowy piasek i turkusowa woda.',
    lat: 41.08918,
    lng: 9.56185,
    img: 'https://kimi-web-img.kimi.ai/img/www.sardinianbeaches.com/511aeab176d8c440833e7203769a850040347c94.jpg',
    category: 'plaza',
    price: '💶 Parking ~2-3 EUR/h',
  },
  {
    name: 'Spiaggia Capriccioli',
    desc: 'Granitowe skały, płytka woda idealna do snorkelingu.',
    lat: 41.128,
    lng: 9.545,
    img: 'https://kimi-web-img.kimi.ai/img/www.sardegnaturismo.it/5dae2ba0e3f04c9e1c0e07b1bdef8beff33a359c.jpg',
    category: 'plaza',
    price: '💶 Parking ~2-3 EUR/h',
  },
  {
    name: 'Baia Sardinia',
    desc: 'Urokliwa zatoka z różowym piaskiem i widokiem na wyspy.',
    lat: 41.13868,
    lng: 9.47254,
    img: '',
    category: 'plaza',
    price: '💶 Bezpłatny (parking płatny)',
  },
  {
    name: 'Spiaggia Rosa (Budelli)',
    desc: 'Słynna różowa plaża – zakaz wysiadania.',
    lat: 41.2789,
    lng: 9.3567,
    img: 'https://kimi-web-img.kimi.ai/img/dynamic-media-cdn.tripadvisor.com/5dae2ba0e3f04c9e1c0e07b1bdef8beff33a359c.jpg',
    category: 'plaza',
    price: '💶 Tylko z rejsu',
  },
  {
    name: 'Capo Testa',
    desc: 'Granitowe formacje skalne, latarnia morska i zachód słońca.',
    lat: 41.243769,
    lng: 9.144217,
    img: 'https://kimi-web-img.kimi.ai/img/dynamic-media-cdn.tripadvisor.com/65689042cd5b3ee3596fe651e212f6e5538f15e6.jpg',
    category: 'natura',
    price: '💶 Bezpłatny',
  },
  {
    name: 'Poltu Biancu / Li Junchi',
    desc: 'Biały drobny piasek i szmaragdowo-zielona woda.',
    lat: 40.9772644,
    lng: 8.856867,
    img: 'https://kimi-web-img.kimi.ai/img/www.sardinianbeaches.com/d780d0f104c92fd182447e67a5c44193bbc1372c.jpg',
    category: 'plaza',
    price: '💶 Bezpłatny',
  },
  {
    name: 'Baia delle Mimose',
    desc: 'Długa piaszczysta plaża z naturalnymi wydmami.',
    lat: 40.94682,
    lng: 8.82479,
    img: '',
    category: 'plaza',
    price: '💶 Bezpłatny',
  },
  {
    name: 'Isola Rossa',
    desc: 'Malownicza miejscowość z czerwoną skałą, portem rybackim i plażami.',
    lat: 41.007,
    lng: 8.872,
    img: 'https://kimi-web-img.kimi.ai/img/www.sardegnaturismo.it/0474b2e15409704f551b0ab2420cd89b3b34972a.jpg',
    category: 'miasto',
    price: '💶 Bezpłatny',
  },
  {
    name: 'Costa Paradiso / Cala Tinnari',
    desc: 'Dzika plaża otoczona czerwonymi skałami granitowymi.',
    lat: 41.03391,
    lng: 8.91905,
    img: '',
    category: 'plaza',
    price: '💶 Bezpłatny',
  },
  {
    name: 'Costa Smeralda',
    desc: 'Słynne Szmaragdowe Wybrzeże – 20-kilometrowy odcinek wybrzeża z białymi plażami, luksusowymi kurortami, polami golfowymi i turkusową wodą.',
    lat: 41.1,
    lng: 9.55,
    img: '',
    category: 'natura',
    price: '💶 Bezpłatny (parkingi przy plażach płatne)',
  },
  {
    name: 'Castelsardo',
    desc: 'Miasteczko na stromej skale z zamkiem Doria (XII w.), katedrą i panoramą na Zatokę Asinara.',
    lat: 40.9136,
    lng: 8.713,
    img: 'https://kimi-web-img.kimi.ai/img/cms.sardegnacultura.it/dda14249b10a7a0efa6fb5ec2bf17926272a51e0.jpg',
    category: 'miasto',
    price: '💶 Zamek Doria: ~5 EUR',
  },
  {
    name: 'Spiaggia La Pelosa',
    desc: 'Ikona Sardynii – płytka, błękitna woda i hiszpańska wieża strażnicza Torre della Pelosa (XVI w.).',
    lat: 40.9789,
    lng: 8.2267,
    img: 'https://kimi-web-img.kimi.ai/img/www.sardegnaturismo.it/511aeab176d8c440833e7203769a850040347c94.jpg',
    category: 'plaza',
    price: '💶 Rezerwacja + mata słomiana',
  },
  {
    name: 'Alghero (L\'Alguer)',
    desc: 'Katalońskie miasto z katedrą, murami obronnymi i portem.',
    lat: 40.5579,
    lng: 8.319,
    img: 'https://kimi-web-img.kimi.ai/img/www.sardegnaturismo.it/0474b2e15409704f551b0ab2420cd89b3b34972a.jpg',
    category: 'miasto',
    price: '💶 Bezpłatny (parking poza murami)',
  },
  {
    name: 'Spiaggia di Maria Pia',
    desc: 'Piaszczysta plaża z sosnowym lasem tuż przy Alghero.',
    lat: 40.585,
    lng: 8.31,
    img: '',
    category: 'plaza',
    price: '💶 Bezpłatny',
  },
  {
    name: 'Capo Caccia',
    desc: 'Klif z latarnią morską, widokiem na Grota Neptuna i 656 stopni Escala del Cabirol.',
    lat: 40.559,
    lng: 8.161,
    img: '',
    category: 'natura',
    price: '💶 Bezpłatny (jaskinia płatna)',
  },
  {
    name: 'Grota Neptuna',
    desc: 'Jaskinia z imponującymi stalaktytami.',
    lat: 40.563,
    lng: 8.167,
    img: 'https://kimi-web-img.kimi.ai/img/cagliariturismo.comune.cagliari.it/e1bcd1356b3f006825aa81f82df447a5527634b0.jpg',
    category: 'natura',
    price: '💶 ~16 EUR',
  },
  {
    name: 'Escala del Cabirol',
    desc: '656 kamiennych stopni prowadzących z klifu Capo Caccia do Grota Neptuna.',
    lat: 40.565,
    lng: 8.165,
    img: '',
    category: 'natura',
    price: '💶 Bezpłatny (jaskinia płatna)',
  },
  {
    name: 'Nuraghe Santu Antine',
    desc: 'Królewski Nurag w Dolinie Nuragów.',
    lat: 40.48653,
    lng: 8.76977,
    img: 'https://kimi-web-img.kimi.ai/img/www.sardegnaturismo.it/abd8c3a381d8031090c033ef3ffa52e1629131b7.jpg',
    category: 'historia',
    price: '💶 ~7-8 EUR',
  },
  {
    name: 'Bosa',
    desc: 'Pastelowe domki nad rzeką Temo, Zamek Malaspina, most Ponte Vecchio i katedra.',
    lat: 40.298,
    lng: 8.499,
    img: 'https://kimi-web-img.kimi.ai/img/www.sardegnaturismo.it/d780d0f104c92fd182447e67a5c44193bbc1372c.jpg',
    category: 'miasto',
    price: '💶 Zamek Malaspina: ~5 EUR',
  },
  {
    name: 'S\'Archittu',
    desc: 'Potężny łuk skalny (15 m) wyrzeźbiony przez morze.',
    lat: 40.09101,
    lng: 8.49295,
    img: 'https://kimi-web-img.kimi.ai/img/www.sardegnaturismo.it/3643d9303da795743cd576b727e25b57c09fabb2.jpg',
    category: 'natura',
    price: '💶 Bezpłatny',
  },
  {
    name: 'Tharros',
    desc: 'Ruiny fenicko-rzymskie na cyplu nad morzem.',
    lat: 39.87343,
    lng: 8.44104,
    img: 'https://kimi-web-img.kimi.ai/img/www.sardegnaturismo.it/0bd9bdaa0f9eb8ac39eee2482092d67b5d6c553f.jpg',
    category: 'historia',
    price: '💶 ~8 EUR',
  },
  {
    name: 'Oristano',
    desc: 'Katedra z kolorową majolikową kopułą, Antiquarium Arborense i Plac Eleonory d\'Arborea.',
    lat: 39.9033,
    lng: 8.5917,
    img: 'https://kimi-web-img.kimi.ai/img/www.sardegnaturismo.it/6ff79fcf7a1d1bf43213625789a3d6cf2fdf21d8.jpg',
    category: 'miasto',
    price: '💶 Katedra: bezpłatna; Muzeum: ~5 EUR',
  },
  {
    name: 'Su Nuraxi di Barumini',
    desc: 'Wpisana na listę UNESCO wioska nuragijska z II tysiąclecia p.n.e.',
    lat: 39.70583,
    lng: 8.99056,
    img: 'https://kimi-web-img.kimi.ai/img/www.sardegnaturismo.it/65689042cd5b3ee3596fe651e212f6e5538f15e6.jpg',
    category: 'historia',
    price: '💶 ~10 EUR (tylko z przewodnikiem)',
  },
  {
    name: 'Pan di Zucchero',
    desc: '133-metrowy ostaniec wapienny – jeden z najwyższych w basenie Morza Śródziemnego.',
    lat: 39.333676,
    lng: 8.399706,
    img: 'https://kimi-web-img.kimi.ai/img/www.sardegnaturismo.it/3329a7f4a890909eb6c5c939099e96ebc5575429.jpg',
    category: 'natura',
    price: '💶 Bezpłatny (kajaki ~15 EUR/h)',
  },
  {
    name: 'Porto Flavia',
    desc: 'Dawny port wydobywczy wydrążony w klifie.',
    lat: 39.3371361,
    lng: 8.4125583,
    img: 'https://kimi-web-img.kimi.ai/img/blog.msc-sahc.org/60045af5f682069874fdc7b03b460904a42bd422.png',
    category: 'historia',
    price: '💶 ~10 EUR (z przewodnikiem)',
  },
  {
    name: 'Nebida',
    desc: 'Dawne miasto górnicze z punktem widokowym Laveria Lamarmora.',
    lat: 39.336,
    lng: 8.411,
    img: 'https://kimi-web-img.kimi.ai/img/blog.msc-sahc.org/60045af5f682069874fdc7b03b460904a42bd422.png',
    category: 'natura',
    price: '💶 Bezpłatny',
  },
  {
    name: 'Punta Laveria Lamarmora',
    desc: 'Punkt widokowy na dawne kopalnie i kolorowe jeziora mineralne.',
    lat: 39.338,
    lng: 8.415,
    img: 'https://kimi-web-img.kimi.ai/img/blog.msc-sahc.org/60045af5f682069874fdc7b03b460904a42bd422.png',
    category: 'natura',
    price: '💶 Bezpłatna',
  },
  {
    name: 'Cala Mariolu',
    desc: 'Uznawana za najpiękniejszą plażę Włoch. "Śnieżne pchły" – białe kamyczki, turkusowa woda.',
    lat: 40.123895,
    lng: 9.675835,
    img: 'https://kimi-web-img.kimi.ai/img/www.sardegnaturismo.it/b030d97c92e30b4e4a3f512ffd23baa94ee81863.jpg',
    category: 'plaza',
    price: '💶 Rejs: ~25-35 EUR/os',
  },
  {
    name: 'Cala Luna',
    desc: 'Półokrągła plaża z naturalnymi jaskiniami w klifach.',
    lat: 40.224727,
    lng: 9.626587,
    img: 'https://kimi-web-img.kimi.ai/img/www.sardegnaturismo.it/b030d97c92e30b4e4a3f512ffd23baa94ee81863.jpg',
    category: 'plaza',
    price: '💶 Rejs: ~35 EUR/os',
  },
  {
    name: 'Golfo di Orosei',
    desc: 'Zatoka Orosei na wschodnim wybrzeżu Sardynii – spektakularne klify i ukryte plaże, w tym Cala Luna i Cala Goloritzé, dostępne tylko drogą morską lub pieszą.',
    lat: 40.26,
    lng: 9.64,
    img: '',
    category: 'natura',
    price: '💶 Bezpłatny (rejsy od ~35 EUR)',
  },
  {
    name: 'Kanion Su Gorropu',
    desc: 'Najgłębszy kanion Europy – wąwóz o ścianach sięgających 500 m, wykuty przez rzekę Rio Flumineddu w sercu Supramonte. Wejście płatne.',
    lat: 40.224709,
    lng: 9.51607,
    img: '',
    category: 'natura',
    price: '💶 ~6 EUR (wejście do kanionu)',
  },
  {
    name: 'Orgosolo',
    desc: 'Górskie miasteczko w krainie Barbagia, słynące z ponad 150 murali politycznych i społecznych namalowanych na ścianach domów od lat 60. XX w.',
    lat: 40.20526,
    lng: 9.35152,
    img: '',
    category: 'miasto',
    price: '💶 Bezpłatny',
  },
  {
    name: 'Cagliari',
    desc: 'Stolica Sardynii. Bastion Saint Remy, Katedra Santa Maria, Amfiteatr Rzymski (I-II w. n.e.)',
    lat: 39.2238,
    lng: 9.1217,
    img: 'https://kimi-web-img.kimi.ai/img/cagliariturismo.comune.cagliari.it/e1bcd1356b3f006825aa81f82df447a5527634b0.jpg',
    category: 'miasto',
    price: '💶 Amfiteatr: ~5 EUR; Bastion: bezpłatny',
  },
  {
    name: 'Nora',
    desc: 'Stanowisko archeologiczne z teatrem rzymskim, termami i mozaikami.',
    lat: 38.989,
    lng: 9.019,
    img: '',
    category: 'historia',
    price: '💶 ~10 EUR (tylko z przewodnikiem)',
  },
  {
    name: 'Spiaggia di Porto Giunco',
    desc: '"Plaża dwóch mórz" – mierzeja z flamingami.',
    lat: 39.118,
    lng: 9.518,
    img: '',
    category: 'plaza',
    price: '💶 Bezpłatny (parking ~1-2 EUR/h)',
  },
  {
    name: 'Villasimius',
    desc: 'Kurort w Morskim Obszarze Chronionym Capo Carbonara, twierdza z XVII w. z widokiem na lagunę z flamingami.',
    lat: 39.116,
    lng: 9.514,
    img: '',
    category: 'plaza',
    price: '💶 Bezpłatny',
  },
  {
    name: 'Plaża Poetto',
    desc: '8-kilometrowa plaża miejska Cagliari z widokiem na Sella del Diavolo.',
    lat: 39.208,
    lng: 9.16,
    img: 'https://kimi-web-img.kimi.ai/img/cagliaricruiseport.com/3c72a893ac591aeecc2524253ae0e293fc66f0da.jpg',
    category: 'plaza',
    price: '💶 Bezpłatny',
  },
  {
    name: 'Sella del Diavolo',
    desc: 'Charakterystyczny półwysep widoczny z Plaży Poetto.',
    lat: 39.195,
    lng: 9.17,
    img: '',
    category: 'natura',
    price: '💶 Bezpłatny',
  },
];

export const categoryClassMap: Record<string, string> = {
  'miasto': 'cat-miasto',
  'natura': 'cat-natura',
  'plaza': 'cat-plaza',
  'historia': 'cat-historia',
};

export const categoryLabelMap: Record<string, string> = {
  'miasto': '🏙️ Miasto',
  'natura': '🌿 Natura',
  'plaza': '🏖️ Plaża',
  'historia': '🏛️ Historia',
};

export const CLUSTER_THRESHOLD_DEG = 0.015;
export const MARKER_OFFSET_RADIUS = 0.004;
export const LABEL_OFFSET_X = 28;
export const LABEL_OFFSET_Y = 0;
export const MARKER_RADIUS_PX = 10;
export const LABEL_MARKER_PADDING = 8;
export const MIN_ZOOM_FOR_LABELS = 7;
export const MAX_Y_OFFSET = 120;

export function getClusterKey(lat: number, lng: number): string {
  return `${Math.round(lat / CLUSTER_THRESHOLD_DEG)},${Math.round(lng / CLUSTER_THRESHOLD_DEG)}`;
}

export function applyClusterOffsets(attractions: Attraction[]): void {
  const clusters: Record<string, number[]> = {};

  attractions.forEach((place, index) => {
    const key = getClusterKey(place.lat, place.lng);
    if (!clusters[key]) clusters[key] = [];
    clusters[key].push(index);
  });

  Object.values(clusters).forEach(indices => {
    const n = indices.length;
    if (n > 1) {
      indices.forEach((idx, i) => {
        const angle = (2 * Math.PI * i) / n - Math.PI / 2;
        const radius = n <= 3 ? MARKER_OFFSET_RADIUS : MARKER_OFFSET_RADIUS * 1.3;
        const dLat = radius * Math.cos(angle);
        const dLng = radius * Math.sin(angle) / Math.cos(attractions[idx].lat * Math.PI / 180);
        attractions[idx].mapLat = attractions[idx].lat + dLat;
        attractions[idx].mapLng = attractions[idx].lng + dLng;
      });
    } else {
      attractions[indices[0]].mapLat = attractions[indices[0]].lat;
      attractions[indices[0]].mapLng = attractions[indices[0]].lng;
    }
  });
}

applyClusterOffsets(attractions);