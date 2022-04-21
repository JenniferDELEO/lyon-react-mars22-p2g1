import React from 'react';
import { MapContainer as LeafletMap, TileLayer, Marker } from 'react-leaflet';
import coordsData from '../ressources/coordsBAL.json';
import '../styles/Map.css';

function Map() {
  const lyonPosition = [45.764043, 4.835659];
  return (
    <LeafletMap className="map" center={lyonPosition} zoom={16}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {coordsData.map((boite) => (
        <Marker position={[boite.lat, boite.long]} />
      ))}
    </LeafletMap>
  );
}

export default Map;
