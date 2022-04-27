/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import livresDB from '../ressources/livresDB.json';

export default function BookDetail() {
  const book = livresDB[0];

  return (
    <div className="bookdetail">
      {book && (
        <div>
          <div className="fondtitre">
            <h1>{book.titre}</h1>
          </div>
          <div className="containerTop">
            <img src={book.picture} alt={book.titre} />
            <div className="containerTopRight">
              <h3>Avis des lecteurs :</h3>
              <p>{book.nbrPages} pages</p>
              <p>Année de publication : {book.datePublication}</p>
              <p>ISBN13: {book.ISBN}</p>
            </div>
          </div>
          <h2>Auteur : {book.auteur}</h2>
          <div className="resume">
            <p>
              <strong>Résumé :</strong> {book.resume}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
