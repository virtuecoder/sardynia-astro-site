export type Category = 'miasto' | 'natura' | 'plaza' | 'historia';

export interface Attraction {
  name: string;
  desc: string;
  lat: number;
  lng: number;
  img: string;
  category: Category;
  price: string;
  mapLat?: number;
  mapLng?: number;
}

export interface CategoryInfo {
  label: string;
  emoji: string;
  className: string;
}

export interface LabelData {
  element: HTMLElement;
  mapLat: number;
  mapLng: number;
  name: string;
}

export interface ClusterData {
  index: number;
  x: number;
  y: number;
  width: number;
  height: number;
  element: HTMLElement;
  mapLat: number;
  mapLng: number;
  isVisible: boolean;
  pointX: number;
  pointY: number;
  placed: boolean;
}