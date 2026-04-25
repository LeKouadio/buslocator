export interface BusStop {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  lines: string[];
}

export interface BusLine {
  id: string;
  number: string;
  name: string;
  color: string;
  stops: string[];
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'user' | 'admin';
  favorites: string[];
}

export const mockBusStops: BusStop[] = [
  {
    id: '1',
    name: 'Gare Centrale',
    address: '1 Place de la Gare',
    latitude: 48.8566,
    longitude: 2.3522,
    lines: ['01', '12', '42']
  },
  {
    id: '2',
    name: 'Place de la République',
    address: '15 Avenue de la République',
    latitude: 48.8676,
    longitude: 2.3633,
    lines: ['12', '24']
  },
  {
    id: '3',
    name: 'Hôtel de Ville',
    address: '8 Rue de l\'Hôtel de Ville',
    latitude: 48.8534,
    longitude: 2.3488,
    lines: ['01', '24', '35']
  },
  {
    id: '4',
    name: 'Centre Commercial',
    address: '42 Boulevard du Commerce',
    latitude: 48.8606,
    longitude: 2.3376,
    lines: ['12', '35']
  },
  {
    id: '5',
    name: 'Université',
    address: '25 Rue des Étudiants',
    latitude: 48.8456,
    longitude: 2.3612,
    lines: ['01', '42']
  }
];

export const mockBusLines: BusLine[] = [
  {
    id: '1',
    number: '01',
    name: 'Gare - Université',
    color: '#F57C00',
    stops: ['1', '3', '5']
  },
  {
    id: '2',
    number: '12',
    name: 'Centre-Ville',
    color: '#2E7D32',
    stops: ['1', '2', '4']
  },
  {
    id: '3',
    number: '24',
    name: 'République - Mairie',
    color: '#F57C00',
    stops: ['2', '3']
  },
  {
    id: '4',
    number: '35',
    name: 'Commerce Express',
    color: '#2E7D32',
    stops: ['3', '4']
  },
  {
    id: '5',
    number: '42',
    name: 'Université Directe',
    color: '#F57C00',
    stops: ['1', '5']
  }
];

export const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return Math.round(R * c * 1000);
};

export const mockUserPosition = {
  latitude: 48.8566,
  longitude: 2.3522
};
