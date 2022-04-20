import book from '../ressources/livresDB.json';

export default function BookDetail() {
  return (
    <div className="bookdetail">
      {book && (
        <div>
          <div className="fondtitre">
            <h1>{book.title}</h1>
          </div>
          <div className="containerTop">
            <img src={book.imageLinks.thumbnail} alt={book.title} />
            <div className="containerTopRight">
              <h3>Avis des lecteurs :</h3>
              <p>{book.pageCount} pages</p>
              <p>Année de publication : {book.publishedDate.slice(0, 4)}</p>
              <p>ISBN13: {book.industryIdentifiers[1].identifier}</p>
            </div>
          </div>
          <h2>Auteur : {book.authors[0]}</h2>
          <div className="resume">
            <p>
              <strong>Résumé :</strong> {book.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
