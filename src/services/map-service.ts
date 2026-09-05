import L, { type LatLngTuple } from 'leaflet';
import type { Attraction, CategoryInfo, LabelData, ClusterData } from '../types';
import { 
  startLocation, 
  initialMapCenter, 
  initialZoom,
  categoryClassMap, 
  categoryLabelMap,
  CLUSTER_THRESHOLD_DEG,
  MARKER_OFFSET_RADIUS,
  LABEL_OFFSET_X,
  LABEL_OFFSET_Y,
  MARKER_RADIUS_PX,
  LABEL_MARKER_PADDING,
  MIN_ZOOM_FOR_LABELS,
  MAX_Y_OFFSET,
  getClusterKey,
  applyClusterOffsets
} from '../data/attractions';

export interface MapService {
  map: L.Map | null;
  labelsContainer: HTMLDivElement | null;
  labelData: LabelData[];
  updatePanel: (place: Attraction) => void;
  updateLabelPositions: () => void;
  cleanup: () => void;
}

export class SardiniaMapService {
  public map: L.Map | null = null;
  public labelsContainer: HTMLDivElement | null = null;
  public labelData: LabelData[] = [];
  private attractions: Attraction[];
  private readonly mapElementId = 'map';

  constructor(attractions: Attraction[]) {
    this.attractions = attractions;
  }

  public initMap(): void {
    const mapElement = document.getElementById(this.mapElementId);
    if (!mapElement) {
      console.error('Map element not found');
      return;
    }

    this.map = L.map(this.mapElementId, {
      center: initialMapCenter,
      zoom: initialZoom,
      zoomControl: true,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
    }).addTo(this.map);

    L.control.scale({ position: 'bottomleft', metric: true, imperial: false }).addTo(this.map);

    this.createLabelsContainer();
    this.createMapElements();
    this.setupEventListeners();
  }

  private createLabelsContainer(): void {
    const mapElement = document.getElementById(this.mapElementId);
    if (!mapElement) return;

    this.labelsContainer = document.createElement('div');
    this.labelsContainer.style.position = 'absolute';
    this.labelsContainer.style.top = '0';
    this.labelsContainer.style.left = '0';
    this.labelsContainer.style.width = '100%';
    this.labelsContainer.style.height = '100%';
    this.labelsContainer.style.pointerEvents = 'none';
    this.labelsContainer.style.zIndex = '1000';
    mapElement.style.position = 'relative';
    mapElement.appendChild(this.labelsContainer);
  }

  private createMapElements(): void {
    this.createLabels();
    this.createMarkers();
  }

  private createLabels(): void {
    this.attractions.forEach((place, index) => {
      const label = document.createElement('div');
      label.className = 'custom-label';
      label.textContent = place.name;
      label.dataset.index = index.toString();
      label.addEventListener('click', () => this.updatePanel(place));
      this.labelsContainer?.appendChild(label);

      this.labelData.push({
        element: label,
        mapLat: place.mapLat ?? place.lat,
        mapLng: place.mapLng ?? place.lng,
        name: place.name,
      });
    });
  }

  private createMarkers(): void {
    this.attractions.forEach((place) => {
      const marker = L.circleMarker([place.mapLat ?? place.lat, place.mapLng ?? place.lng], {
        radius: 7,
        fillColor: '#c0392b',
        color: '#ffffff',
        weight: 2.5,
        opacity: 1,
        fillOpacity: 1,
        className: 'leaflet-circle-marker',
        interactive: true,
      }).addTo(this.map!);

      marker.on('click', () => this.updatePanel(place));
    });
  }

  private setupEventListeners(): void {
    if (!this.map) return;

    this.map.on('moveend', () => this.updateLabelPositions());
    this.map.on('zoomend', () => this.updateLabelPositions());
    this.map.on('resize', () => this.updateLabelPositions());

    window.addEventListener('resize', () => {
      this.map?.invalidateSize();
      setTimeout(() => this.updateLabelPositions(), 200);
    });
  }

  public updatePanel(place: Attraction): void {
    const detailName = document.getElementById('detail-name') as HTMLElement;
    const detailCategory = document.getElementById('detail-category') as HTMLElement;
    const detailImg = document.getElementById('detail-img') as HTMLImageElement;
    const detailDesc = document.getElementById('detail-desc') as HTMLElement;
    const detailPrice = document.getElementById('detail-price') as HTMLElement;
    const detailCoords = document.getElementById('detail-coords') as HTMLElement;
    const detailDirBtn = document.getElementById('detail-dir-btn') as HTMLAnchorElement;
    const detailContent = document.getElementById('detail-content') as HTMLElement;

    if (!detailName || !detailCategory || !detailImg || !detailDesc || !detailPrice || !detailCoords || !detailDirBtn || !detailContent) {
      console.error('UI elements not found');
      return;
    }

    detailName.textContent = place.name;

    const catLabel = categoryLabelMap[place.category] || '⭐ Atrakcja';
    const catClass = categoryClassMap[place.category] || '';
    detailCategory.textContent = catLabel;
    detailCategory.className = catClass;

    if (place.img && place.img.length > 0) {
      detailImg.src = place.img;
      detailImg.alt = place.name;
      detailImg.style.display = 'block';
      detailImg.onerror = function() {
        this.onerror = null;
        this.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='300'%3E%3Crect width='600' height='300' fill='%23e5dfd8'/%3E%3Ctext x='300' y='150' font-family='sans-serif' font-size='20' fill='%23999' text-anchor='middle' dominant-baseline='central'%3E📷 Brak zdjęcia%3C/text%3E%3C/svg%3E";
      };
    } else {
      detailImg.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='300'%3E%3Crect width='600' height='300' fill='%23e5dfd8'/%3E%3Ctext x='300' y='150' font-family='sans-serif' font-size='20' fill='%23999' text-anchor='middle' dominant-baseline='central'%3E📷 Brak zdjęcia%3C/text%3E%3C/svg%3E";
      detailImg.alt = place.name;
      detailImg.style.display = 'block';
    }

    detailDesc.textContent = place.desc;
    detailPrice.textContent = place.price;
    detailCoords.textContent = `🌐 ${place.lat.toFixed(4)}, ${place.lng.toFixed(4)}`;

    const dest = `${place.lat},${place.lng}`;
    const start = encodeURIComponent(startLocation);
    const dirUrl = `https://www.google.com/maps/dir/?api=1&origin=${start}&destination=${dest}&travelmode=driving`;
    detailDirBtn.href = dirUrl;

    detailContent.classList.add('active');
    this.map.flyTo([place.lat, place.lng], 10, { duration: 0.8 });
  }

