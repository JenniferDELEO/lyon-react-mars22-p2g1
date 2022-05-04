import React from 'react';
import {
  MapContainer as LeafletMap,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import coordsData from '../ressources/coordsBAL.json';
import '../styles/Map.css';
import PopUpMap from './PopupMap';
import L from 'leaflet';

const userMarker = new L.Icon({
  /* eslint-disable global-require */
  iconUrl: require('../assets/userIcon.png'),
  /* eslint-enable global-require */
  iconSize: [35, 90],
});

function Map() {
  const lyonPosition = [45.764043, 4.835659];

  return (
    <LeafletMap className="map" center={lyonPosition} zoom={14}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {coordsData.map((boite) => (
        <Marker position={[boite.lat, boite.long]}>
          <Popup>
            <PopUpMap
              name={boite.ville}
              adress={boite.adresse}
              numberBooks={boite.nmb_books}
            />
          </Popup>
        </Marker>
      ))}

      <Marker position={lyonPosition} icon={userMarker} />
    </LeafletMap>
  );
}

export default Map;
