/* eslint-disable react/jsx-one-expression-per-line */
import boxList from '../ressources/coordsBAL.json';
import bookList from '../ressources/livresDB.json';
import { Link } from 'react-router-dom';
import '../styles/HomeLists.css';
import BookBox from '../assets/box_middlefull.png';

const quantiteParBoite = [];

for (let i = 0; i < boxList.length; i += 1) {
  quantiteParBoite.push(0);
}
for (let i = 0; i < bookList.length; i += 1) {
  const index = parseFloat(bookList[i].boite);
  quantiteParBoite[index] += 1;
}

function HomeBoxList() {
  return (
    <div className="boxList">
      <h2>Liste des boîtes : </h2>
      <ul>
        {boxList.slice(0, 3).map((box) => (
          <Link to={`/BoxDetail/${box.boite}`}>
            <p key={box.boite}>
              {' '}
              <img src={BookBox} alt="boite a livre" /> {box.adresse}, {box.CP}
              <br />
              {quantiteParBoite[box.boite]} livre(s)
            </p>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default HomeBoxList;
