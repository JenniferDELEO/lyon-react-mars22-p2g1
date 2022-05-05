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
    <>
      <div className="sep">
        <h1 className="title">Les boites</h1>
        <p>Selectionner une boite pour voir les livres!</p>
      </div>
      <div className="boxList">
        {boxList.map((box) => (
          <Link to={`/BoxDetail/${box.id}`}>
            <div
              key={box.id}
              className="box-card"
              style={{ backgroundColor: selectedBox === box.id ? '' : '' }}
            >
              <p>
                {box.adresse}
                <br />
                {box.quantity} livre(s)
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default HomeBoxList;
