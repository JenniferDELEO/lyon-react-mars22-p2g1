/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import livresDB from '../ressources/livresDB.json';
import '../styles/bookDetail.css';

export default function BookDetail() {
  const book = livresDB[0];

  return (
    <div className="bookdetail">
      {book && (
        <div className="mainContainerBookDetail">
          <div className="titleContainer">
            <h1>{book.titre}</h1>
          </div>
          <div className="carateristicsContainer">
            <div className="imageContainer">
              <img src={book.picture} alt={book.titre} />
            </div>

            <div className="informationContainer">
              <h3>Avis des lecteurs : </h3> <p>★★★</p>
              <p>{book.nbrPages} pages</p>
              <p>Année de publication : {book.datePublication}</p>
              <p>ISBN: {book.ISBN}</p>
            </div>
          </div>

          <div className="bottomContainer">
            <h2>Auteur : {book.auteur}</h2>
            <p className="resumebookDetail">
              <strong>Résumé :</strong> {book.resume}
            </p>
            <button type="submit">Vérifier disponibilité</button>
          </div>
        </div>
      )}
    </div>
  );
}
