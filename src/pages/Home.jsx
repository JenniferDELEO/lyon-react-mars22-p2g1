import React, { useState } from 'react';
import PopupDisplayHome from '../components/PopupDisplayHome';
import Mapsection from '../components/Mapmodule';
import HomeBookSelection from '../components/HomeBookSelection';
import HomeBoxList from '../components/HomeBoxList';

export default function Home() {
  const [postalCode, setPostalCode] = useState('');
  return (
    <>
      <div className="mapContainer">
        <Mapsection setCP={setPostalCode} />
      </div>
      <PopupDisplayHome />
      <HomeBoxList CP={postalCode} />
      <HomeBookSelection />
    </>
  );
}
