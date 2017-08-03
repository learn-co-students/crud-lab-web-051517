import React, { Component } from 'react';

class RestaurantInput extends Component {

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
      type: 'ADD_RESTAURANT',
      text: this.state.text
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
            placeholder='Restaurant Name'
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button type='submit'>Create Restaurant</button>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
