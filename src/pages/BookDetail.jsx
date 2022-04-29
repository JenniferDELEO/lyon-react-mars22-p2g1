/* eslint-disable react/jsx-one-expression-per-line */
import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import RatingStar from '../components/ratingStar';
import '../styles/bookDetail.css';
import vintage from '../assets/vintage.jpg';

export default function BookDetail() {
  const [book, setBook] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}books/${id.id}`)
      .then((response) => response.data)
      .then((data) => {
        setBook(data);
      });
  }, []);

  return (
    <div className="bookdetail">
      {book && (
        <div>
          <h2>{book.title}</h2>
          <div className="carateristicsContainer">
            <img src={book.picture || vintage} alt={book.title} />
            <div className="carateristicsDatas">
              <p id="lectorsRates">Avis des lecteurs :</p>
              <RatingStar rate={book.note} padding={'pb-2'} size={'text-4xl'} />
              <p>{book.pages_nbr} pages</p>
              <p>Date publication : {book.publication_year}</p>
              <p>Éditeur : {book.editions}</p>
              <p>ISBN : {book.isbn}</p>
            </div>
          </div>

          <h2 id="author">{book.author}</h2>

          <p className="resumebookDetail">
            <strong>Résumé :</strong> {book.synopsis}
          </p>
          <button type="button">Disponible dans une boîte ?</button>
        </div>
      )}
    </div>
  );
}
