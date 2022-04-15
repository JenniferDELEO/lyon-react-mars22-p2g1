import React, { useEffect, useState } from 'react';
import Popup from './Popup';
import BalMedium from '../assets/BAL_medium.png';
import '../styles/PopupDisplay.css';

function PopupDisplay() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 2000);
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <button
        type="submit"
        onClick={() => setButtonPopup(true)}
        className="button-acces"
      >
        Open popup
      </button>
      <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        <h1>Bonjour et bienvenue !</h1>
        <div className="welcome">
          <p>
            Merci pour cette première visite sur La boîte à lire Lyon et ses
            environs !
          </p>
          <p>
            Avez-vous déjà remarqué toutes ces boîtes présentes un peu partout
            avec des livres à l’intérieur ?
          </p>
          <p>
            Oui ? Et bien ce site vous permet de savoir précisémment quels
            livres sont présents et dans quel état 😊{' '}
          </p>
          <p>
            Non ? Et bien, cherchez bien, on en trouve de partout 😉 Bonne
            lecture !
          </p>
          <button
            type="button"
            onClick={() => setTimedPopup(false)}
            className="button-acces"
          >
            Accéder à La Boîte à Lire
          </button>
        </div>
      </Popup>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h1>Boîte ...</h1>
        <h2>Adresse</h2>
        <div>
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
          <button type="button" onClick={() => setTimedPopup(false)}>
            Accéder au contenu
          </button>
        </div>
      </Popup>
    </div>
  );
}

export default PopupDisplay;
