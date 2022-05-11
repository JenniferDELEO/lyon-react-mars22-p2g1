import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  MapContainer as LeafletMap,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from 'react-leaflet';
import '../styles/Map.css';
import PopUpMap from './PopupMap';
import L from 'leaflet';

const userMarker = new L.Icon({
  /* eslint-disable global-require */
  iconUrl: require('../assets/userIcon.png'),
  /* eslint-enable global-require */
  iconSize: [35, 90],
});

function MapComponent({ setMap }) {
  const map = useMap();

  useEffect(() => {
    setMap(map);
  });

  return null;
}

function Map({ setCP, userLocation }) {
  const [coordsData, setCoordsData] = useState([]);
  const [map, setMap] = useState();

  useEffect(() => {
    if (map && userLocation) {
      map.flyTo(userLocation, 18);
    }
  }, [userLocation, map]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}boxes`)
      .then((result) => result.data)
      .then((result) => {
        setCoordsData(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const lyonPosition = [45.764043, 4.835659];

  return (
    <LeafletMap
      className="map"
      center={lyonPosition}
      zoom={15}
      scrollWheelZoom={false}
      whenCreated={(m) => {
        setMap(m);
      }}
    >
      <MapComponent setMap={setMap} />

      <TileLayer
        url="http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {coordsData.map((boite) => (
        <Marker
          key={boite.id}
          position={[boite.lat, boite.long]}
          eventHandlers={{
            click: () => {
              setCP({ cp: boite.CP, id: boite.id, address: boite.adresse });
            },
          }}
        >
          <Popup>
            <PopUpMap
              name={boite.ville}
              adress={boite.adresse}
              numberBooks={boite.quantity}
              id={boite.id}
            />
          </Popup>
        </Marker>
      ))}
      {userLocation && <Marker position={userLocation} icon={userMarker} />}
    </LeafletMap>
  );
}

export default Map;
