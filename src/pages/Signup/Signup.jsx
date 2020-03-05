import React from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import styles from './Signup.module.css';

const Signup = props => {
  return (
    <main>
      <h1 className={styles.header}>Sign Up</h1>
      <SignupForm {...props} handleSignupOrLogin={props.handleSignupOrLogin} />
    </main>
  );
};

export default Signup;
