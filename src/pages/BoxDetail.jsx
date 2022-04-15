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
  const [isbn, setIsbn] = useState('');
  const [authorPopup, setAuthorPopup] = useState('');
  const [titlePopup, setTitlePopup] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleIsbnChange = (e) => setIsbn(e.target.value);
  const handleAuthorChange = (e) => setAuthor(e.target.value);
  const handleTitleChange = (e) => setTitle(e.target.value);
  const displayForm = () => setAddBookForm(!addBookForm);
  const changeForm = () => setBookNotFound(!notFound);

  function addBook() {
    if (!notFound && isbn) {
      axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
        .then((response) => response.data)
        .then((data) => {
          let img = '';
          if (data.items[0].volumeInfo.imageLinks) {
            img = data.items[0].volumeInfo.imageLinks.smallThumbnail;
          }
          const newBookByIsbn = {
            titre: data.items[0].volumeInfo.title,
            auteur: data.items[0].volumeInfo.authors[0],
            datePublication: data.items[0].volumeInfo.publishedDate.slice(0, 4),
            picture: img || null,
            nbrPages: data.items[0].volumeInfo.pageCount,
            note: 4,
            etat: 2,
            boite: 5,
            ISBN: isbn,
            borrowed: false,
            deleted: false,
            out: false
          };
          setAuthorPopup(newBookByIsbn.auteur);
          setTitlePopup(newBookByIsbn.titre);
          const newBooksList = books.slice();
          newBooksList.unshift(newBookByIsbn);
          setBooks(newBooksList);
          setShowPopup(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setTitle('');
    setAuthor('');
    setIsbn('');
    setAddBookForm(!addBookForm);
  }

  return (
    <div>
      <BoxHeader
        quantity={books.length}
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
          change={changeForm}
          showForm={displayForm}
          // eslint-disable-next-line react/jsx-no-bind
          fetchBook={addBook}
        /> : ''}
      <div>
        {showPopup ? (
          <Popup
            titre={titlePopup}
            auteur={authorPopup}
            popup="depot"
            close={() => setShowPopup(false)}
          />
        ) : (
          ''
        )}
        {books.map((book) => (
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
