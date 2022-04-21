import React from 'react';
import PopupDisplayHome from '../components/PopupDisplayHome';
import HomeBookSelection from '../components/Home_BookSelection';
import HomeBoxList from '../components/Home_BoxList';
import Mapsection from '../components/Mapmodule';

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
