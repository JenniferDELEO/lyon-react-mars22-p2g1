export default function AddBookForm({
  notFound,
  changeForm,
  showForm,
  title,
  author,
  isbn,
  titleValue,
  isbnValue,
  authorValue,
  fetchBook,
  rate,
  condition,
  status,
}) {
  const getRateFive = () => rate(5);
  const getRateFour = () => rate(4);
  const getRateThree = () => rate(3);
  const getRateTwo = () => rate(2);
  const getRateOne = () => rate(1);

  return (
    <div className="transition-opacity popup-bg z-50">
      <form className="flex text-xs flex-col place-content-between popup">
        <p
          className="quit-btn cursor-pointer self-end mr-2 mt-1"
          onClick={showForm}
        >
          X
        </p>
        {!status && notFound ? (
          <>
            <p className="text-red-500 animate-pulse underline text-xxs">
              INTROUVABLE
            </p>
            <p className="text-red-500 animate-pulse text-xxs">
              ↓ Merci de rentrer le livre a la main ↓
            </p>
          </>
        ) : (
          ''
        )}
        {notFound ? (
          <>
            <p className="underline">Auteur</p>
            <input
              className="border w-2/3"
              value={authorValue}
              onChange={author}
              type="text"
              placeholder="auteur du livre"
            />
            <p className="underline">Titre</p>
            <input
              className="border w-2/3"
              value={titleValue}
              onChange={title}
              type="text"
              placeholder="titre du livre"
            />
          </>
        ) : (
          <>
            <p className="underline">ISBN</p>
            <input
              className="border w-2/3"
              value={isbnValue}
              onChange={isbn}
              type="text"
              placeholder="9782221123300"
            />
          </>
        )}
        <p className="underline">etat</p>
        <select onChange={condition} className="w-2/5">
          <option value="2">bon</option>
          <option value="1">mauvais</option>
          <option value="3">excellent</option>
        </select>
        <p className="underline">note</p>
        <div className="rating rating2 m-2">
          <a href="#5" onClick={getRateFive}>
            ★
          </a>
          <a href="#4" onClick={getRateFour}>
            ★
          </a>
          <a href="#3" onClick={getRateThree}>
            ★
          </a>
          <a href="#2" onClick={getRateTwo}>
            ★
          </a>
          <a href="#1" onClick={getRateOne}>
            ★
          </a>
        </div>
        <button
          type="button"
          onClick={fetchBook}
          className="color-bg hover:bg-blue-700 border-black border text-white font-bold py-1 px-3 rounded"
        >
          ajouter
        </button>
        <p
          onClick={changeForm}
          className="underline text-xxs text-slate-500 cursor-pointer mb-5"
        >
          {notFound ? 'requete ISBN' : 'saisie manuelle'}
        </p>
      </form>
    </div>
  );
}
