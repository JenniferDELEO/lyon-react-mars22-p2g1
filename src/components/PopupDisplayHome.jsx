/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import PopupHome from './PopupHome';
import BalMedium from '../assets/BAL-medium.png';
import MapNavigation from '../assets/map-navigation.png';
import '../styles/PopupDisplay.css';
import { Link } from 'react-router-dom';

export default function PopupDisplayHome() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 2000);
  }, []);

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
      <PopupHome trigger={buttonPopup} setTrigger={setButtonPopup}>
        <div className="bal-popup">
          <h1>Boîte ...</h1>
          <p>
            {' '}
            <Link to="//www.google.fr/maps/@45.5256143,5.2922127,15z">
              <img
                alt="navigation to google maps"
                src={MapNavigation}
                className="map-navigation"
              />
            </Link>
            Adresse
          </p>
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
            <button
              type="button"
              onClick={() => setTimedPopup(false)}
              className="button-acces"
            >
              Accéder au contenu
            </button>
          </div>
        </div>
      </PopupHome>
    </div>
  );
}
