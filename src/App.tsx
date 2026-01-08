import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';

// Type POI
interface POI {
  id: number;
  name: string;
  position: [number, number];
}

const pointsOfInterest: POI[] = [
  { id: 1, name: 'Tour Eiffel', position: [48.8584, 2.2945] },
  { id: 2, name: 'Louvre', position: [48.8606, 2.3376] },
  { id: 3, name: 'Notre-Dame', position: [48.853, 2.3499] }
];

export default function App() {
  const [selectedPOI, setSelectedPOI] = useState<POI | null>(null);

  return (
      <div style={{ display: 'flex', height: '100vh' }}>
        {/* Liste des POI */}
        <aside
            style={{
              width: '30%',
              padding: '1rem',
              borderRight: '1px solid #ddd',
              overflowY: 'auto'
            }}
        >
          <h2>Points d'intérêt</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {pointsOfInterest.map((poi) => (
                <li
                    key={poi.id}
                    style={{
                      padding: '0.5rem',
                      cursor: 'pointer',
                      background:
                          selectedPOI?.id === poi.id ? '#eef' : 'transparent'
                    }}
                    onClick={() => setSelectedPOI(poi)}
                >
                  {poi.name}
                </li>
            ))}
          </ul>
        </aside>

        {/* Carte */}
        <div style={{ width: '70%' }}>
          <MapContainer
              center={selectedPOI?.position ?? [48.8566, 2.3522]}
              zoom={13}
              style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
            />

            {pointsOfInterest.map((poi) => (
                <Marker key={poi.id} position={poi.position}>
                  <Popup>{poi.name}</Popup>
                </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
  );
}
