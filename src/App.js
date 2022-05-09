import './styles/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import React, { useEffect, useState } from 'react';
import useScroll from './hooks/useScroll';
import { useMediaQuery } from 'usehooks-ts';

function App() {
  const navbarHeight = 70;
  const [height, setHeight] = useState(navbarHeight);
  const scroll = useScroll({
    wait: 50,
  });
  const matches = useMediaQuery('(max-width: 1020px)');

  useEffect(() => {
    if (scroll.direction === 'up') {
      setHeight((prevHeight) => {
        const newHeight = prevHeight - scroll.deltaY;
        return newHeight > navbarHeight ? navbarHeight : newHeight;
      });
    } else if (scroll.direction === 'down') {
      setHeight((prevHeight) => {
        const leftToScroll =
          document.documentElement.scrollHeight - scroll.y - window.innerHeight;
        if (leftToScroll <= navbarHeight) setHeight(navbarHeight);

        const newHeight = prevHeight - scroll.deltaY;
        return newHeight < 0 ? 0 : newHeight;
      });
    }
  }, [scroll]);

  return (
    <div className="app-container">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <Main />
      </div>
      <div className="footer">
        <Footer />
      </div>
      <div className="navbar" style={matches ? { height } : null}>
        <NavBar />
      </div>
    </div>
  );
}

export default App;
