import bookList from '../ressources/livresDB.json';
// import Vintage from '../assets/vintage.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../styles/HomeLists.css';

function HomeBookSelection() {
  const bookNote = bookList.filter((book) => book.note >= 4);
  const bookPicture = bookNote.filter((book) => book.picture);

  return (
    <div className="wrapper">
      <h2>Sélection du mois :</h2>
      <div className="carouselContainer">
        <Carousel
          showStatus={false}
          infiniteLoop
          // emulateTouch
          // autoPlay
          useKeyboardArrows
          transitionTime={1000}
          // axis="vertical"
          selectedItem={0}
        >
          {bookPicture.map((book) => (
            <div className="carouselItems" key={book.ISBN}>
              {' '}
              <img src={book.picture} alt="preview" />
              <p className="legend">
                {book.titre}
                {' de '}
                {book.auteur}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
export default HomeBookSelection;
