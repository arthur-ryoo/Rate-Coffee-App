import React from 'react';

import styles from './Review.module.css';

const Review = props => {
  console.log(props);
  return (
    <main>
      <div className={styles.header}>
        <h1>Ratings</h1>
      </div>
      <div className={styles.div}>
        {props.reviews.map(({ taste, price, comment, addedBy, brandId }) => (
          <section key={brandId}>
            <h1>{addedBy.name}</h1>
            <p>Taste - {taste}</p>
            <p>Price - {price}</p>
            <small>{comment}</small>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Review;
