/* eslint-disable react/jsx-no-bind */
import '../styles/box_detail.css';
import '../styles/index.css';
import Book from '../components/Book';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AddBookForm from '../components/AddBookForm';
import BoxHeader from '../components/BoxHeaders';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

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
        console.log(data);
      })
      .catch(() => {});
  }, [addBookForm, booksOut]);

  function changeForm() {
    setBookNotFound(!notFound);
    setRequestStatus(true);
  }

  function addBook() {
    if (!notFound && _isbn) {
      console.log('env -> ', process.env);
      axios
        .post(
          `${process.env.REACT_APP_API_URL}books/${_isbn}/${boxNumber}/${starRate}/${condition}`
        )
        .then((response) => response.data)
        .then((data) => {
          setBookNotFound(false);
          setAddBookForm(false);
          axios
            .patch(`http://localhost:4000/boxes/${boxNumber}?action=add`)
            .then((r) => {
              console.log(r);
            })
            .catch(() => {
              console.log('erreur');
            });
          toast.info(
            `Vous avez deposé: \n${data.title} de ${data.author}  merci de faire vivre les BAL`,
            {
              position: 'top-center',
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
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
        selection: 0,
      };
      setBookNotFound(false);
      setAddBookForm(false);
      axios
        .post(`${process.env.REACT_APP_API_URL}books`, newBook)
        .then(() => {
          axios
            .patch(`http://localhost:4000/boxes/${boxNumber}?action=add`)
            .then((r) => {
              console.log(r);
            })
            .catch(() => {
              console.log('erreur');
            });
          toast(
            `Vous avez deposé:
           \n${title} de ${author}  
           merci de faire vivre les BAL`,
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
        })
        .catch(() => {});
    }
    setAuthor('');
    setTitle('');
    setIsbn('');
  }

  return (
    <div>
      <BoxHeader displayForm={displayForm} />
      {addBookForm ? (
        <AddBookForm
          title={handleTitleChange}
          author={handleAuthorChange}
          isbn={handleIsbnChange}
          titleValue={title}
          isbnValue={_isbn}
          authorValue={author}
          notFound={notFound}
          changeForm={changeForm}
          fetchBook={addBook}
          rate={setStarRate}
          condition={handleConditionChange}
          status={requestStatus}
          showForm={() => setAddBookForm(!addBookForm)}
        />
      ) : (
        ''
      )}
      <div>
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
            boxId={boxNumber}
          />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}
