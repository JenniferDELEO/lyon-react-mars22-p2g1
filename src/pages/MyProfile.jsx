/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable array-callback-return */

// import { useParams } from 'react-router-dom';
// import vintage from '../assets/vintage.jpg';

export default function MyProfile() {
  // const { id } = useParams();

  // function handleClickFavoriteBook(e) {
  //   console.log(e.title);
  //   localStorage.removeItem(id.toString());
  // }
  const booksFavsList = [];
  for (let i = 0; i < localStorage.length; i += 1) {
    booksFavsList.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }

  return (
    <div>
      {booksFavsList.map((book) => (
        <div>
          <img src={book.picture} alt={book.title} />
          <p>
            {book.title} Auteur : {book.author}
          </p>
          {/* <button className={isBookFavorite
            ? 'bookIsFavoriteButton'
            : 'bookIsNotFavoriteButton'}
            type="button"
            onClick={ (e) => handleClickFavoriteBook(e)}>
            Clic pour favori</button> */}
        </div>
      ))}
    </div>
  );
}
