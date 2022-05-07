/* eslint-disable react/jsx-one-expression-per-line */
import { Link } from 'react-router-dom';
import '../styles/HomeLists.css';
import BookBox from '../assets/box_middlefull.png';
import axios from 'axios';
import { useEffect, useState } from 'react';

function HomeBoxList({ CP }) {
  const [boxList, setBoxList] = useState([]);
  const [selectedBox, setSelectedBox] = useState('');
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}boxes/postalcode/${CP.cp}`)
      .then((result) => result.data)
      .then((result) => {
        setBoxList(result);
        setSelectedBox(CP.id);
      });
  }, [CP.cp]);

  return (
    <div className="boxList">
      <h2>Liste des boîtes : </h2>

      {boxList.map((box) => (
        <Link to={`/BoxDetail/${box.id}`} key={box.id}>
          <p
            className={selectedBox === box.id ? 'animate-pulse' : ''}
            style={{
              backgroundColor: selectedBox === box.id ? '#1b9eb2' : '',
            }}
          >
            <img src={BookBox} alt="boite a livre" />
            {box.adresse},{box.CP}
            <br />
            {box.quantity}
            livre(s)
          </p>
        </Link>
      ))}
    </div>
  );
}

export default HomeBoxList;
