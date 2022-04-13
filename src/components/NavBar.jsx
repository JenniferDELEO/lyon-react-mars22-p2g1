import { Link } from 'react-router-dom';
import React from 'react';
import './NavBar.css';
import HomeLogo from '../assets/home_logo.png';
import SearchLogo from '../assets/search_logo.png';
import UserLogo from '../assets/user_logo.png';
import FormLogo from '../assets/form_logo.png';

export default function NavBar() {
  return (
    <div>
      <nav>
        <ul className="flex justify-between absolute bottom-0">
          <li className="flex-auto w-12">
            <Link to="/">
              <img src={HomeLogo} alt="navigation vers accueil" />
            </Link>
          </li>
          <li className="flex-auto w-12">
            <Link to="/search">
              <img src={SearchLogo} alt="navigation vers recherche" />
            </Link>
          </li>
          <li className="flex-auto w-12">
            <Link to="/myprofile">
              <img src={UserLogo} alt="navigation vers mon profil" />
            </Link>
          </li>
          <li className="flex-auto w-12">
            <Link to="/contact">
              <img src={FormLogo} alt="navigation vers contact" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
