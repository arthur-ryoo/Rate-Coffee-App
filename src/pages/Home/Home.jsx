import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Home.module.css';

const Home = props => {
  return (
    <main>
      <div className={styles.header}>
        <h1>Recently Added Brands</h1>
      </div>
      {props.recentlyAddedBrands.map(({ name, description, _id }) => (
        <div className={styles.div}>
          <Link to={`/details/${_id}`}>
            <section key={_id}>
              <h1>{name}</h1>
              <p>{description}</p>
            </section>
          </Link>
        </div>
      ))}
    </main>
  );
};

export default Home;
