/* eslint-disable react/jsx-one-expression-per-line */
import { Link } from 'react-router-dom';
import '../styles/HomeLists.css';
import BookBox from '../assets/box_middlefull.png';
import axios from 'axios';
import { useEffect, useState } from 'react';

// On déclare des states pour nos tables de livres et de boites
function HomeBoxList({ CP }) {
  const [boxList, setBoxList] = useState([]);
  const [selectedBox, setSelectedBox] = useState('');
  useEffect(() => {
    axios
      .get(`http://localhost:4000/boxes/postalcode/${CP.cp}`)
      .then((result) => result.data)
      .then((result) => {
        console.log(CP);
        setBoxList(result);
        setSelectedBox(CP.id);
      });
  }, [CP.cp]);

  return (
    <div className="boxList">
      <h2>Liste des boîtes : </h2>

      {boxList.map((box) => (
        <Link to={`/BoxDetail/${box.id}`}>
          <p
            style={{
              backgroundColor: selectedBox === box.id - 1 ? '#1b9eb2' : '',
            }}
            key={box.id}
          >
            <img src={BookBox} alt="boite a livre" />
            {box.adresse}, {box.CP}
            <br />
            {box.quantity} livre(s)
          </p>
        </Link>
      ))}
    </div>
  );
}

export default HomeBoxList;
