import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {

  handleClick = event => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    })
  }

  render() {
    return (
      <div>
        <li key={this.props.restaurant.id}>{this.props.restaurant.text}</li>
        <button onClick={()=> this.handleClick()}> Delete </button>
        <ReviewInput
          restaurantId={this.props.restaurant.id}
          store={this.props.store}
        />
      </div>
    );
  }
};

export default Restaurant;
