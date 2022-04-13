import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import React from 'react';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="order-1">
        <Header />
      </div>
      <div className="order-4">
        <NavBar />
      </div>
      <div className="order-2">
        <Main />
      </div>
      <div className="order-3">
        <Footer />
      </div>
    </div>
  );
}

export default App;
