import { NavLink } from 'react-router-dom';
import React from 'react';
import '../styles/NavBar.css';
import HomeLogo from '../assets/home_logo.png';
import SearchLogo from '../assets/search_logo.png';
import UserLogo from '../assets/user_logo.png';
import FormLogo from '../assets/form_logo.png';

const getActiveLinkStyle = ({ isActive }) => ({
  color: isActive ? 'white' : 'black',
});

export default function NavBar() {
  return (
    <nav className="navbar-container">
      <ul className="list-navbar-container">
        <li className="home-navigation">
          <NavLink
            to="/"
            className="link-navigation"
            style={getActiveLinkStyle}
          >
            <img
              src={HomeLogo}
              alt="navigation vers accueil"
              className="image-navigation"
            />
            <p>Accueil</p>
          </NavLink>
        </li>
        <li className="search-navigation">
          <NavLink
            to="/search"
            className="link-navigation"
            style={getActiveLinkStyle}
          >
            <img
              src={SearchLogo}
              alt="navigation vers recherche"
              className="image-navigation"
            />
            <p>Recherche</p>
          </NavLink>
        </li>
        <li className="myprofile-navigation">
          <NavLink
            to="/myprofile"
            className="link-navigation"
            style={getActiveLinkStyle}
          >
            <img
              src={UserLogo}
              alt="navigation vers mon profil"
              className="image-navigation"
            />
            <p>Mon profil</p>
          </NavLink>
        </li>
        <li className="contact-navigation">
          <NavLink
            to="/contact"
            className="link-navigation"
            style={getActiveLinkStyle}
          >
            <img
              src={FormLogo}
              alt="navigation vers contact"
              className="image-navigation"
            />
            <p>Contact</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
