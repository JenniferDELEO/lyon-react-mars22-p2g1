import { React, useState } from 'react';
import '../styles/HomeQuickSearchBar.css';

export default function HomeQuickSearchBar() {
  const [userQuickSearch, setuserQuickSearch] = useState('');
  const handleQuickSearchChange = (e) => setuserQuickSearch(e.target.value);
  const handleSubmit = () => {
    alert('Lancement de la recherche rapide');
  };

  return (
    <div className="HomeQuickSearchBar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="quickSearch"
          name="quickSearch"
          placeholder="Que voulez-vous lire aujourd'hui ?"
          required="required"
          value={userQuickSearch}
          onChange={handleQuickSearchChange}
        />
        <div type="submit" className="buttForm" />
      </form>
    </div>
  );
}
