import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import React from 'react';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Main />
      <Footer />
    </>
  );
}

export default App;
