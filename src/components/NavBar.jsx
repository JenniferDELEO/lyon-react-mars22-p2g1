import { NavLink } from 'react-router-dom';
import React from 'react';
import './NavBar.css';

const getActiveLinkStyle = ({ isActive }) => {
  if (isActive) return { color: 'orange' };
  return { color: 'black' };
};

export default function NavBar() {
  return (
    <nav>
      <ul className="flex">
        <li className="flex-auto w-32">
          <NavLink to="/" style={getActiveLinkStyle}>
            Accueil
          </NavLink>
        </li>
        <li className="flex-auto w-32">
          <NavLink to="/search" style={getActiveLinkStyle}>
            Recherche
          </NavLink>
        </li>
        <li className="flex-auto w-32">
          <NavLink to="/form" style={getActiveLinkStyle}>
            Formulaire et contact
          </NavLink>
        </li>
        <li className="flex-auto w-32">
          <NavLink to="/myprofile" style={getActiveLinkStyle}>
            Mon Profil
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
