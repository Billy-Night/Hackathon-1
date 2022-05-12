import React, {useContext} from 'react';
import { MyContext } from './context/MyProvider';


const AllInfo = () => {
    const context = useContext(MyContext);
  

//   // Function to switch which section is displayed on button click
//   const switchDisplay = (section) => (context.setCurrentSection(section));

  const handleChangeVehicle = (event) => {
    setUserVehicle(event.currentTarget.value);
    setVehicleModel(event.currentTarget.value);
    setVehicleYear(event.currentTarget.value);
}



export default AllInfo;