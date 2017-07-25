import React, { Component } from 'react';

export default class Cards extends Component {
  constructor() {
    super();
  }
  render() {
    let vehicle = this.props.vehicle;
      return(
        <div className="col-sm-4">
          <div className="card">
            <h3>Vehicle: {vehicle.name}</h3>
            <h4>Model: {vehicle.model}</h4>
            <h4>Specs</h4>
              <ul>
                <li>Manufacturer: {vehicle.manufacturer}</li>
                <li>Class: {vehicle.class}</li>
                <li>Passengers: {vehicle.passengers}</li>
                <li>Crew: {vehicle.crew}</li>
                <li>Length: {vehicle.length}</li>
                <li>Max Speed: {vehicle.speed}</li>
                <li>Cargo Capacity: {vehicle.cargo}</li>
              </ul>
          </div>
        </div>
      )
  }
}
