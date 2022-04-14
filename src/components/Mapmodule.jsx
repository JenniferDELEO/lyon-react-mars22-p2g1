import React from 'react';
import { MapContainer as LeafletMap, TileLayer } from 'react-leaflet';

const DEFAULT_LATITUDE = 48;
const DEFAULT_LANGITUDE = -123;

function Map() {
  return (
    <div className="map">
      <LeafletMap center={[DEFAULT_LATITUDE, DEFAULT_LANGITUDE]} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </LeafletMap>
    </div>
  );
}

export default Map;
