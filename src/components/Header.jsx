import { NavLink } from 'react-router-dom';
import React from 'react';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/search">Recherche</NavLink>
            <NavLink to="/form">Formulaire et contact</NavLink>
            <NavLink to="/myprofile">Mon Profile</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
