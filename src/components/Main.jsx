import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import React from 'react';
import Search from '../pages/Search';
import Form from '../pages/Form';
import MyProfile from '../pages/MyProfile';
import BoxDetail from '../pages/BoxDetail';
import BookDetail from '../pages/BookDetail';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/form" element={<Form />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/boxDetail/:boite" element={<BoxDetail />} />
        <Route path="/bookdetail" element={<BookDetail />} />
      </Routes>
    </main>
  );
}
