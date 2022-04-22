import boxList from '../ressources/coordsBAL.json';
import bookList from '../ressources/livresDB.json';
import { Link } from 'react-router-dom';
import '../styles/HomeLists.css';

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
        {boxList.slice(0, 5).map((box) => (
          <p>
            {' '}
            <Link to={`/BoxDetail/${box.boite + 1}`}> {box.adresse}</Link> boîte
            numéro : {box.boite + 1}
            <br />
            {Math.floor(Math.random() * 12)} livres
          </p>
        ))}
      </ul>
    </div>
  );
}

export default HomeBoxList;
