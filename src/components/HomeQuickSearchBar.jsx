import { React, useState } from 'react';
import '../styles/HomeQuickSearchBar.css';

export default function HomeQuickSearchBar() {
  const [userQuickSearch, setuserQuickSearch] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Lancement de la recherche : ${userQuickSearch}`);
  };

  return (
    <div className="HomeQuickSearchBar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="quickSearch"
          placeholder="Une envie de lecture ?"
          required="required"
          value={userQuickSearch}
          onChange={(e) => setuserQuickSearch(e.target.value)}
        />
        <button type="submit">
          <div className="IconBookQuickSearchBar" />
        </button>
      </form>
    </div>
  );
}
