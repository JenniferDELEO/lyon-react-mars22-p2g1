/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import '../styles/PopUpMap.css';
import BookBox from '../assets/box_middlefull.png';

function PopUpMap({ name, adress, numberBooks }) {
  return (
    <div className="popupBoxContainer">
      <img className="boxImage" src={BookBox} alt="#" />
      <p className="boxName">{name}</p>
      <p className="boxAdress">{adress}</p>
      <p>Il y a {numberBooks} livre(s) dans cette boite à livre</p>
    </div>
  );
}

export default PopUpMap;
