import { Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import React from 'react';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}
