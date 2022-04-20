import React from 'react';
import '../styles/HomeQuickSearchBar.css';

export default function HomeQuickSearchBar() {
  return (
    <div className="HomeQuickSearchBar">
      <input
        type="text"
        placeholder="Que voulez-vous lire aujourd'hui ?"
        required="required"
      />
    </div>
  );
}
