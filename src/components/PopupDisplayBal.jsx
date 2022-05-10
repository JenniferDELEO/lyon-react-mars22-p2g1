import React, { useState } from 'react';
import PopupHome from './PopupHome';
import BalMedium from '../assets/BAL-medium.png';
import MapNavigation from '../assets/map-navigation.png';
import '../styles/PopupDisplay.css';
import { Link } from 'react-router-dom';
import Coordbal from '../ressources/coordsBAL.json';

function PopupDisplayBal() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setButtonPopup(true)}>
        Open popup
      </button>
      <PopupHome trigger={buttonPopup} setTrigger={setButtonPopup}>
        <div className="bal-popup">
          {Coordbal.slice(0, 1).map((box) => (
            <>
              <h1>Boîte {box.ville}</h1>
              <p>
                {' '}
                <Link
                  to={`//www.google.com/maps/place/${box.lat}+${box.long}/@${box.lat},${box.long},15z`}
                  target="_blank"
                >
                  <img
                    alt="navigation to google maps"
                    src={MapNavigation}
                    className="map-navigation"
                  />
                </Link>
                {box.adresse}
              </p>
            </>
          ))}
          <div className="bal-popup-content">
            <div>
              <p>23 livres</p>
              <div>
                <p>Catégories :</p>
                <ul>
                  <li>Roman</li>
                  <li>Aventure</li>
                </ul>
              </div>
            </div>
            <img src={BalMedium} alt="BAL medium" />
            {Coordbal.slice(0, 1).map((box) => (
              <Link to={`/BoxDetail/${box.boite}`}>
                <button type="button" className="button-acces">
                  Accéder au contenu
                </button>
              </Link>
            ))}
          </div>
        </div>
      </PopupHome>
    </div>
  );
}

export default PopupDisplayBal;
