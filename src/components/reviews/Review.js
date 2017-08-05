import React, { Component } from 'react';

class Review extends Component {

  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      id: this.props.review.id
    })
  }

  render() {
    return (
      <li>
        <p>{this.props.review.text}</p>
        <button onClick={this.handleOnClick}>Delete Review</button>
      </li>
    );
  }
};

export default Review;
