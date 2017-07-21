import React, { Component } from 'react';

export default class Form extends Component {

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          What is your name, pilot?
          <input type="text"/>
          <input type="submit" value="Submit"/>
          </form>
      </div>
    );
  }
}
