import './styles/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import React, { useEffect, useState } from 'react';

function App() {
  const [show, setShow] = useState(true);
  const controlNavbar = () => {
    if (document.documentElement.scrollTop > 80 && window.innerWidth < 650) {
      setShow(false);
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
      <div className={`navbar-fixed ${show && 'navbar'}`}>
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
