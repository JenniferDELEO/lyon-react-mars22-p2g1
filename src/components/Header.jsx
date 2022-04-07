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
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
