import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../styles/HomeLists.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
            .sort(() => 0.5 - Math.random())
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
        <AliceCarousel
          autoPlay
          autoPlayInterval={2000}
          infinite
          responsive={{
            0: {
              items: 1,
            },
            200: {
              items: 3,
            },
          }}
          items={getBook.map((book) => (
            <Link to={`/bookdetail/${book.id}`}>
              <div className="carouselHomepage">
                <div className="carouselItems" key={book.isbn}>
                  {' '}
                  <img src={book.picture} alt="preview" role="presentation" />
                </div>
                <p className="legend">
                  {book.title}
                  {' de '}
                  {book.author}
                </p>
              </div>
            </Link>
          ))}
        />
      </div>
    </div>
  );
}
export default HomeBookSelection;
