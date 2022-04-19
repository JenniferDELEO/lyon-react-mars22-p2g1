import React from 'react';
import PopupDisplayHome from '../components/PopupDisplayHome';
import HomeBookSelection from '../components/HomeBookSelection';
import HomeBoxList from '../components/HomeBoxList';

export default function Home() {
  return (
    <>
      <PopupDisplayHome />
      <HomeBoxList />
      <HomeBookSelection />
    </>
  );
}
