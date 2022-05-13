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

let [vehicleFoot, setVehicleFoot] = useState({});

let [cyclingFoot, setCyclingFoot] = useState({});

let [apiLoaded, setapiLoaded] =useState(false);

// let [carbonSaved, setCarbonSaved] = useState(0);

let [carCarb, setCarCarb] = useState(0);

let [cyclingCarb, setCyclingCarb] = useState(0);

let [apiLoaded2, setapiLoaded2] = useState(false);

const apiKey = "fc876cfe815ea0849cd7a3ce2e788244";

    const handleApiLoc = () => {
      fetch(`http://api.positionstack.com/v1/forward?access_key=${apiKey}&query=${startLocation}`)
      .then((response) => response.json())
      .then((startData) => {
          startSetCords({
              lat: startData.data[0].latitude,
              lon: startData.data[0].longitude,
            });
      });
      fetch(`http://api.positionstack.com/v1/forward?access_key=${apiKey}&query=${endLocation}`)
      .then((response) => response.json())
      .then((endData) => {
          endSetCords({
              lat: endData.data[0].latitude,
              lon: endData.data[0].longitude,
            });
            setapiLoaded2(true);
        });
    }

    // const apiKeyCarb = "live_9lmVYiQGfEj1w0Prsd91WLUmtEJ5qUuZq3jIFB_6c5A5m3BDGQMz1CL0SSBZMugvJ0Pg9kaTJRItk2bmviJ63g==";

    const carFootApi = () => {
        fetch(`https://klimaat.app/api/v1/calculate?start=${startCords.lat},${startCords.lon}&end=${endCords.lat},${endCords.lon}&transport_mode=driving&vehicle_make=${vehicleMake}&vehicle_model=${vehicleModel}&vehicle_year=${vehicleYear}&key=${process.env.REACT_APP_APIKEY}`)
        .then((res) => res.json())
        .then((carData) => {
            setVehicleFoot({carData});
            setCarCarb(carData.data.carbon_footprint.grams.total)
        });
        fetch(`https://klimaat.app/api/v1/calculate?start=${startCords.lat},${startCords.lon}&end=${endCords.lat},${endCords.lon}&transport_mode=cycling&key=${process.env.REACT_APP_APIKEY}`)
        .then((res) => res.json())
        .then((cycleData) => {
            setCyclingFoot({cycleData});
            setCyclingCarb(cycleData.data.carbon_footprint.grams.total);
            setapiLoaded(true);
        });
    }


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
                endCords: endCords,
                carFootApi: carFootApi,
                vehicleFoot: vehicleFoot,
                cyclingFoot: cyclingFoot,
                apiLoaded: apiLoaded,
                carCarb: carCarb,
                cyclingCarb: cyclingCarb,
                apiLoaded2: apiLoaded2
            }} >
            {props.children }
        </MyContext.Provider>
    )
};

export default MyProvider;