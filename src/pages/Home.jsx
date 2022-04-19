import React from 'react';
import PopupDisplayHome from '../components/PopupDisplayHome';
import HomeBookSelection from '../components/Home_BookSelection';
import HomeBoxList from '../components/Home_BoxList';

export default function Home() {
  return (
    <>
      <PopupDisplayHome />
      <HomeBoxList />
      <HomeBookSelection />
    </>
  );
}
