/* eslint-disable react/no-array-index-key */
// import React, { useState } from 'react';
import boxData from '../ressources/coordsBAL.json';
import bookData from '../ressources/livresDB.json';

const quantiteParBoite = [];
for (let i = 0; i < boxData.length; i += 1) {
  quantiteParBoite.push(0);
}

for (let i = 0; i < bookData.length; i += 1) {
  const index = parseFloat(bookData[i].boite);
  quantiteParBoite[index] += 1;
}
function HomeBoxList() {
  return (
    <>
      <h2>Liste des boîtes :</h2>
      <ul>
        {boxData.map((box, i) => (
          <li key={i}>{box.adresse }  boîte numéro : {box.num}
            <br />Quantité de livres : {quantiteParBoite[box.num]}
          </li>
        ))}
      </ul>

    </>
  );
}

export default HomeBoxList;
