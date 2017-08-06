import React, { Component } from 'react'
import Review from './Review'

class Reviews extends Component {
  render() {
    return (
      <ul>
        {this.props.store.getState().reviews.filter(x=> x.restaurantId === this.props.restaurantId).map((x,i)=>{
          return <Review key={i} review={x} store={this.props.store}/>
        })}
      </ul>
    )
  }
}

export default Reviews