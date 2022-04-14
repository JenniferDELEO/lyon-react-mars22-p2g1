import '../box_detail_stuffs/box_detail.css';
import Book from '../box_detail_stuffs/components/Book';
import booksDataBase from '../box_detail_stuffs/books_database';
import { useState } from 'react';
import AddBookForm from '../box_detail_stuffs/components/AddBookForm';

export default function BoxDetail() {
  const [booksList, setBook] = useState(booksDataBase);
  const [addBookForm, setAddBookForm] = useState(false);

  const displayForm = () => setAddBookForm(!addBookForm);
  return (
    <div>
      <div className="text-center flex flex-col justify-around text-white bg-blue-500 rounded-b-xl h-32">
        <h1 className="text-3xl underline before:content-['📚'] after:content-['📚']"> Boite à livres Lyon 7 </h1>
        <h3>14 rue saint Alexandre</h3>
        <p className="text-xs">{booksList.length} livre(s)</p>
      </div>
      <div className="flex justify-center">
        <button type="button" onClick={displayForm} className="bg-blue-500 hover:bg-blue-700 text-1xl text-white font-bold py-2 px-6 rounded m-5 border-black border">deposer un livre</button>
      </div>
      {addBookForm ? <AddBookForm /> : ''}
      <div>
        {booksList.map((book) => (
          <Book
            picture={book.picture}
            titre={book.titre}
            auteur={book.auteur}
            note={book.note}
            etat={book.etat}
            borrowState={book.toBorrow}
            deleteState={book.toDelete}
            liftUp={setBook}
            booksList={booksList}
          />
        ))}
      </div>
    </div>
  );
}
