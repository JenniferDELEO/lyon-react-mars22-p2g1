import React from 'react';
import '../styles/HomeQuickSearchBar.css';

export default function HomeQuickSearchBar() {
  return (
    <div className="HomeQuickSearchBar">
      <form>
        <input
          type="text"
          id="quickSearch"
          name="quickSearch"
          placeholder="Que voulez-vous lire aujourd'hui ?"
          required="required"
        />
      </form>
    </div>
  );
}
