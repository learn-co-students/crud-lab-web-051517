import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    const { store, restaurantId } = this.props;
    const restReviews = store.getState().reviews.filter(review => review.restaurantId === restaurantId);

    return (
      <div>
        <ul>
          {restReviews.map(review => {
            return <Review store={store} review={review} />
          })}
        </ul>
      </div>
    );
  }

};

export default Reviews;
