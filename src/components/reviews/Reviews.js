import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviews = this.props.store.getState().reviews.filter(rev => {
      return rev.restID === this.props.restaurant.id
    })

    return (
      <ul>
        {reviews.map((review, index) => {
          return <Review
            store={this.props.store}
            review={review}
            key={index}
          />
        })}
      </ul>
    );
  }
};

export default Reviews;
