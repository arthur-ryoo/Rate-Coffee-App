import React, { Component } from 'react';

import brandService from '../../utils/brandService';

import styles from './BrandForm.module.css';

class BrandForm extends Component {
  state = this.getInitialState();

  getInitialState() {
    return {
      name: '',
      description: '',
      error: ''
    };
  }

  isFormValid = () => {
    return this.state.name && this.state.description;
  };

  handleChange = event => {
    this.setState({
      error: '',
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    if (!this.isFormValid()) return;
    try {
      const { name, description } = this.state;
      await brandService.create({ name, description });

      this.setState(this.getInitialState(), () => {
        this.props.handleGetBrands();
        this.props.history.push('/brands');
      });
    } catch (error) {
      this.setState({
        title: '',
        cuisine: '',
        error: error.message
      });
    }
  };

  render() {
    return (
      <section className={styles.section}>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>New Brand Form</legend>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <label htmlFor="description">Description</label>
            <input
              id="description"
              name="description"
              type="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
            <button disabled={!this.isFormValid()} type="submit">
              Add Brand
            </button>
          </fieldset>
        </form>
      </section>
    );
  }
}

export default BrandForm;
