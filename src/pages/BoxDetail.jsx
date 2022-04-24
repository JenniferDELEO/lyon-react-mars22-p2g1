import '../styles/box_detail.css';
import '../styles/index.css';
import Book from '../components/Book';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AddBookForm from '../components/AddBookForm';
import BoxHeader from '../components/BoxHeaders';
import axios from 'axios';
import Popup from '../components/Popup';

export default function BoxDetail() {
  const num = useParams();
  const [booksOut, setBooksOut] = useState(false);
  const [booksList, setBooksList] = useState([]);
  const [addBookForm, setAddBookForm] = useState(false);
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [boxNumber] = useState(num.boite);
  const [notFound, setBookNotFound] = useState(false);
  const [_isbn, setIsbn] = useState();
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
      .get(`${process.env.REACT_APP_API_URL}boxes/${boxNumber}/books`)
      .then((response) => response.data)
      .then((data) => {
        setBooksList(data);
      })
      .catch(() => {});
  }, [addBookForm, booksOut]);

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
        .get(
          `${process.env.REACT_APP_API_URL}books/${_isbn}/${boxNumber}/${starRate}/${condition}`
        )
        .then((response) => response.data)
        .then((data) => {
          setAuthorPopup(data[0]);
          setTitlePopup(data[1]);
          setShowPopup(true);
          setBookNotFound(false);
          setAddBookForm(false);
        })
        .catch(() => {
          setRequestStatus(false);
          setBookNotFound(true);
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
        box_number: parseFloat(boxNumber),
        isbn: _isbn,
        to_borrow: false,
        to_delete: false,
        out_of_stock: 0,
      };
      setAuthorPopup(authorCap);
      setTitlePopup(titleCap);
      setShowPopup(true);
      setBookNotFound(false);
      setAddBookForm(false);
      axios
        .post(`${process.env.REACT_APP_API_URL}books`, newBook)
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
      <BoxHeader displayForm={displayForm} boxNumber={boxNumber} />
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
          changeForm={changeForm}
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
        {booksList.map((book) => (
          <Book
            id={book.id}
            picture={book.picture}
            titre={book.title}
            auteur={book.author}
            note={book.note}
            etat={book.cond}
            borrowState={book.to_borrow}
            deleteState={book.to_delete}
            isbn={book.isbn}
            booksOut={setBooksOut}
          />
        ))}
      </div>
    </div>
  );
}
