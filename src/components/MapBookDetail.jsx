/* eslint-disable global-require */
/* eslint-disable function-paren-newline */
/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable dot-notation */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  MapContainer as LeafletMap,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import '../styles/MapBookdetail.css';
import PopUpMap from './PopupMap';
import * as L from 'leaflet';

function MapBookDetail({ boxNumber }) {
  const lyonPosition = [45.764043, 4.835659];
  const [coordsData, setCoordsData] = useState([]);

  const LeafIcon = L.Icon.extend({
    options: {},
  });

  const boxIcon = new LeafIcon({
    iconUrl: require('../assets/icon-marker.jpg'),
    iconSize: [40, 45],
  });

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
    <LeafletMap center={lyonPosition} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {coordsData.map((boite) =>
        boite.id === boxNumber[0].box_number ? (
          <Marker position={[boite.lat, boite.long]} icon={boxIcon}>
            <Popup>
              <PopUpMap
                name={boite.ville}
                adress={boite.adresse}
                numberBooks={boite.quantity}
                id={boite.id}
              />
            </Popup>
          </Marker>
        ) : (
          <Marker position={[boite.lat, boite.long]}>
            <Popup>
              <PopUpMap
                name={boite.ville}
                adress={boite.adresse}
                numberBooks={boite.quantity}
                id={boite.id}
              />
            </Popup>
          </Marker>
        )
      )}
    </LeafletMap>
  );
}

export default MapBookDetail;
