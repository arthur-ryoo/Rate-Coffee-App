import React, { useState } from 'react';
import EditReviewForm from '../EditReviewForm/EditReviewForm';

import styles from './Review.module.css';

import Modal from 'react-modal';

Modal.setAppElement('#root');

const Review = props => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <main>
      <div className={styles.header}>
        <h1>Ratings</h1>
      </div>
      <div className={styles.div}>
        {props.reviews ? (
          props.reviews.map(({ taste, price, comment, addedBy, _id }) => (
            <section className={styles.section} key={_id}>
              <h1>{addedBy.name}</h1>
              <p>Taste - {taste}</p>
              <p>Price - {price}</p>
              <small>{comment}</small>
              <div className={styles.buttonContainer}>
                <button
                  className={styles.button}
                  onClick={() => setModalIsOpen(true)}
                >
                  Edit
                </button>
                <Modal
                  className={styles.modal}
                  isOpen={modalIsOpen}
                  onRequestClose={() => setModalIsOpen(false)}
                >
                  <EditReviewForm {...props} />
                  <div>
                    <button
                      className={styles.modalCloseButton}
                      onClick={() => setModalIsOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </Modal>

                <button
                  className={styles.button}
                  onClick={() => props.handleDeleteReviews(_id)}
                  type="submit"
                >
                  Delete
                </button>
              </div>
            </section>
          ))
        ) : (
          <h1>...loading</h1>
        )}
      </div>
    </main>
  );
};

export default Review;