  public updateLabelPositions(): void {
    if (!this.map || !this.labelsContainer) return;

    const bounds = this.map.getBounds();
    const zoom = this.map.getZoom();
    const minZoomForLabels = MIN_ZOOM_FOR_LABELS;

    const positions: ClusterData[] = this.labelData.map((item, index) => {
      const point = this.map!.latLngToContainerPoint([item.mapLat, item.mapLng]);
      const isVisible = bounds.contains([item.mapLat, item.mapLng]) && zoom >= minZoomForLabels;

      let x = point.x + LABEL_OFFSET_X;
      let y = point.y + LABEL_OFFSET_Y;

      const textLength = item.name.length;
      const width = Math.min(textLength * 7 + 20, 170);
      const height = 22;

      return {
        index: index,
        x: x,
        y: y,
        width: width,
        height: height,
        element: item.element,
        mapLat: item.mapLat,
        mapLng: item.mapLng,
        isVisible: isVisible,
        pointX: point.x,
        pointY: point.y,
        placed: false,
      };
    });

    const maxIterations = 60;
    const maxYOffset = MAX_Y_OFFSET;

    for (let iter = 0; iter < maxIterations; iter++) {
      let moved = false;

      for (let i = 0; i < positions.length; i++) {
        if (!positions[i].isVisible) continue;

        for (let j = i + 1; j < positions.length; j++) {
          if (!positions[j].isVisible) continue;

          if (this.doBoxesOverlap(positions[i], positions[j])) {
            const pushAmount = 6;

            if (positions[i].y < positions[j].y) {
              positions[i].y -= pushAmount;
              positions[j].y += pushAmount;
            } else {
              positions[i].y += pushAmount;
              positions[j].y -= pushAmount;
            }

            for (const pos of [positions[i], positions[j]]) {
              const offset = pos.y - pos.pointY - LABEL_OFFSET_Y;
              if (Math.abs(offset) > maxYOffset) {
                pos.y = pos.pointY + LABEL_OFFSET_Y + Math.sign(offset) * maxYOffset;
              }
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

        for (let j = 0; j < this.labelData.length; j++) {
          const markerPoint = this.map!.latLngToContainerPoint([this.labelData[j].mapLat, this.labelData[j].mapLng]);

          const dx = positions[i].x - markerPoint.x;
          const dy = positions[i].y - markerPoint.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const minDist = MARKER_RADIUS_PX + positions[i].width / 2 + LABEL_MARKER_PADDING;

          if (dist < minDist && dist > 0) {
            const pushX = (dx / dist) * (minDist - dist) * 0.7;
            const pushY = (dy / dist) * (minDist - dist) * 0.3;

            positions[i].x += pushX;
            positions[i].y += pushY;

            if (positions[i].x < markerPoint.x + markerRadiusPx + LABEL_MARKER_PADDING) {
              positions[i].x = markerPoint.x + markerRadiusPx + LABEL_MARKER_PADDING + 2;
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
        for (let j = i + 1; j < positions.length; j++) {
          if (!positions[j].isVisible) continue;
          if (this.doBoxesOverlap(positions[i], positions[j])) {
            const pushAmount = 5;
            if (positions[i].y < positions[j].y) {
              positions[i].y -= pushAmount;
              positions[j].y += pushAmount;
            } else {
              positions[i].y += pushAmount;
              positions[j].y -= pushAmount;
            }
            moved = true;
          }
        }
      }
      if (!moved) break;
    }

    positions.forEach((pos) => {
      if (pos.isVisible) {
        pos.element.style.display = 'block';
        pos.element.style.left = pos.x + 'px';
        pos.element.style.top = pos.y + 'px';
        pos.element.style.transform = 'translate(-50%, -50%)';
      } else {
        pos.element.style.display = 'none';
      }
    });
  }

  private doBoxesOverlap(box1: ClusterData, box2: ClusterData): boolean {
    const padding = 4;
    return !(box1.x + box1.width / 2 + padding < box2.x - box2.width / 2 - padding ||
             box2.x + box2.width / 2 + padding < box1.x - box1.width / 2 - padding ||
             box1.y + box1.height / 2 + padding < box2.y - box2.height / 2 - padding ||
             box2.y + box2.height / 2 + padding < box1.y - box1.height / 2 - padding);
  }

  public cleanup(): void {
    if (this.map) {
      this.map.remove();
      this.map = null;
    }
    if (this.labelsContainer) {
      this.labelsContainer.remove();
      this.labelsContainer = null;
    }
    this.labelData = [];
  }

  public getService(): MapService {
    return {
      map: this.map,
      labelsContainer: this.labelsContainer,
      labelData: this.labelData,
      updatePanel: this.updatePanel.bind(this),
      updateLabelPositions: this.updateLabelPositions.bind(this),
      cleanup: this.cleanup.bind(this),
    };
  }
}