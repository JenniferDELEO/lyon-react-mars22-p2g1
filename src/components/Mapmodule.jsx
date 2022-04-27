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
              name="toto"
              adress="11 rue des poissons"
              numberBooks="34"
            />
          </Popup>
        </Marker>
      ))}
    </LeafletMap>
  );
}

export default Map;
