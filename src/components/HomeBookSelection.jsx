/* eslint-disable react/jsx-indent */
import bookList from '../ressources/livresDB.json';

function HomeBookSelection() {
  return (
    <div className="wrapper">
      <h2>Sélection du mois :</h2>
      <div className="bookSelection">
        <div className="carousel">
          {bookList.slice(0, 10).map((book) => (
            <p>
              {' '}
              {book.note === 5 ? (
                <img src={book.picture} alt="preview" />
              ) : null}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
export default HomeBookSelection;
