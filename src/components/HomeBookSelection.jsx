/* eslint-disable react/jsx-indent */
import bookList from '../ressources/livresDB.json';
import Vintage from '../assets/vintage.jpg';

function HomeBookSelection() {
  return (
    <div className="wrapper">
      <h2>Sélection du mois :</h2>
      <div className="bookSelection">
        <div className="carouselContainer">
          {bookList.slice(0, 10).map((book) => (
            <p className="carouselItems" key={book.ISBN}>
              {' '}
              {book.note === 5 ? (
                <img src={book.picture} alt="preview" />
              ) : (
                <img src={Vintage} alt="default cover" />
              )}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
export default HomeBookSelection;
