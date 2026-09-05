import 'leaflet';
import type { Attraction } from '../types';
import { attractions, startLocation, categoryClassMap, categoryLabelMap } from '../data/attractions';

const CLUSTER_THRESHOLD_DEG = 0.015;
const MARKER_OFFSET_RADIUS = 0.004;
const LABEL_OFFSET_X = 28;
const LABEL_OFFSET_Y = 0;
const MARKER_RADIUS_PX = 10;
const LABEL_MARKER_PADDING = 8;
const MIN_ZOOM_FOR_LABELS = 7;
const MAX_Y_OFFSET = 120;

function getClusterKey(lat: number, lng: number): string {
  return `${Math.round(lat / CLUSTER_THRESHOLD_DEG)},${Math.round(lng / CLUSTER_THRESHOLD_DEG)}`;
}

function applyClusterOffsets(places: Attraction[]): void {
  const clusters: Record<string, number[]> = {};
  places.forEach((place, index) => {
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
        const dLng = radius * Math.sin(angle) / Math.cos(places[idx].lat * Math.PI / 180);
        places[idx].mapLat = places[idx].lat + dLat;
        places[idx].mapLng = places[idx].lng + dLng;
      });
    } else {
      places[indices[0]].mapLat = places[indices[0]].lat;
      places[indices[0]].mapLng = places[indices[0]].lng;
    }
  });
}

