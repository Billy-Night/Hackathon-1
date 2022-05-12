// import React, { useContext } from "react";
// import { MyContext } from '../context/MyProvider';



// const apiKey = "fc876cfe815ea0849cd7a3ce2e788244";

// const handleApiLoc = () => {

//     const context = useContext(MyContext);
    
//   return (
//     fetch(
//         `http://api.positionstack.com/v1/forward
//         ?access_key=${apiKey}&query=${context.startLocation}`
//     )
//         .then((res) => res.json())
//         .then((data) => {
//           context.setCords({
//             lat: data[0].lat,
//             lon: data[0].lon,
//           });
//   )
// };    

// export default handleApiLoc;