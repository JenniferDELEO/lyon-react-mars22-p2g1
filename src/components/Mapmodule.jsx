import React from 'react';
import { MapContainer as LeafletMap, TileLayer } from 'react-leaflet';

const latitude = 45.764043;
const longitude = 4.835659;

function Map() {
  return (
    <div className="map">
      <LeafletMap center={[latitude, longitude]} zoom={18}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </LeafletMap>
    </div>
  );
}

export default Map;
