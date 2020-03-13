import React, { useState } from 'react';
import ReviewForm from '../../components/ReviewForm/ReviewForm';
import Review from '../../components/Review/Review';
import Modal from 'react-modal';

import styles from './BrandDetail.module.css';

Modal.setAppElement('#root');

const Detail = props => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <main>
      <div className={styles.header}>
        <h1>Brand Detail</h1>
      </div>
      {props.brands.length > 0 ? (
        <div className={styles.div}>
          <h1>
            {props.brands.filter(b => b._id === props.match.params.id)[0].name}
          </h1>
          <p>
            {
              props.brands.filter(b => b._id === props.match.params.id)[0]
                .description
            }
          </p>
        </div>
      ) : (
        <h1 className={styles.loadingMessage}>...Loading</h1>
      )}
      <Review {...props} />

      <button className={styles.button} onClick={() => setModalIsOpen(true)}>
        Add Brand
      </button>
      <Modal
        className={styles.modal}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <ReviewForm
          {...props}
          handleGetReviews={props.handleGetReviews}
          reviews={props.reviews}
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

export default Detail;
