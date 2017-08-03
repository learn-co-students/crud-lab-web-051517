import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.store.getState().restaurants.map((restaurant) => {
          return <Restaurant restaurant={restaurant} store={this.props.store} />
        })}
      </ul>
    );
  }
};

export default Restaurants;
