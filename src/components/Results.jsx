import React, { useContext } from "react";
import { MyContext } from '../context/MyProvider';
import '../App.css';
import bicycle from '../assets/bicycle.png';
import walking from '../assets/walking.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';

const Results = () => {
    const context = useContext(MyContext);



    return (
        <div className="result">
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
            <img src={bicycle} alt="bike"/>
            <p>Carbon footprint for cycing: {(context.cyclingCarb).toFixed(0)} g</p>
            <img src={walking} alt="walking"/>
            <p>Carbon footprint for walking: {(context.walkCarb).toFixed(0)} g</p>
            <div className="results">
                <p><b>If you cycle you save: {context.apiLoaded === true ? (context.carCarb - context.cyclingCarb).toFixed(0) : null } g
                </b></p>
                <p><b>If you walk you save: {context.apiLoaded === true ? (context.carCarb - context.walkCarb).toFixed(0) : null } g
               </b></p>
            </div>
            <div className="social">
            <img src={facebook} alt="facebook"/>
            <img src={instagram} alt="instagram"/>
            <img src={twitter} alt="twitter"/>
            </div>
            </div>
        }
        </div>
    )
}

export default Results;