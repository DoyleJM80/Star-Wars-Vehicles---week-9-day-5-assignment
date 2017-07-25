import React, { Component } from 'react';

export default class Cards extends Component {
  constructor() {
    super();

  }
  render() {
    let vehicle = this.props.vehicle;
    console.log('vehicle', vehicle);
      return(
        <div className="col-sm-4">
          <div className="card">
            <h3>Vehicle: {vehicle.name}</h3>
            <h4>Model: {vehicle.model}</h4>
            <h4>Specs</h4>
              <ul>
                <li>Manufacturer: {vehicle.manufacturer}</li>
                <li>Cost in Credits: {vehicle.cost_in_credits}</li>
                <li>Passengers: {vehicle.passengers}</li>
                <li>Crew: {vehicle.crew}</li>
                <li>Length: {vehicle.length}</li>
              </ul>
          </div>
        </div>
      )
  }
}
