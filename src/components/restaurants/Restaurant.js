import React, { Component } from 'react';
import Reviews from '../reviews/Reviews'
import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {

  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    })
  }

  render() {
    return (
      <li>
        <p>{this.props.restaurant.text}</p>
        <button onClick={this.handleOnClick}>Delete Restaurant</button>
        <ReviewInput store={this.props.store} restaurant={this.props.restaurant} />
      </li>
    );
  }
};

export default Restaurant;
