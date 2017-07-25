import React, {Component} from 'react';
import '../styles/App.css';
import Form from './form.js';
import Header from './header.js';
import Cards from './cards.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: [],
      value: '',
      pilot: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleInput(value) {
    this.setState({value});
  }

  handleSubmit(value) {
    this.setState({pilot: value});
  }

  componentDidMount() {
    fetch('https://swapi.co/api/vehicles/').then((result) => {
      result.json().then((response) => {
        this.setState({vehicles: response.results});
      });
    });
  }

  render() {
    let vehicles = this.state.vehicles.map((vehicle) => {
      return <Cards key={vehicle.name} vehicle={vehicle}/>
    });
    return (
      <div className="App container-fluid">
        <Header />
        <Form value={this.state.value} pilot={this.state.pilot} handleInput ={this.handleInput} handleSubmit={this.handleSubmit}/>
        <div className='row'>
        {vehicles}
        </div>
      </div>
    );
  }
}

export default App;
