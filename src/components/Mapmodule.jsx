import React from 'react';
import { MapContainer as LeafletMap, Marker, TileLayer } from 'react-leaflet';
import { geolocated } from 'react-geolocated';

const DEFAULT_LATITUDE = 45.764043;
const DEFAULT_LANGITUDE = 4.835659;

function Map() {
  const latitude = this.props.coords
    ? this.props.coords.latitude
    : DEFAULT_LANGITUDE;
  const longitude = this.props.coords
    ? this.props.coords.longitude
    : DEFAULT_LATITUDE;
  return (
    <div className="map">
      <LeafletMap center={[latitude, longitude]} zoom={18}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </LeafletMap>
      <Marker position={[latitude, longitude]}></Marker>
    </div>
  );
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 10000,
})(Map);
