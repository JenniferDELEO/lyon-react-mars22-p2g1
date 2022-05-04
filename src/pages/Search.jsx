import axios from 'axios';
import React, { useState } from 'react';

export default function Search() {
  const [titleEntered, setTitleEntered] = useState('');

  const handleFilter = (event) => {
    setTitleEntered(event.target.value);
  };

  function getTitle() {
    axios
      .get(`${process.env.REACT_APP_API_URL}books/search?title=${titleEntered}`)
      .then((result) => result.data[0])
      .then((result) => {
        console.log(result);
      });
  }
  return (
    <div>
      <input
        type="text"
        placeholder={'Lancez une recherche ici'}
        value={titleEntered}
        onChange={handleFilter}
      />
      <button type="button" onClick={getTitle}>
        Search by Title
      </button>
    </div>
  );
}
