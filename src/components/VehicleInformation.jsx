import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../context/MyProvider';



const VehicleInformation = () => {

    const context = useContext(MyContext);

    const navigate = useNavigate();

    const handleVehicleClick = () => (
    navigate('/Location')
    );

    return (
      <form>
        <h3>Vehicle Information</h3>
        <div className="mb-3">
          <label>Make</label>
          <input
            value={context.vehicleMake}
            className="form-control"
            placeholder="Make of your vehicle"
            onChange={context.handleChangeVehicle}
          />
        </div>
        <div className="mb-3">
          <label>Model</label>
          <input
            value={context.vehicleModel}
            className="form-control"
            placeholder="Enter Model"
            onChange={context.handleChangeVehicle}
          />
        </div>
        <div className="mb-3">
          <label>Year</label>
          <input
            value={context.vehicleYear}
            className="form-control"
            placeholder="Enter Model"
            onChange={context.handleChangeVehicle}
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
          <button onClick={handleVehicleClick} type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    )
}

export default VehicleInformation