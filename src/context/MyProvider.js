import React, { useState } from 'react';

export const MyContext = React.createContext();

const MyProvider = (props) => {

//states for vehicle info
let [vehicleMake, setUserVehicle] = useState("");
let [vehicleModel, setVehicleModel] = useState("");
// let [vehicleYear, setVehicleYear] = useState("")


//states for location info
// let [userLocation, setUserLocation] = useState("");



const handleChangeVehicle = (event) => {
    setUserVehicle(event.currentTarget.value);
    setVehicleModel(event.currentTarget.value);
    // setVehicleYear(event.currentTarget.value);
}

    return (
        <MyContext.Provider
            value={{
                vehicleMake: vehicleMake,
                vehicleModel: vehicleModel,
                handleChangeVehicle: handleChangeVehicle
            }} >
            {props.children }
        </MyContext.Provider>
    )
};

export default MyProvider;