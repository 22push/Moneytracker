// Navbar.jsx

import React from 'react';
import css from './navbar.module.css';
// import img from './../../assets/logo_3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {Link }  from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <nav className={css.navbar}>
        <div className={css.left}>
          <h1>Money Tracker</h1>
        </div>
        <div className={css.right}>
          {/* Replace the checkbox input with the Font Awesome icon */}
          <div className={css.checkBtn}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <ul className={css.list}>
            <li><Link to = '/'>Home</Link></li>
            <li><a>Services</a></li>
            <li><Link to = '/login' className={css.link}>Login</Link></li>
            <li><Link to='/signup' className={css.link}>Signup</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
