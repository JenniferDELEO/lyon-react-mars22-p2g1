/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable array-callback-return */
import vintage from '../assets/vintage.jpg';
import { useEffect, useState } from 'react';
import RatingStar from '../components/ratingStar';
import redHeart from '../assets/favorite(heart_red).svg';
import whiteHeart from '../assets/favorite(heart).svg';
import { ToastContainer, toast } from 'react-toastify';

export default function FavoriteBooks() {
  let heart = redHeart;
  const [favoritesList, setFavoritesList] = useState([]);
  function handleClickDeleteBookFromFavorites(book) {
    const newFavoritesList = favoritesList.slice();
    localStorage.removeItem(book.isbn);
    setFavoritesList(newFavoritesList.filter((b) => b.isbn !== book.isbn));
    heart = whiteHeart;
    toast(
      `Vous avez supprimé de vos favoris :
           \n${book.title} de ${book.author}`,
      {
        position: 'top-center',
        icon: '📖',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
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
      <ToastContainer />
      <h1>Mes livres favoris</h1>
      {favoritesList.map((book) => (
        <div className="bookCard">
          <img
            src={
              book.picture === null || book.picture === 'None'
                ? vintage
                : book.picture
            }
            alt={book.title}
          />
          <div className="ml-5 flex flex-col justify-around leading-10">
            <p className="font-black text-sm underline">
              {book.title.slice(0, 40)}
            </p>
            <p className="text-xs">{book.author.slice(0, 23)}</p>
          </div>
          <RatingStar rate={parseFloat(book.note)} />
          <button
            type="button"
            onClick={() => handleClickDeleteBookFromFavorites(book)}
          >
            <img src={heart} alt={book.title} />
          </button>
        </div>
      ))}
    </div>
  );
}
