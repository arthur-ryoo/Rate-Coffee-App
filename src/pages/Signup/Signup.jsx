import React from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import styles from './Signup.module.css';

const Signup = props => {
  return (
    <>
      <h1 className={styles.header}>Sign Up</h1>
      <SignupForm />
    </>
  );
};

export default Signup;
