import { NavLink } from 'react-router-dom';
import React from 'react';
/*
const getActiveLinkStyle = ({ isActive }) => {
  if (isActive) return { color: 'orange' };
};
*/

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
