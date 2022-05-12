import React, { Component } from 'react'

export default class VehicleInformation extends Component {

  render() {
      
    return (
      <form>
        <h3>Your Vehicle Information</h3>
        <div className="mb-3">
          <label>Make</label>
          <input
            type="text"
            className="form-control"
            placeholder="Make of your vehicle"
          />
        </div>
        <div className="mb-3">
          <label>Model</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Model"
          />
        </div>
        <div className="mb-3">
          <label>Year</label>
          <input
            type="date"
            className="form-control"
            placeholder="Enter Model"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    )
  }
}