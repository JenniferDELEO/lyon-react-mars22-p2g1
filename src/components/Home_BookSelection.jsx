/* eslint-disable react/jsx-indent */
import bookList from '../ressources/livresDB.json';

function HomeBookSelection() {
  return (
    <div className="bookSelection">
      <h2>Sélection du mois :</h2>
      <ul>
        {bookList.slice(0, 10).map((book) => (
          <p>
            {' '}
            {book.note === 5 ? <img src={book.picture} alt="preview" /> : null}
          </p>
        ))}
      </ul>
    </div>
  );
}
export default HomeBookSelection;
