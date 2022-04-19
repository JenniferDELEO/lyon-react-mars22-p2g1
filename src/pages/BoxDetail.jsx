import '../styles/box_detail.css';
import '../styles/index.css';
import Book from '../components/Book';
import booksDataBase from '../ressources/books_database.json';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AddBookForm from '../components/AddBookForm';
import BoxHeader from '../components/BoxHeaders';
import axios from 'axios';
import Popup from '../components/Popup';

export default function BoxDetail() {
  const num = useParams();
  const [books, setBooks] = useState(booksDataBase);
  const [addBookForm, setAddBookForm] = useState(false);
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [boxNumber] = useState(2);
  const [notFound, setBookNotFound] = useState(false);
  const [_isbn, setIsbn] = useState('2253167444');
  const [authorPopup, setAuthorPopup] = useState('');
  const [titlePopup, setTitlePopup] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [starRate, setStarRate] = useState(3);
  const [condition, setCondition] = useState(2);
  const [requestStatus, setRequestStatus] = useState(true);

  const handleIsbnChange = (e) => setIsbn(e.target.value);
  const handleAuthorChange = (e) => setAuthor(e.target.value);
  const handleTitleChange = (e) => setTitle(e.target.value);
  const displayForm = () => setAddBookForm(!addBookForm);
  const handleConditionChange = (e) => setCondition(e.target.value);

  useEffect(() => {
    axios
      .get('http://localhost:5000/books/all_books')
      .then((response) => response.data)
      .then((data) => {
        setBooks(data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [addBookForm]);

  function changeForm() {
    setBookNotFound(!notFound);
    setRequestStatus(true);
  }

  function abortPopup() {
    setRequestStatus(true);
    setBookNotFound(false);
    setAddBookForm(false);
    setShowPopup(false);
    setTitlePopup('');
    setAuthorPopup('');
  }

  function addBook() {
    if (!notFound && _isbn) {
      axios
        .get(`http://localhost:5000/books/isbn=${_isbn}`)
        .then((response) => response.data)
        .then((data) => {
          const newBook = {
            title: data[0][0].title,
            editions: data[0][0].editions,
            author: data[0][0].author,
            publication_year: data[0][0].publication_year,
            picture: data[0][0].picture,
            pages_nbr: data[0][0].pages_nbr,
            note: starRate,
            cond: condition,
            box_number: 5,
            isbn: _isbn,
            to_borrow: null,
            to_delete: null,
            out_of_stock: null,
          };
          console.log('num boite -> ', boxNumber);
          setAuthorPopup(newBook.author);
          setTitlePopup(newBook.title);
          setShowPopup(true);
          setBookNotFound(false);
          setAddBookForm(false);
          console.log('requesting database..');
          axios
            .post('http://localhost:5000/post_books', newBook)
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch(() => {
          console.log('not in database, requesting googleBooks..');
          axios
            .get(
              `https://www.googleapis.com/books/v1/volumes?q=isbn:${_isbn}&idAIzaSyBR5ULsTVhH932FKKrw-3qTq1FgTKKHccM`
            )
            .then((response) => response.data)
            .then((data) => {
              let img = '';
              if (data.items[0].volumeInfo.imageLinks) {
                img = data.items[0].volumeInfo.imageLinks.smallThumbnail;
              }
              const newBook = {
                title: data.items[0].volumeInfo.title,
                editions: data.items[0].volumeInfo.publisher,
                author: data.items[0].volumeInfo.authors[0],
                publication_year: data.items[0].volumeInfo.publishedDate.slice(
                  0,
                  4
                ),
                picture: img || null,
                pages_nbr: data.items[0].volumeInfo.pageCount,
                note: starRate || 2,
                cond: condition || 2,
                box_number: 5,
                isbn: _isbn,
                to_borrow: false,
                to_delete: false,
                out_of_stock: false,
              };
              setAuthorPopup(newBook.author);
              setTitlePopup(newBook.title);
              setShowPopup(true);
              setBookNotFound(false);
              setAddBookForm(false);
              axios
                .post('http://localhost:5000/post_books', newBook)
                .then((response) => {
                  console.log(response);
                })
                .catch((error) => {
                  console.log(error);
                });
            })
            .catch(() => {
              setRequestStatus(false);
              setBookNotFound(true);
            });
        });
    }
    if (notFound && title && author) {
      const titleCap = title.charAt(0).toUpperCase() + title.slice(1);
      let auteur = author.split(' ');
      auteur = auteur.map((x) => x.charAt(0).toUpperCase() + x.slice(1));
      const authorCap = auteur.join().replace(',', ' ');
      const newBook = {
        title: titleCap,
        editions: null,
        author: authorCap,
        publication_year: null,
        picture: null,
        pages_nbr: null,
        note: starRate,
        cond: condition,
        box_number: 5,
        isbn: _isbn,
        to_borrow: false,
        to_delete: false,
        out_of_stock: false,
      };
      setAuthorPopup(authorCap);
      setTitlePopup(titleCap);
      setShowPopup(true);
      setBookNotFound(false);
      setAddBookForm(false);
      axios
        .post('http://localhost:5000/post_books', newBook)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setTitle('');
    setAuthor('');
    setIsbn('');
  }

  return (
    <div>
      <BoxHeader form={displayForm} />
      {addBookForm ? (
        <AddBookForm
          title={handleTitleChange}
          author={handleAuthorChange}
          isbn={handleIsbnChange}
          titleValue={title}
          isbnValue={_isbn}
          authorValue={author}
          notFound={notFound}
          // eslint-disable-next-line react/jsx-no-bind
          change={changeForm}
          // eslint-disable-next-line react/jsx-no-bind
          showForm={abortPopup}
          // eslint-disable-next-line react/jsx-no-bind
          fetchBook={addBook}
          rate={setStarRate}
          condition={handleConditionChange}
          status={requestStatus}
          // eslint-disable-next-line react/jsx-no-bind
          popupAbort={abortPopup}
        />
      ) : (
        ''
      )}
      <div>
        {showPopup ? (
          <Popup
            titre={titlePopup}
            auteur={authorPopup}
            popup="depot"
            // eslint-disable-next-line react/jsx-no-bind
            close={abortPopup}
          />
        ) : (
          ''
        )}
        {books
          .filter((book) => book.box_number === parseFloat(num.boite))
          .map((book) => (
            <Book
              picture={book.picture}
              titre={book.title}
              auteur={book.author}
              note={book.note}
              etat={book.cond}
              borrowState={book.to_borrow}
              deleteState={book.to_delete}
              liftUp={setBooks}
              isbn={book.isbn}
              booksList={books}
            />
          ))}
      </div>
    </div>
  );
}
