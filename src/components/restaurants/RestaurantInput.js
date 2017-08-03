import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleInput = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      payload: { text: this.state.text }
    })
    this.setState({ text: '' })
  }

  render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type='text' value={this.state.text} onChange={this.handleInput} />
          </form>
        </div>
      );
    }
  };

export default RestaurantInput;
