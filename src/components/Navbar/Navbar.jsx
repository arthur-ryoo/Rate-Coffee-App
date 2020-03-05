import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

import userService from '../../utils/userService';

const Navbar = props => {
  const conditionalUI = userService.getUser() ? (
    <>
      <li>
        <Link to="/brands">Coffee Brands</Link>
      </li>
      <li>
        <Link to="" onClick={props.handleLogout}>
          Logout
        </Link>
      </li>
    </>
  ) : (
    <>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
    </>
  );

  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <h1>Rate Coffee</h1>
      </Link>
      <ul>{conditionalUI}</ul>
    </nav>
  );
};

export default Navbar;