export function initializeMap(): void {
  applyClusterOffsets(attractions);

  const mapElement = document.getElementById('map');
  if (!mapElement) return;

  const map = L.map('map', { center: [40.1209, 9.0129], zoom: 8.5, zoomControl: true });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap',
    maxZoom: 18,
  }).addTo(map);

  L.control.scale({ position: 'bottomleft', metric: true, imperial: false }).addTo(map);

  const labelsContainer = document.createElement('div');
  labelsContainer.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:1000;';
  mapElement.style.position = 'relative';
  mapElement.appendChild(labelsContainer);

  const labelData: Array<{ element: HTMLElement; mapLat: number; mapLng: number; name: string }> = [];

  attractions.forEach((place, index) => {
    const label = document.createElement('div');
    label.className = 'custom-label';
    label.textContent = place.name;
    label.addEventListener('click', () => updatePanel(place));
    labelsContainer.appendChild(label);
    labelData.push({ element: label, mapLat: place.mapLat ?? place.lat, mapLng: place.mapLng ?? place.lng, name: place.name });
  });

  attractions.forEach((place) => {
    const marker = L.circleMarker([place.mapLat ?? place.lat, place.mapLng ?? place.lng], {
      radius: 7, fillColor: '#c0392b', color: '#fff', weight: 2.5, opacity: 1, fillOpacity: 1,
      className: 'leaflet-circle-marker', interactive: true,
    }).addTo(map);
    marker.on('click', () => updatePanel(place));
  });

  function updatePanel(place: Attraction): void {
    const els = ['detail-name','detail-category','detail-img','detail-desc','detail-price','detail-coords','detail-dir-btn','detail-content'].map(id => document.getElementById(id));
    if (els.some(e => !e)) return;
    const [nameEl, catEl, imgEl, descEl, priceEl, coordsEl, dirBtn, detailContent] = els as HTMLElement[];

    const placeholder = document.querySelector('.placeholder');
    if (placeholder) (placeholder as HTMLElement).style.display = 'none';
    detailContent!.classList.add('active');

    nameEl.textContent = place.name;
    catEl!.textContent = categoryLabelMap[place.category] || '⭐ Atrakcja';
    catEl!.className = categoryClassMap[place.category] || '';

    if (place.img) {
      imgEl!.src = place.img;
      imgEl!.alt = place.name;
      imgEl!.style.display = 'block';
      imgEl!.onerror = () => { imgEl!.onerror = null; imgEl!.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="300"><rect width="600" height="300" fill="#e5dfd8"/><text x="300" y="150" font-family="sans-serif" font-size="20" fill="#999" text-anchor="middle">📷 Brak zdjęcia</text></svg>'; };
    } else {
      imgEl!.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="300"><rect width="600" height="300" fill="#e5dfd8"/><text x="300" y="150" font-family="sans-serif" font-size="20" fill="#999" text-anchor="middle">📷 Brak zdjęcia</text></svg>';
      imgEl!.alt = place.name;
      imgEl!.style.display = 'block';
    }

    descEl!.textContent = place.desc;
    priceEl!.textContent = place.price;
    coordsEl!.textContent = `🌐 ${place.lat.toFixed(4)}, ${place.lng.toFixed(4)}`;
    dirBtn!.setAttribute('href', `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(startLocation)}&destination=${place.lat},${place.lng}&travelmode=driving`);
    map.flyTo([place.lat, place.lng], 10, { duration: 0.8 });
  }

  function doBoxesOverlap(b1: any, b2: any): boolean {
    const p = 4;
    return !(b1.x + b1.w/2 + p < b2.x - b2.w/2 - p || b2.x + b2.w/2 + p < b1.x - b1.w/2 - p || b1.y + b1.h/2 + p < b2.y - b2.h/2 - p || b2.y + b2.h/2 + p < b1.y - b1.h/2 - p);
  }

  function updateLabelPositions(): void {
    const bounds = map.getBounds();
    const zoom = map.getZoom();
    const positions = labelData.map(item => {
      const point = map.latLngToContainerPoint([item.mapLat, item.mapLng]);
      const isVisible = bounds.contains([item.mapLat, item.mapLng]) && zoom >= MIN_ZOOM_FOR_LABELS;
      return { x: point.x + LABEL_OFFSET_X, y: point.y + LABEL_OFFSET_Y, w: Math.min(item.name.length * 7 + 20, 170), h: 22, element: item.element, mapLat: item.mapLat, mapLng: item.mapLng, isVisible, pointX: point.x, pointY: point.y };
    });

    for (let iter = 0; iter < 60; iter++) {
      let moved = false;
      for (let i = 0; i < positions.length; i++) {
        if (!positions[i].isVisible) continue;
        for (let j = i + 1; j < positions.length; j++) {
          if (!positions[j].isVisible) continue;
          if (doBoxesOverlap(positions[i], positions[j])) {
            const pa = 6;
            if (positions[i].y < positions[j].y) { positions[i].y -= pa; positions[j].y += pa; }
            else { positions[i].y += pa; positions[j].y -= pa; }
            for (const pos of [positions[i], positions[j]]) {
              const off = pos.y - pos.pointY - LABEL_OFFSET_Y;
              if (Math.abs(off) > MAX_Y_OFFSET) pos.y = pos.pointY + LABEL_OFFSET_Y + Math.sign(off) * MAX_Y_OFFSET;
            }
            moved = true;
          }
        }
      }
      if (!moved) break;
    }

    for (let iter = 0; iter < 20; iter++) {
      let moved = false;
      for (let i = 0; i < positions.length; i++) {
        if (!positions[i].isVisible) continue;
        for (let j = 0; j < labelData.length; j++) {
          const mp = map.latLngToContainerPoint([labelData[j].mapLat, labelData[j].mapLng]);
          const dx = positions[i].x - mp.x;
          const dy = positions[i].y - mp.y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          const minD = MARKER_RADIUS_PX + positions[i].w/2 + LABEL_MARKER_PADDING;
          if (dist < minD && dist > 0) {
            positions[i].x += (dx/dist) * (minD - dist) * 0.7;
            positions[i].y += (dy/dist) * (minD - dist) * 0.3;
            if (positions[i].x < mp.x + MARKER_RADIUS_PX + LABEL_MARKER_PADDING) positions[i].x = mp.x + MARKER_RADIUS_PX + LABEL_MARKER_PADDING + 2;
            moved = true;
          }
        }
      }
      if (!moved) break;
    }

    for (let iter = 0; iter < 20; iter++) {
      let moved = false;
      for (let i = 0; i < positions.length; i++) {
        if (!positions[i].isVisible) continue;
        for (let j = i + 1; j < positions.length; j++) {
          if (!positions[j].isVisible) continue;
          if (doBoxesOverlap(positions[i], positions[j])) {
            const pa = 5;
            if (positions[i].y < positions[j].y) { positions[i].y -= pa; positions[j].y += pa; }
            else { positions[i].y += pa; positions[j].y -= pa; }
            moved = true;
          }
        }
      }
      if (!moved) break;
    }

    positions.forEach(pos => {
      if (pos.isVisible) { pos.element.style.display = 'block'; pos.element.style.left = pos.x + 'px'; pos.element.style.top = pos.y + 'px'; pos.element.style.transform = 'translate(-50%,-50%)'; }
      else { pos.element.style.display = 'none'; }
    });
  }

  map.on('moveend', updateLabelPositions);
  map.on('zoomend', updateLabelPositions);
  map.on('resize', updateLabelPositions);

  setTimeout(() => { map.invalidateSize(); updateLabelPositions(); }, 500);
  window.addEventListener('resize', () => { map.invalidateSize(); setTimeout(updateLabelPositions, 200); });

  console.log(`✅ Sardynia – ${attractions.length} atrakcji z dojazdem z Badesi!`);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeMap);
} else {
  initializeMap();
}