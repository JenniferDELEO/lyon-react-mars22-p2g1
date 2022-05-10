import { useState } from 'react';
import RatingStar from './ratingStar';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import axios from 'axios';
import UseMediaQuery from '../hooks/useMediaQuery';

export default function Book({
  picture,
  titre,
  auteur,
  etat,
  note,
  borrowState,
  deleteState,
  id,
  booksOut,
  boxId,
  setId,
}) {
  const conditionColor = [null, '🔴', '🟠', '🟢'];
  const [isDelete, setIsDelete] = useState(deleteState);
  const [isBorrow, setIsBorrow] = useState(borrowState);
  const [userAction, setUserAction] = useState('');
  const isDesktop = UseMediaQuery('(min-width: 1020px)');

  let actionBg = '';
  if (isBorrow) {
    actionBg = {
      color: 'flex items-center bg-green-400 h-40',
      size: 'flex bg-white w-5/6 h-38 transition-all duration-500 rounded-r-lg',
      btn: 'bg-green-400 hover:bg-green-500 border-black text-xxs border text-black font-bold w-6 h-6 rounded self-center',
    };
  }
  if (isDelete) {
    actionBg = {
      color: 'flex items-center bg-red-400 h-40',
      size: 'flex bg-white w-5/6 h-38 transition-all duration-500 rounded-r-lg',
      btn: 'bg-red-400 hover:bg-red-500 border-black border text-xxs text-black font-bold w-6 h-6 rounded self-center',
    };
  }
  if (!isBorrow && !isDelete) {
    actionBg = {
      color: 'flex items-center bg-slate-200 h-40',
      size: 'flex bg-white h-38 w-full transition-all duration-500',
    };
  }

  function abortAction() {
    setIsBorrow(false);
    setIsDelete(false);
  }

  function borrowAction() {
    setUserAction(['emprunté', 'Bonne lecture !']);
    setIsBorrow(true);
  }

  function deleteAction() {
    setUserAction(['supprimé', 'Merci de tenir les stocks à jour!']);
    setIsDelete(true);
  }

  function setNewBooksList() {
    axios
      .put(`${process.env.REACT_APP_API_URL}books/${id}`)
      .then(() => {
        booksOut(true);
        axios
          .patch(`${process.env.REACT_APP_API_URL}boxes/${boxId}?action=delete`)
          .then(() => {})
          .catch(() => {});
      })
      .catch((error) => {
        console.log(error);
      });
    booksOut(false);
    setIsDelete(false);
    setIsBorrow(false);
    toast(
      `Vous avez ${userAction[0]}: ${titre} de ${auteur}  ${userAction[1]}`,
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
    setUserAction('');
  }
  return (
    <div className={actionBg.color}>
      <div className={actionBg.size}>
        <img
          onClick={setId}
          style={{ cursor: 'pointer' }}
          className="book-cover"
          src={
            picture === null || picture === 'None'
              ? 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/vintage-book-cover-template-design-46e27bb5bb18d1354f5acc1d96454f60_screen.jpg?ts=1637015775'
              : picture
          }
          alt="book-cover"
        />
        <div className="flex w-full justify-between z-67">
          <Link
            to={`/bookdetail/${id}`}
            style={{ cursor: isDesktop ? 'initial' : 'pointer' }}
          >
            <div className="ml-5 flex flex-col justify-around leading-10">
              <p className="font-black text-sm underline mt-6">
                {titre.slice(0, 40)}
              </p>
              <p className="text-xs mt-3">{auteur.slice(0, 23)}</p>
              <div className="flex flex-row text-sm">
                <p className="text-xs mt-3">etat du livre</p>
                <p className="ml-3 mt-3">{conditionColor[etat]}</p>
              </div>
            </div>
          </Link>
          {!isBorrow && !isDelete ? (
            <div className="mr-5 flex flex-col items-center justify-center">
              <RatingStar rate={parseFloat(note)} id={id} id2={titre} />
              <img
                className="w-5 h-5 self-center mb-5 cursor-pointer"
                src="https://cdn-icons-png.flaticon.com/512/3143/3143542.png"
                alt="delete-img"
                onClick={deleteAction}
              />
              <button
                className="color-bg border-black border text-xs hover:bg-blue-700 text-white transition-all duration-1000 font-bold py-1 px-2 rounded"
                type="button"
                onClick={borrowAction}
              >
                Emprunt
              </button>
            </div>
          ) : (
            <div className="flex flex-col justify-center mr-5">
              <button
                type="button"
                onClick={setNewBooksList}
                className={actionBg.btn}
              >
                OK
              </button>
              <p
                className="text-center text-xxs underline mt-2 cursor-pointer"
                onClick={abortAction}
              >
                annuler
              </p>
            </div>
          )}
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
