import bookList from '../ressources/livresDB.json';
import { Link } from 'react-router-dom';
import '../styles/HomeLists.css';
import BookBox from '../assets/box_middlefull.png';
import axios from 'axios';
import { useEffect, useState } from 'react';

function HomeBoxList() {
  const [boxList, setBoxList] = useState([]);
  const quantiteParBoite = [];

  for (let i = 0; i < boxList.length; i += 1) {
    quantiteParBoite.push(0);
  }
  for (let i = 0; i < bookList.length; i += 1) {
    const index = parseFloat(bookList[i].boite);
    quantiteParBoite[index] += 1;
  }
  useEffect(() => {
    axios
      .get('http://localhost:4000/boxes')
      .then((result) => result.data)
      .then((result) => {
        setBoxList(result);
        console.log(result);
      });
  }, []);

  return (
    <div className="boxList">
      <h2>Liste des boîtes : </h2>
      <ul>
        {boxList.slice(0, 3).map((box) => (
          <Link to={`/BoxDetail/${box.id}`}>
            <p key={box.id}>
              {' '}
              <img src={BookBox} alt="boite a livre" /> {box.adresse}, {box.CP}
              <br />
              {quantiteParBoite[box.id]} livre(s)
            </p>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default HomeBoxList;
