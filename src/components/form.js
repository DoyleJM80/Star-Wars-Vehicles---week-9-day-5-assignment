import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      pilot: ''
    };
  }
  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  // See form lesson for details.
  // Enter your code below:
  handleNameChange(event) {
    this.setState({
      pilot: event.target.value
    });
  }
  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:
  handleSubmit(event) {
    event.preventDefault();
    console.log('form submitted');
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        What is your name, pilot?
        <input type="text"/>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}
