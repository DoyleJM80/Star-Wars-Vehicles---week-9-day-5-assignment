import React, { Component } from 'react';

export default class Cards extends Component {


  

  render() {
    let ships = this.state.vehicles.map((result) => {
      return(
        <div className="col-sm-4" key={result.name}>
          <h3>Vehicle: {result.name}</h3>
          <h4>Model: {result.model}</h4>
          <h4>Specs</h4>
            <ul>
              <li>Manufacturer: {result.manufacturer}</li>
              <li>Class: {result.class}</li>
              <li>Passengers: {result.passengers}</li>
              <li>Crew: {result.crew}</li>
              <li>Length: {result.length}</li>
              <li>Max Speed: {result.speed}</li>
              <li>Cargo Capacity: {result.cargo}</li>
            </ul>

        </div>
      )
    })
    return(
      <div>
        <div className="row">
          {ships}
        </div>
      </div>
    )
  }
}
