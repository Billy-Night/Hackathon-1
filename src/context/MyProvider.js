import React, { useState } from "react";

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

  let [apiLoaded, setapiLoaded] = useState(false);

  let [carCarb, setCarCarb] = useState(0);

  let [cyclingCarb, setCyclingCarb] = useState(0);

  let [walkFoot, setWalkFoot] = useState({});

  let [walkCarb, setWalkCarb] = useState({});

  const handleApiLoc = () => {
    fetch(
      `https://dev.virtualearth.net/REST/v1/Locations/${startLocation}?&maxResults=1&key=${process.env.REACT_APP_APIKEY_LOC}`
    )
      .then((response) => response.json())
      .then((startData) => {
        startSetCords({
          lat: startData.resourceSets[0].resources[0].point.coordinates[0],
          lon: startData.resourceSets[0].resources[0].point.coordinates[1],
        });
        fetch(
          `https://dev.virtualearth.net/REST/v1/Locations/${endLocation}?&maxResults=1&key=${process.env.REACT_APP_APIKEY_LOC}`
        )
          .then((response) => response.json())
          .then((endData) => {
            endSetCords({
              lat: endData.resourceSets[0].resources[0].point.coordinates[0],
              lon: endData.resourceSets[0].resources[0].point.coordinates[1],
            });
            
            fetch(
              `https://klimaat.app/api/v1/calculate?start=${startData.resourceSets[0].resources[0].point.coordinates[0]},${startData.resourceSets[0].resources[0].point.coordinates[1]}&end=${endData.resourceSets[0].resources[0].point.coordinates[0]},${endData.resourceSets[0].resources[0].point.coordinates[1]}&transport_mode=driving&vehicle_make=${vehicleMake}&vehicle_model=${vehicleModel}&vehicle_year=${vehicleYear}&key=${process.env.REACT_APP_APIKEY_CARB}`
            )
              .then((res) => res.json())
              .then((carData) => {
                setVehicleFoot({ carData });
                setCarCarb(carData.data.carbon_footprint.grams.total);
                fetch(
                  `https://klimaat.app/api/v1/calculate?start=${startData.resourceSets[0].resources[0].point.coordinates[0]},${startData.resourceSets[0].resources[0].point.coordinates[1]}&end=${endData.resourceSets[0].resources[0].point.coordinates[0]},${endData.resourceSets[0].resources[0].point.coordinates[1]}&transport_mode=cycling&key=${process.env.REACT_APP_APIKEY_CARB}`
                )
                  .then((res) => res.json())
                  .then((cycleData) => {
                    setCyclingFoot({ cycleData });
                    setCyclingCarb(cycleData.data.carbon_footprint.grams.total);
                fetch(`https://klimaat.app/api/v1/calculate?start=${startData.resourceSets[0].resources[0].point.coordinates[0]},${startData.resourceSets[0].resources[0].point.coordinates[1]}&end=${endData.resourceSets[0].resources[0].point.coordinates[0]},${endData.resourceSets[0].resources[0].point.coordinates[1]}&transport_mode=walking&key=${process.env.REACT_APP_APIKEY_CARB}`
                )
                .then((res) => res.json())
                .then((walkData) => {
                  setWalkFoot({ walkData });
                  setWalkCarb(walkData.data.carbon_footprint.grams.total);
                  setapiLoaded(true);
                });
                });
              });
          });
      });
  };

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
        vehicleFoot: vehicleFoot,
        cyclingFoot: cyclingFoot,
        apiLoaded: apiLoaded,
        carCarb: carCarb,
        cyclingCarb: cyclingCarb,
        walkFoot: walkFoot,
        walkCarb: walkCarb
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyProvider;

