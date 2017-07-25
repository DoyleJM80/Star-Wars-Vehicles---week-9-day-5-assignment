import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      pilot: ''
    }
  }

  handleInput(event) {
    this.props.handleInput(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.props.value);
  }

  componentWillReceiveProps(nextProps) {
    nextProps.pilot !== this.state.pilot ? this.setState({ pilot: nextProps.pilot }) : undefined;
  }

  render() {
    return (
        <form className="jumbotron form">
          <h3>What is your name, pilot?</h3>
          <input type="text" value={this.props.value} onChange={this.handleInput}/>
          <input type="submit" onClick={this.handleSubmit}/>
          <h1>{this.state.pilot}</h1>
          </form>
    );
  }
}
