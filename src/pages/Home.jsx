import React, { useState, useEffect } from 'react';
import Popup from '../components/Popup';
import BalMedium from '../assets/BAL_medium.png';
import Mapsection from '../components/Mapmodule';

export default function Home() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 2000);
  }, []);

  return (
    <div>
      <div className="mapContainer">
        <Mapsection />
      </div>
      <h1>Home Page</h1>
      <button type="submit" onClick={() => setButtonPopup(true)}>
        Open popup
      </button>
      <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        <h1>Bonjour et bienvenue !</h1>
        <p>
          Merci pour cette première visite sur La boîte à lire Lyon et ses
          environs ! Avez-vous déjà remarqué toutes ces boîtes présentes un peu
          partout avec des livres à l’intérieur ? Oui ? Et bien ce site vous
          permet de savoir précisémment quels livres sont présents et dans quel
          état :) Non ? Et bien, cherchez bien, on en trouve de partout ;) Bonne
          lecture !
        </p>
        <button type="button">Accéder à La Boîte à Lire</button>
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
        </div>
      </Popup>
    </div>
  );
}
