import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; 

// Définition du type pour les POI
interface POI {
  id: number;
  name: string;
  position: [number, number]; // [lat, lng]
}

const pointsOfInterest: POI[] = [
  { id: 1, name: "Tour Eiffel", position: [48.8584, 2.2945] },
  { id: 2, name: "Louvre", position: [48.8606, 2.3376] }
];

function App() {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <MapContainer center={[48.8566, 2.3522]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {pointsOfInterest.map(poi => (
          <Marker key={poi.id} position={poi.position}>
            <Popup>{poi.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default App;