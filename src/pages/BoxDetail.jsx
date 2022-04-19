import '../box_detail_stuffs/box_detail.css';
import Book from '../box_detail_stuffs/components/Book';
import booksDataBase from '../box_detail_stuffs/books_database';
import { useState } from 'react';
import AddBookForm from '../box_detail_stuffs/components/AddBookForm';
import BoxHeader from '../box_detail_stuffs/components/BoxHeaders';
import axios from 'axios';
import Popup from '../box_detail_stuffs/components/Popup';

export default function BoxDetail() {
  const [books, setBooks] = useState(booksDataBase);
  const [addBookForm, setAddBookForm] = useState(false);
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [notFound, setBookNotFound] = useState(false);
  const [isbn, setIsbn] = useState('9782070360598');
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
    if (!notFound && isbn) {
      axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&idAIzaSyBR5ULsTVhH932FKKrw-3qTq1FgTKKHccM`)
        .then((response) => response.data)
        .then((data) => {
          let img = '';
          if (data.items[0].volumeInfo.imageLinks) {
            img = data.items[0].volumeInfo.imageLinks.smallThumbnail;
          }
          const newBookByIsbn = {
            titre: data.items[0].volumeInfo.title,
            editions: data.items[0].volumeInfo.publisher,
            auteur: data.items[0].volumeInfo.authors[0],
            datePublication: data.items[0].volumeInfo.publishedDate.slice(0, 4),
            picture: img || null,
            nbrPages: data.items[0].volumeInfo.pageCount,
            note: starRate || 2,
            etat: condition || 2,
            boite: 5,
            ISBN: isbn,
            toBorrow: false,
            toDelete: false,
            outOfStock: false
          };
          setAuthorPopup(newBookByIsbn.auteur);
          setTitlePopup(newBookByIsbn.titre);
          setShowPopup(true);
          setBookNotFound(false);
          setAddBookForm(false);
          const newBooksList = books.slice();
          newBooksList.unshift(newBookByIsbn);
          setBooks(newBooksList);
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
        titre: titleCap,
        editions: null,
        auteur: authorCap,
        datePublication: null,
        picture: null,
        nbrPages: null,
        note: starRate,
        etat: condition,
        boite: 5,
        ISBN: isbn,
        toBorrow: false,
        toDelete: false,
        outOfStock: false
      };
      setAuthorPopup(authorCap);
      setTitlePopup(titleCap);
      setShowPopup(true);
      setBookNotFound(false);
      setAddBookForm(false);
      const newBooksList = books.slice();
      newBooksList.unshift(newBook);
      setBooks(newBooksList);
    }
    setTitle('');
    setAuthor('');
    setIsbn('');
  }

  return (
    <div>
      <BoxHeader
        form={displayForm}
      />
      {addBookForm ?
        <AddBookForm
          title={handleTitleChange}
          author={handleAuthorChange}
          isbn={handleIsbnChange}
          titleValue={title}
          isbnValue={isbn}
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
        /> : ''}
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
        {books.filter((book) => book.outOfStock === false).map((book) => (
          <Book
            picture={book.picture}
            titre={book.titre}
            auteur={book.auteur}
            note={book.note}
            etat={book.etat}
            borrowState={book.toBorrow}
            deleteState={book.toDelete}
            liftUp={setBooks}
            booksList={books}
          />
        ))}
      </div>
    </div>
  );
}
