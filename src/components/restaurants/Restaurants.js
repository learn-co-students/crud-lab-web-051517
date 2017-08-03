import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    const restaurants = this.props.store.getState().restaurants.map((restaurant) => { return (
      <Restaurant
        restaurant={restaurant}
        store={this.props.store}
        id={restaurant.id}
      />
    )})
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
