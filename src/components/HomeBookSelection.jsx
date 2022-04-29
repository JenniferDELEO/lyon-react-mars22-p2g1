import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import '../styles/HomeLists.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function HomeBookSelection() {
  const [getBook, setGetBook] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}books`)
      .then((result) => result.data)
      .then((data) => {
        setGetBook(
          data
            .filter((book) => book.note >= 4)
            .filter((book) => book.picture)
            .slice(0, 10)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="wrapper">
      <h2>Sélection du mois :</h2>
      <div className="carouselContainer">
        <Carousel
          showStatus={false}
          infiniteLoop
          autoPlay
          useKeyboardArrows
          transitionTime={1000}
          selectedItem={0}
        >
          {getBook.map((book) => (
            <div className="carouselItems" key={book.isbn}>
              {' '}
              <img src={book.picture} alt="preview" />
              <p className="legend">
                {book.title}
                {' de '}
                {book.author}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
export default HomeBookSelection;
