import React, { useContext } from "react";
import { MyContext } from '../context/MyProvider';

const Results = () => {
    const context = useContext(MyContext);



    return (
        <div>
            {context.apiLoaded === false ?
            <div> 
            <h2>Loading Footprint</h2>
            <p>Just a second</p> 
            </div>
            : 
            <div>
            <h1>GreenWay</h1>
            {context.vehicleFoot === undefined ? <></> : 
            <p>The trip distance: {context.vehicleFoot.carData.data.distance.kms} km</p>
            }
            <p>Carbon footprint for driving: {(context.carCarb).toFixed(0)} g</p>
            <p>Carbon footprint for cycing: {(context.cyclingCarb).toFixed(0)} g</p>
            <p>Carbon footprint for walking: {(context.walkCarb).toFixed(0)} g</p>
            <div>
                <p>If you cycle you save: {context.apiLoaded === true ? (context.carCarb - context.cyclingCarb).toFixed(0) : null } g
                </p>
                <p>If you walk you save: {context.apiLoaded === true ? (context.carCarb - context.walkCarb).toFixed(0) : null } g
                </p>
            </div>

            </div>
        }
        </div>
    )
}

export default Results;