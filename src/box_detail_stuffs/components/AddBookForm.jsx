import { useState } from 'react';

export default function AddBookForm() {
  const [NotFound, setBookNotFound] = useState(false);
  const changeForm = () => setBookNotFound(!NotFound);
  return (
    <div className="text-center flex justify-center h-96 transition-opacity">
      <form className="mb-5 flex flex-col items-center place-content-around transition-opacity">
        { NotFound ? (
          <>
            <p>Auteur</p>
            <input className="border w-2/3" type="text" placeholder="auteur du livre" />
            <p>Titre</p>
            <input className="border w-2/3" type="text" placeholder="titre du livre" />
          </>
        ) :
          (
            <>
              <p>ISBN</p>
              <input className="border w-2/3" type="text" placeholder="entrer un isbn" />
            </>
          )}
        <p>etat</p>
        <select className="w-2/5">
          <option value="2">bon</option>
          <option value="1">mauvais</option>
          <option value="3">excellent</option>
        </select>
        <div className="rating rating2">
          <a href="#5">★</a>
          <a href="#4">★</a>
          <a href="#3">★</a>
          <a href="#2">★</a>
          <a href="#1">★</a>
        </div>
        <button type="button" className="bg-blue-500 hover:bg-blue-700 border-black border text-white font-bold py-1 px-3 rounded">ajouter</button>
        <p onClick={changeForm} className="underline text-xs text-slate-500 cursor-pointer">saisie manuelle</p>
      </form>
    </div>
  );
}
