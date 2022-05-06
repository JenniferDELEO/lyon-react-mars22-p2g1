import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import '../styles/NavBar.css';
import HomeLogo from '../assets/home_logo.svg';
import SearchLogo from '../assets/search_logo.svg';
import Favorite from '../assets/favorite_heart_white.svg';
import FormLogo from '../assets/form_logo.svg';

const getActiveLinkStyle = ({ isActive }) => ({
  color: isActive ? 'orange' : 'white',
});

export default function NavBar() {
  return (
    <nav className="navbar-container">
      <Link to="/">
        <h1 className="page-title">La boite à livre</h1>
      </Link>
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
            <p className="text-nav">Accueil</p>
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
            <p className="text-nav">Recherche</p>
          </NavLink>
        </li>
        <li className="myfavorites-navigation">
          <NavLink
            to="/favorite-books"
            className="link-navigation"
            style={getActiveLinkStyle}
          >
            <img
              src={Favorite}
              alt="navigation vers mes favoris"
              className="image-navigation"
            />
            <p className="text-nav">Mes favoris</p>
          </NavLink>
        </li>
        <li className="contact-navigation">
          <NavLink
            to="/form"
            className="link-navigation"
            style={getActiveLinkStyle}
          >
            <img
              src={FormLogo}
              alt="navigation vers contact"
              className="image-navigation"
            />
            <p className="text-nav">Contact</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
