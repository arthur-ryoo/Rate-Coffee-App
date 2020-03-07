import React, { useState } from 'react';
import ReviewForm from '../../components/ReviewForm/ReviewForm';
import Review from '../../components/Review/Review';

import styles from './BrandDetail.module.css';

const Detail = props => {
  const [formVisible, setVisibility] = useState(false);
  return (
    <main>
      <div className={styles.header}>
        <h1>Brand Detail</h1>
      </div>
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
      <Review {...props} />

      <button
        className={styles.button}
        onClick={() => setVisibility(!formVisible)}
      >
        {formVisible ? 'Hide Form' : 'Rate Brand'}
      </button>
      {formVisible && <ReviewForm {...props} />}
    </main>
  );
};

export default Detail;
