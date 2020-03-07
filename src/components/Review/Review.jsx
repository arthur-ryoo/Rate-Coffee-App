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
        {props.reviews.map(({ _id }) => (
          <section key={_id}></section>
        ))}
        <h1>
          {
            props.reviews.filter(r => r.brandId === props.match.params.id)[0]
              .addedBy.name
          }
        </h1>
        <p>
          Taste -
          {
            props.reviews.filter(r => r.brandId === props.match.params.id)[0]
              .taste
          }
        </p>
        <p>
          Price -
          {
            props.reviews.filter(r => r.brandId === props.match.params.id)[0]
              .price
          }
        </p>
        <small>
          {
            props.reviews.filter(r => r.brandId === props.match.params.id)[0]
              .comment
          }
        </small>
      </div>
    </main>
  );
};

export default Review;
