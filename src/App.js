import './styles/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import React, { useEffect, useState } from 'react';
import useScroll from './hooks/useScroll';

function App() {
  const searchBoxHeight = 50;
  const [height, setHeight] = useState(searchBoxHeight);
  const scroll = useScroll({
    wait: 50,
  });

  useEffect(() => {
    if (scroll.direction === 'up') {
      setHeight((prevHeight) => {
        const newHeight = prevHeight - scroll.deltaY;
        return newHeight > searchBoxHeight ? searchBoxHeight : newHeight;
      });
    } else if (scroll.direction === 'down') {
      setHeight((prevHeight) => {
        const leftToScroll =
          document.documentElement.scrollHeight - scroll.y - window.innerHeight;
        if (leftToScroll <= searchBoxHeight) setHeight(searchBoxHeight);

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
      <div id="searchbar" className={'navbar-fixed'} style={{ height }}>
        <NavBar />
      </div>
    </div>
  );
}

export default App;
