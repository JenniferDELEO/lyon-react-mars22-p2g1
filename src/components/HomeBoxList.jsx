import { Link } from 'react-router-dom';
import '../styles/HomeLists.css';
import BookBox from '../assets/box_middlefull.png';
import axios from 'axios';
import { useEffect, useState } from 'react';

function HomeBoxList() {
  const [boxList, setBoxList] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}boxes`)
      .then((result) => result.data)
      .then((result) => {
        setBoxList(result);
        console.log(result);
      });
  }, []);

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
