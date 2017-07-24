import React, {Component} from 'react';
import '../styles/App.css';
import Form from './form.js';
import Header from './header.js';


class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch('https://swapi.co/api/vehicles/').then((result) => {
      result.json().then((response) => {
        this.setState({vehicles: response.results});
      });
    });
  }

  

  render() {
    return (
      <div className="App">
         <Header />
         <Form onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
