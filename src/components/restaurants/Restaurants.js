import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    const restaurants = this.props.store.getState().restaurants.map((restaurant, index) =>{
      return <Restaurant key={index} id={restaurant.id} restaurant={restaurant} store={this.props.store}/>
    })
    return(
      <ul>
        {restaurants}
      </ul>


    );
  }
};

export default Restaurants;
