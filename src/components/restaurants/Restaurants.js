import React, { Component } from 'react'
import Restaurant from './Restaurant'

class Restaurants extends Component {
  
  render() {
    return(
      <ul>
        {this.props.store.getState().restaurants.map((x,i)=>{
          return <Restaurant key={i} restaurant={x} store={this.props.store}/>
        })}
      </ul>
    )
  }
}

export default Restaurants