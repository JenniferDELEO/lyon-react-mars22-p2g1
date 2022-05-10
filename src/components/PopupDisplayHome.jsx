/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import PopupHome from './PopupHome';
import '../styles/PopupDisplay.css';

function PopupDisplayHome() {
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    const popStatus = sessionStorage.getItem('pop_status');
    if (!popStatus) {
      setTimeout(() => {
        setTimedPopup(true);
      }, 2000);
      sessionStorage.setItem('pop_status', 1);
    }
  }, []);
  if (!timedPopup) return null;

  return (
    <div>
      <PopupHome trigger={timedPopup} setTrigger={setTimedPopup}>
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
      </PopupHome>
    </div>
  );
}

export default PopupDisplayHome;
