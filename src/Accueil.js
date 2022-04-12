import React from 'react';
import './styles/Accueil.scss';

function Accueil() {
  return (
    <div className="page_accueil">
      <div className="banner">
        <h1>La boîte à lire Lyon</h1>
      </div>
      <div className="map" />
      <p className="question">
        Que voulez-vous lire aujourd'hui?{' '}
        <img
          className="open_book"
          src="icons/book-alt.resized.png"
          alt="open book"
        />
      </p>
      <h2>Liste des boîtes</h2>
      <ul className="liste_boites">
        <li>1ere boite</li>
        <li>2eme boite</li>
      </ul>
      <h2>La sélection du mois : </h2>
      <ul className="liste_livres">
        <li>1er bouquin</li>
        <li>2eme bouquin</li>
        <li>3eme bouquin</li>
      </ul>

      <navbar />
    </div>
  );
}

export default Accueil;
