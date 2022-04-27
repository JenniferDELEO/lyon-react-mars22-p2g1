/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

function PopUpMap({ name, adress, numberBooks }) {
  return (
    <div>
      <h1>{name}</h1>
      <h4>{adress}</h4>
      <h4>Il y a {numberBooks} livre(s) dans cette boite à livre</h4>
    </div>
  );
}

export default PopUpMap;
