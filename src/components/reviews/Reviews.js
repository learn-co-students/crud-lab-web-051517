import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {

    const reviews = this.props.store.getState().reviews.filter((review) => {return review.restaurantId === this.props.restaurantId}).map((review) => {
      return (
        <Review
          review={review}
          store={this.props.store}
          restaurantId={review.restaurantId}
          reviewId={review.id}
        />
      )})


    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
