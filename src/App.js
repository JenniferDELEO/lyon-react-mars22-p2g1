import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';

function App() {
  const [show, setShow] = useState(true);
  const controlNavbar = () => {
    if (window.scrollY > 50) {
      setShow(false);
      if (window.location.href) setShow(true);
    } else setShow(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  return (
    <div className="app-container">
      <div className="header">
        <Header />
      </div>
      <div className={`${show && 'navbar'}`}>
        <NavBar />
      </div>
      <div className="main">
        <Main />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
