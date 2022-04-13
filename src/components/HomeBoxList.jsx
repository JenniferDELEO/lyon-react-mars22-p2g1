/* eslint-disable react/no-array-index-key */
// import React, { useState } from 'react';
import boxList from '../ressources/coordsBAL.json';
import bookList from '../ressources/livresDB.json';

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
    <>
      <h2>Liste des boîtes :</h2>
      <ul>
        {boxList.map((box, i) => (
          <li key={i}>{box.adresse }  boîte numéro : {box.boite}
            <br /> Quantité de livres : {quantiteParBoite[box.boite]}
          </li>
        ))}
      </ul>

    </>
  );
}

export default HomeBoxList;
