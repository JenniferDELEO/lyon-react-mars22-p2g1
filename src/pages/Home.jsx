import React from 'react';
import HomeBookSelection from '../components/Home_BookSelection';
import HomeBoxList from '../components/Home_BoxList';
import Mapsection from '../components/Mapmodule';

export default function Home() {
  return (
    <>
      <div className="mapContainer">
        <Mapsection />
      </div>
      <HomeBoxList />
      <HomeBookSelection />
    </>
  );
}
