import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

import BrandForm from '../../components/BrandForm/BrandForm';
import styles from './CoffeeBrands.module.css';

Modal.setAppElement('#root');

const Brands = props => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
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
      <button className={styles.button} onClick={() => setModalIsOpen(true)}>
        Add Brand
      </button>
      <Modal
        className={styles.modal}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <BrandForm
          {...props}
          handleGetBrands={props.handleGetBrands}
          brands={props.brands}
        />
        <div>
          <button
            className={styles.modalCloseButton}
            onClick={() => setModalIsOpen(false)}
          >
            Close
          </button>
        </div>
      </Modal>
    </main>
  );
};

export default Brands;
