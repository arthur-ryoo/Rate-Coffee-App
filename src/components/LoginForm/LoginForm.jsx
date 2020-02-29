import React, { Component } from 'react';
import styles from './LoginForm.module.css';

class LoginForm extends Component {
  state = this.getInitialState();

  getInitialState() {
    return {
      email: '',
      password: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState(this.getInitialState());
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label>Email</label>
        <input
          id="email"
          name="email"
          type="text"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="text"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default LoginForm;
