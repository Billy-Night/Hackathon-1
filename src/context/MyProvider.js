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

    // const apiKliKey = "live_9lmVYiQGfEj1w0Prsd91WLUmtEJ5qUuZq3jIFB_6c5A5m3BDGQMz1CL0SSBZMugvJ0Pg9kaTJRItk2bmviJ63g=="

    const handleAPIKli = () => {
        fetch(`https://klimaat.app/api/v1/calculate?start=60007&end=48127&transport_mode=driving&vehicle_make=Vauxhall&vehicle_model=Vectra&vehicle_year=2005&key=live_9lmVYiQGfEj1w0Prsd91WLUmtEJ5qUuZq3jIFB_6c5A5m3BDGQMz1CL0SSBZMugvJ0Pg9kaTJRItk2bmviJ63g==`)
        .then((res) => res.json())
        .then((data) => {
            setVehicleFoot(data);
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
                endCords: endCords,
                handleAPIKli: handleAPIKli,
                vehicleFoot: vehicleFoot
                // handleChangeVehicle: handleChangeVehicle
            }} >
            {props.children }
        </MyContext.Provider>
    )
};

export default MyProvider;