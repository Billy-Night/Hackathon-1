import React, { useContext } from "react";
import { MyContext } from '../context/MyProvider';
import { useNavigate } from 'react-router-dom';


const VehicleInformation = () => {

    const context = useContext(MyContext);

    const navigate = useNavigate();

    const handleVehicleClick = () => (
    navigate('/Location')
    );

    const handleChangeVehicle = (event) => {
        if (event.currentTarget.id === "vehicleMake") {
        context.setUserMake(event.currentTarget.value);
        } else if(event.currentTarget.id === "vehicleModel") {
        context.setVehicleModel(event.currentTarget.value);
        } else {
        context.setVehicleYear(event.currentTarget.value);
        }    
      }

    return (
      <form>
        <h3>Vehicle Information</h3>
        <div className="mb-3">
          <label>Make</label>
          <input
            value={context.vehicleMake}
            className="form-control"
            placeholder="Make of your vehicle"
            onChange={handleChangeVehicle}
            id="vehicleMake"
          />
        </div>
        <div className="mb-3">
          <label>Model</label>
          <input
            value={context.vehicleModel}
            className="form-control"
            placeholder="Enter Model"
            onChange={handleChangeVehicle}
            id="vehicleModel"
          />
        </div>
        <div className="mb-3">
          <label>Year</label>
          <input
            value={context.vehicleYear}
            className="form-control"
            placeholder="Enter Year"
            onChange={handleChangeVehicle}
          />
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