import { useState } from 'react';
import RatingStar from './ratingStar';
import Popup from './Popup';

export default function Book({
  picture,
  titre,
  auteur,
  etat,
  note,
  borrowState,
  deleteState,
  booksList,
  liftUp,
}) {
  const conditionColor = [null, '🔴', '🟠', '🟢'];
  const [isDelete, setIsDelete] = useState(deleteState);
  const [isBorrow, setIsBorrow] = useState(borrowState);
  const [popup, setPopupContent] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [authorPopup, setAuthorPopup] = useState('');
  const [titlePopup, setTitlePopup] = useState('');

  let actionBg = '';
  if (isBorrow) { actionBg = { color: 'flex items-center bg-green-400 h-40', size: 'flex bg-white w-5/6 h-38 transition-all duration-500 rounded-lg', btn: 'animate-bounce bg-green-400 hover:bg-green-500 border-black text-xxs border text-black font-bold w-6 h-6 rounded self-center' }; }
  if (isDelete) { actionBg = { color: 'flex items-center bg-red-400 h-40', size: 'flex bg-white w-5/6 h-38 transition-all duration-500 rounded-lg', btn: 'animate-bounce bg-red-400 hover:bg-red-500 border-black border text-xxs text-black font-bold w-6 h-6 rounded self-center' }; }
  if (!isBorrow && !isDelete) { actionBg = { color: 'flex items-center bg-slate-200 h-40', size: 'flex bg-white h-38 w-full transition-all duration-500' }; }

  function abortAction() {
    setIsBorrow(false);
    setIsDelete(false);
  }

  function borrowAction() {
    setPopupContent('borrow');
    setAuthorPopup(auteur);
    setTitlePopup(titre);
    setIsBorrow(true);
    console.log(booksList);
  }
  function deleteAction() {
    setAuthorPopup(auteur);
    setTitlePopup(titre);
    setPopupContent('delete');
    setIsDelete(true);
  }

  function setNewBooksList() {
    setShowPopup(true);
    const newList = booksList.slice();
    newList.find((book) => book.titre === titre).outOfStock = true;
    liftUp(newList);
    setIsDelete(false);
    setIsBorrow(false);
  }

  return (
    <div className={actionBg.color}>
      <div className={actionBg.size}>
        <img
          className="ml-1"
          src={
            picture ||
            'http://books.google.com/books/content?id=a5kNrgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api'
          }
          alt="book-cover"
        />
        <div className="flex w-full justify-between z-0">
          <div className="ml-5 flex flex-col justify-around leading-10">
            <p className="font-black text-sm underline">{titre.slice(0, 40)}</p>
            <p className="text-xs">{auteur.slice(0, 23)}</p>
            <div className="flex flex-row text-sm">
              <p className="text-xs">etat du livre</p>
              <p className="ml-3">{conditionColor[etat]}</p>
            </div>
            <em className="text-xs underline text-slate-500 cursor-pointer">detail</em>
          </div>
          {!isBorrow && !isDelete ? (
            <div className="mr-5 flex flex-col items-center justify-center">
              <RatingStar rate={parseFloat(note)} />
              <img
                className="w-5 h-5 self-center mb-5 cursor-pointer"
                src="https://cdn-icons-png.flaticon.com/512/3143/3143542.png"
                alt="delete-img"
                onClick={deleteAction}
              />
              <button
                className="bg-blue-500 border-black border text-xs hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                type="button"
                onClick={borrowAction}
              >
                Emprunter
              </button>
            </div>) : (
              <div className="flex flex-col justify-center mr-5">
                <button type="button" onClick={setNewBooksList} className={actionBg.btn}>OK</button>
                <p className="text-center text-xxs underline mt-2 cursor-pointer" onClick={abortAction}>annuler</p>
              </div>)}
        </div>
        {showPopup ? (
          <Popup
            titre={titlePopup}
            auteur={authorPopup}
            popup={popup}
            close={() => setShowPopup(false)}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
