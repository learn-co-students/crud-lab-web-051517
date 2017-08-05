import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  handleOnChange = (event) => {
    this.setState({ text: event.target.value })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
        text: this.state.text,
        restID: this.props.restaurant.id
      }
    })
    this.setState({ text: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Add a Review</label>
          <textarea onChange={this.handleOnChange} />
          <input type="submit" />
          <p>{this.state.text}</p>
        </form>
        <Reviews
          restaurant={this.props.restaurant}
          store={this.props.store}
        />
      </div>
    );
  }
};

export default ReviewInput;
