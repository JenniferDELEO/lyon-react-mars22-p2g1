/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable array-callback-return */
import vintage from '../assets/vintage.jpg';
import { useEffect, useState } from 'react';

export default function FavoriteBooks() {
  const [favoritesList, setFavoritesList] = useState([]);
  function handleClickDeleteBookFromFavorites(book) {
    const newFavoritesList = favoritesList.slice();
    localStorage.removeItem(book.isbn);
    setFavoritesList(newFavoritesList.filter((b) => b.isbn !== book.isbn));
  }

  useEffect(() => {
    const booksFavsList = [];
    for (let i = 0; i < localStorage.length; i += 1) {
      booksFavsList.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    setFavoritesList(booksFavsList);
  }, []);

  return (
    <div>
      {favoritesList.map((book) => (
        <div>
          <img
            src={
              book.picture === null || book.picture === 'None'
                ? vintage
                : book.picture
            }
            alt={book.title}
          />

          <p>
            {book.title} Auteur : {book.author}
          </p>
          <button
            type="button"
            onClick={() => handleClickDeleteBookFromFavorites(book)}
          >
            Clic pour supprimer des favoris
          </button>
        </div>
      ))}
    </div>
  );
}
