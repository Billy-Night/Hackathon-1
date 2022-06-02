import React, { useContext } from "react";
import { MyContext } from '../context/MyProvider';
import { useNavigate } from 'react-router-dom';


const Location = () => {

    const context = useContext(MyContext);

    const navigate = useNavigate();

    const handleLocationClick = (event) => {
        event.preventDefault();
        context.handleApiLoc();
        navigate('/results');
    };

    const handleChangeLocation = (event) => {
        if (event.currentTarget.id === "start") {
        context.setStartLocation(event.currentTarget.value);
        } else {
        context.setEndLocation(event.currentTarget.value);
        }    
      }

    return (
        <div>
      <form>
        <h3>Enter Your Journey</h3>
        <div className="mb-3">
          <label>Enter Start Location</label>
          <input
            value={context.startLocation}
            className="form-control"
            placeholder="Start Location"
            id="start"
            onChange={handleChangeLocation}
          />
        </div>
        <div className="mb-3">
          <label>Enter End Location</label>
          <input
            value={context.endLocation}
            className="form-control"
            placeholder="End Location"
            onChange={handleChangeLocation}
            id="end"
          />
        </div>
        <div className="d-grid">
          <button onClick={handleLocationClick} type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      </div>
    )
}

export default Location