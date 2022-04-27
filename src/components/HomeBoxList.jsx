import { Link } from 'react-router-dom';
import '../styles/HomeLists.css';
import BookBox from '../assets/box_middlefull.png';
import axios from 'axios';
import { useEffect, useState } from 'react';

// On déclare des states pour nos tables de livres et de boites
function HomeBoxList({ CP }) {
  const [boxList, setBoxList] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/boxes')
      .then((result) => result.data)
      .then((result) => {
        setBoxList(result);
        console.log('cp -> ', CP);
      });
  }, [CP]);
  console.log('cp -> ', CP);
  return (
    <div className="boxList">
      <h2>Liste des boîtes : </h2>

      {boxList.map((box) => (
        <Link to={`/BoxDetail/${box.id}`}>
          <p key={box.id}>
            <img src={BookBox} alt="boite a livre" />
            {box.adresse}
            ,
            {box.CP}
            <br />
            {box.quantity}
            {' '}
            livre(s)
          </p>
        </Link>
      ))}
    </div>
  );
}

export default HomeBoxList;
