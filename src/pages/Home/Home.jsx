import React from 'react';

const Home = props => {
  return (
    <main>
      <h1>Recently Added Brands</h1>
      {props.recentlyAddedBrands.map(({ name, description, _id }) => (
        <section key={_id}>
          <h1>{name}</h1>
          <p>{description}</p>
        </section>
      ))}
    </main>
  );
};

export default Home;
