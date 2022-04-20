import React from 'react';
import PopupDisplayHome from '../components/PopupDisplayHome';
import HomeBookSelection from '../components/Home_BookSelection';
import HomeBoxList from '../components/Home_BoxList';
import HomeQuickSearchBar from '../components/HomeQuickSearchBar';

export default function Home() {
  return (
    <>
      <PopupDisplayHome />
      <HomeQuickSearchBar />
      <HomeBoxList />
      <HomeBookSelection />
    </>
  );
}
