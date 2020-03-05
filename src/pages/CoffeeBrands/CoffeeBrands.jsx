import React, { useState } from 'react';
import BrandForm from '../../components/BrandForm/BrandForm';

const Brands = props => {
  const [formVisible, setVisibility] = useState(false);
  return (
    <main>
      <h1>Coffee Brands</h1>
      <button onClick={() => setVisibility(!formVisible)}>
        {formVisible ? 'Hide Form' : 'Show Form'}
      </button>
      {formVisible && <BrandForm {...props} />}
      {props.brands.map(({ name, _id, description }) => (
        <section key={_id}>
          <h1>{name}</h1>
          <p>Description: {description}</p>
        </section>
      ))}
    </main>
  );
};

export default Brands;
