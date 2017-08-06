import React, { Component } from 'react';

class RestaurantInput extends Component {
  state={
    text: ''
  }

  handleChange = (event) =>{
      this.setState({
        text: event.target.value
      })
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: this.state,
    })
    this.setState({
      text: '',
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Text: </label>
          <input type="text" value={this.state.text} onChange={this.handleChange}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
