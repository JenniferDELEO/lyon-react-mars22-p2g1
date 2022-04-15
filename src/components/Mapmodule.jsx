import React from 'react';
import { MapContainer as LeafletMap, TileLayer } from 'react-leaflet';
import { geolocated } from 'react-geolocated';

function Map() {
  return (
    <div className="map">
      <LeafletMap center={[]} zoom={18}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </LeafletMap>
    </div>
  );
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 10000,
})(Map);
