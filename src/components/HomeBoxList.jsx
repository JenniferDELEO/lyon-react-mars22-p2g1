import { Link } from 'react-router-dom';
import '../styles/HomeLists.css';
import BookBox from '../assets/box_middlefull.png';
import axios from 'axios';
import { useEffect, useState } from 'react';

// On déclare des states pour nos tables de livres et de boites
function HomeBoxList() {
  const [boxList, setBoxList] = useState([]);
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/boxes')
      .then((result) => result.data)
      .then((result) => {
        setBoxList(result);
      });
    axios
      .get('http://localhost:4000/books')
      .then((result) => result.data)
      .then((result) => {
        setBookList(result);
      });
  }, []);

  const quantiteParBoite = [];
  // On déclare un tableau vide avec une entrée initiée a 0 pour chaque boite existante
  for (let i = 0; i < boxList.length; i += 1) {
    quantiteParBoite.push(0);
  }
  // On loop sur chaque livre présent en DB, on ajoute 1 a chaque index de boite correspondante
  for (let i = 0; i < bookList.length; i += 1) {
    const index = parseFloat(bookList[i].box_number);
    quantiteParBoite[index] += 1;
  }

  return (
    <div className="boxList">
      <h2>Liste des boîtes : </h2>

      {boxList.slice(0, 3).map((box) => (
        <Link to={`/BoxDetail/${box.id}`}>
          <p key={box.id}>
            <img src={BookBox} alt="boite a livre" />
            {box.adresse}
            ,
            {box.CP}
            <br />
            {quantiteParBoite[box.id]}
            {' '}
            livre(s)
          </p>
        </Link>
      ))}
    </div>
  );
}

export default HomeBoxList;
