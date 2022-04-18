import React from 'react';
import PopupDisplay from '../components/PopupDisplay';
import HomeBookSelection from '../components/Home_BookSelection';
import HomeBoxList from '../components/Home_BoxList';

export default function Home() {
  return (
    <>
      <PopupDisplay />
      <HomeBoxList />
      <HomeBookSelection />
    </>
  );
}
