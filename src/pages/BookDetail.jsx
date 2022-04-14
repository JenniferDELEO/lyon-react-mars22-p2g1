import axios from 'axios';
import React, { useState } from 'react';
// import bookDetail.css

export default function BookDetail() {
  const entree = 9781781101063;
  const [book, setBook] = useState();
  React.useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${entree}`)
      .then((answer) => answer.data.items)
      .then((bookInfo) => {
        setBook(bookInfo[0].volumeInfo);
      });
  }, []);

  return (
    <div className="Bookdetail">
      {book && (
        <div>
          <h1>{book.title}</h1>
          <p>Auteur : {book.authors[0]}</p>
          <p>Date de publication : {book.publishedDate.slice(0, 4)}</p>
          <p>{book.pageCount} pages</p>
          <img src={book.imageLinks.thumbnail} alt={book.title} />
          <p>
            <strong>Résumé :</strong> {book.description}
          </p>
          <p>ISBN (13 chiffres): {book.industryIdentifiers[1].identifier}</p>
        </div>
      )}
    </div>
  );
}

/*  const ISBN13fromAPI = null;
   for (let i = 0; i < book.industryIdentifiers.length; i++) {
     if (book.industryIdentifiers[i].type === 'ISBN_13') {
      ISBN13fromAPI = book.industryIdentifiers[i].identifier;
     }
    console.log(ISBN13fromAPI);
   }
*/
