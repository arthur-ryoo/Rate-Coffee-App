import React, { Component } from 'react';
import styles from './SignupForm.module.css';
import userService from '../../utils/userService';

class SignupForm extends Component {
  state = this.getInitialState();

  getInitialState() {
    return {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      error: ''
    };
  }

  isFormValid = () => {
    return (
      this.state.name &&
      this.state.email &&
      this.state.password &&
      this.state.password === this.state.passwordConfirmation
    );
  };

  handleChange = event => {
    this.setState({
      error: '',
      ...{ [event.target.name]: event.target.value }
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    if (!this.isFormValid()) return;
    try {
      const { name, email, password } = this.state;
      await userService.signup({ name, email, password });
      this.setState(this.getInitialState(), () => {
        this.props.handleSignupOrLogin();
        this.props.history.push('/');
      });
    } catch (error) {
      this.setState({
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        error: error.message
      });
    }
  };

  render() {
    return (
      <section className={styles.section}>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <label htmlFor="passwordConfirmation">Password Confirmation</label>
          <input
            id="passwordConfirmation"
            name="passwordConfirmation"
            type="password"
            value={this.state.passwordConfirmation}
            onChange={this.handleChange}
          />
          <button disabled={!this.isFormValid()} type="submit">
            Submit
          </button>
        </form>
      </section>
    );
  }
}

export default SignupForm;
