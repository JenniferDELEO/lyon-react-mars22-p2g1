/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-one-expression-per-line */
import { Link } from 'react-router-dom';
import '../styles/HomeLists.css';
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
    <div className="home-component">
      <div className="sep"></div>
      <h1 className="title"> Les boites </h1>
      <div className="boxList">
        {boxList.map((box) => (
          <Link key={box.id} to={`/BoxDetail/${box.id}`}>
            <div
              key={box.id}
              className="box-card"
              style={{ backgroundColor: selectedBox === box.id ? '' : '' }}
            >
              <p key={box.id}>
                {box.adresse}
                <br />
                {box.quantity} livre(s)
              </p>
            </div>
          </Link>
        ))}
      </div>
      <img
        className="books-shelves"
        src="https://bouquinbec.ca/wp-content/uploads/2020/03/bouquinbec-dessin-etagere-livres-tab-cell.png"
        alt="books"
      />
    </div>
  );
}

export default HomeBoxList;
