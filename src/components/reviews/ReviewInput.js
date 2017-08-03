import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      text: this.state.text,
      restaurantId: this.props.restaurantId
    })
    this.setState({
      text: ''
    })

  }



  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Type Review'
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button type='submit'>Create Review</button>
        </form>
        <Reviews
          store={this.props.store}
          restaurantId={this.props.restaurantId}
        />
      </div>
    );
  }
};

export default ReviewInput;
