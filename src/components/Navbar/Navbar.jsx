import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = props => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <h1>Rate Coffee</h1>
      </Link>
      <ul>
        <li>
          <Link to="/coffeebrands">Coffee Brands</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
