import React, { useState } from 'react';
import PopupDisplayHome from '../components/PopupDisplayHome';
import Mapsection from '../components/Mapmodule';
import HomeBookSelection from '../components/HomeBookSelection';
import HomeBoxList from '../components/HomeBoxList';
import localisationPointer from '../assets/localisation.png';
import '../styles/Home.css';

export default function Home() {
  const [postalCode, setPostalCode] = useState({
    cp: '69001',
    id: '',
    address: '',
  });
  return (
    <>
      <div className="mapContainer">
        <div>
          <img className="localPointer" src={localisationPointer} alt="" />
        </div>
        <Mapsection setCP={setPostalCode} />
      </div>
      <PopupDisplayHome />
      <HomeBoxList CP={postalCode} />
      <HomeBookSelection />
    </>
  );
}
