/* eslint-disable react/jsx-one-expression-per-line */
import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import RatingStar from '../components/ratingStar';
import '../styles/bookDetail.css';

export default function BookDetail() {
  const [book, setBook] = useState();
  const id = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/book/${id.id}`)
      .then((response) => response.data)
      .then((data) => {
        setBook(data);
      });
  }, []);

  return (
    <div className="bookdetail">
      {book && (
        <div>
          <h2 className="bookTitle">{book.title}</h2>
          <div className="mainContainerBookDetail">
            <img src={book.picture} alt={book.title} />
            <div className="carateristicsContainer">
              <h2>Avis des lecteurs :</h2>
              <RatingStar rate={book.note} padding={'pb-0'} size={'text-4xl'} />
              <p>{book.pages_nbr} pages</p>
              <p>Date publication : {book.publication_year}</p>
              <p>Éditeur : {book.editions}</p>
              <p>ISBN : {book.isbn}</p>
            </div>
          </div>

          <h2>{book.author}</h2>

          <p className="resumebookDetail">
            <strong>Résumé :</strong> {book.synopsis}
          </p>
          <button type="button">Vérifier disponibilité</button>
          <p> CARTE</p>
        </div>
      )}
    </div>
  );
}
