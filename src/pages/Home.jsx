import React from 'react';
import PopupDisplayHome from '../components/PopupDisplayHome';
import Mapsection from '../components/Mapmodule';
import HomeBookSelection from '../components/HomeBookSelection';
import HomeBoxList from '../components/HomeBoxList';

export default function Home() {
  return (
    <>
      <div className="mapContainer">
        <Mapsection />
      </div>
      <PopupDisplayHome />
      <HomeBoxList />
      <HomeBookSelection />
    </>
  );
}
