import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      input: '',
      pilot: ''
    }
  }

  handleNameChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('i clicked a button');
    this.setState({
      pilot: this.state.input
    })
  }

  render() {
    return (
        <form onSubmit={this.props.onSubmit}>
          What is your name, pilot?
          <input type="text" value={this.state.input}/>
          <input type="submit"/>
          <p>{this.state.pilot}</p>
          </form>
    );
  }
}
