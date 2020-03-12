import React, { Component } from 'react';
import Rating from 'react-rating';

import userService from '../../utils/userService';
import reviewService from '../../utils/reviewService';

import styles from './EditReviewForm.module.css';

class EditReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
    this.handleTasteChange = this.handleTasteChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
  }

  getInitialState() {
    return {
      taste: null,
      price: null,
      comment: '',
      brandId: this.props.match.params.id,
      error: ''
    };
  }

  isFormValid = () => {
    return this.state.taste && this.state.price && this.state.comment;
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
      const { taste, price, comment, brandId } = this.state;
      const addedBy = userService.getUser()._id;
      await reviewService.create({ taste, price, comment, brandId, addedBy });
      this.setState(this.getInitialState(), () => {
        this.props.handleGetReviews();
        this.props.history.push(this.props.location.pathname);
      });
    } catch (error) {
      this.setState({
        taste: undefined,
        price: undefined,
        comment: '',
        brandId: '',
        error: error.message
      });
    }
  };

  handleTasteChange(value) {
    this.setState({ taste: value });
  }

  handlePriceChange(value) {
    this.setState({ price: value });
  }

  render() {
    return (
      <section className={styles.section}>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Edit Review Form</legend>
            <label htmlFor="taste">Taste</label>
            <Rating
              {...this.props}
              initialRating={this.state.taste}
              onChange={this.handleTasteChange}
            />
            <label htmlFor="price">Price</label>
            <Rating
              {...this.props}
              initialRating={this.state.price}
              onChange={this.handlePriceChange}
            />
            <label htmlFor="comment">Comment</label>
            <input
              id="comment"
              name="comment"
              type="comment"
              value={this.state.comment}
              onChange={this.handleChange}
            />
            <button disabled={!this.isFormValid()} type="submit">
              Edit Review
            </button>
          </fieldset>
        </form>
      </section>
    );
  }
}

export default EditReviewForm;
