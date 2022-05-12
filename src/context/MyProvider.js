import React, { useState } from 'react';

export const MyContext = React.createContext();

const MyProvider = (props) => {

//states for vehicle info
let [vehicleMake, setUserMake] = useState("");
let [vehicleModel, setVehicleModel] = useState("");
let [vehicleYear, setVehicleYear] = useState("");

let [startLocation, setStartLocation] = useState("");
let [endLocation, setEndLocation] = useState("");

let [startCords, startSetCords] = useState({});
let [endCords, endSetCords] = useState({});

const apiKey = "fc876cfe815ea0849cd7a3ce2e788244";

    const handleApiLoc = () => {
      fetch(`http://api.positionstack.com/v1/forward?access_key=${apiKey}&query=${startLocation}`)
      .then((response) => response.json())
      .then((data) => {
          startSetCords({
              lat: data.data[0].latitude,
              lon: data.data[0].longitude,
            });
      });
      fetch(`http://api.positionstack.com/v1/forward?access_key=${apiKey}&query=${endLocation}`)
      .then((response) => response.json())
      .then((data) => {
          endSetCords({
              lat: data.data[0].latitude,
              lon: data.data[0].longitude,
            });
      });
    }

//states for location info
// let [userLocation, setUserLocation] = useState("");


    return (
        <MyContext.Provider
            value={{
                vehicleMake: vehicleMake,
                setUserMake: setUserMake,
                vehicleModel: vehicleModel,
                setVehicleModel: setVehicleModel,
                vehicleYear: vehicleYear,
                setVehicleYear: setVehicleYear,
                handleApiLoc: handleApiLoc,
                setStartLocation: setStartLocation,
                startLocation: startLocation,
                setEndLocation: setEndLocation,
                endLocation: endLocation,
                startSetCords: startSetCords,
                startCords: startCords,
                endCords: endCords
                // handleChangeVehicle: handleChangeVehicle
            }} >
            {props.children }
        </MyContext.Provider>
    )
};

export default MyProvider;