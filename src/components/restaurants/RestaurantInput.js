import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  handleOnChange = (event) => {
    this.setState({ text: event.target.value })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: this.state
    })
    this.setState({ text: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" onChange={this.handleOnChange} />
          <input type="submit" />
          <p>{this.state.text}</p>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
