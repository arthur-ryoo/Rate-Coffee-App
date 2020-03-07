import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import BrandForm from '../../components/BrandForm/BrandForm';
import styles from './CoffeeBrands.module.css';

const Brands = props => {
  const [formVisible, setVisibility] = useState(false);
  return (
    <main>
      <div className={styles.header}>
        <h1>Coffee Brands</h1>
      </div>
      {props.brands.map(({ name, _id, description }) => (
        <div className={styles.div}>
          <Link to={`/details/${_id}`}>
            <section key={_id}>
              <h1>{name}</h1>

              <p>{description}</p>
            </section>
          </Link>
        </div>
      ))}
      <button
        className={styles.button}
        onClick={() => setVisibility(!formVisible)}
      >
        {formVisible ? 'Hide Form' : 'Add Brand'}
      </button>
      {formVisible && <BrandForm {...props} />}
    </main>
  );
};

export default Brands;
