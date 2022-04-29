import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  MapContainer as LeafletMap,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import '../styles/Map.css';
import PopUpMap from './PopupMap';

function Map({ setCP }) {
  const lyonPosition = [45.764043, 4.835659];
  const [coordsData, setCoordsData] = useState([]);

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
  return (
    <LeafletMap
      className="map"
      center={lyonPosition}
      zoom={14}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {coordsData.map((boite) => (
        <Marker
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
    </LeafletMap>
  );
}

export default Map;
