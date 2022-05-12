import React, { useContext } from "react";
import { MyContext } from '../context/MyProvider';

const Results = () => {
    const context = useContext(MyContext);



    return (
        <div>
            {context.apiLoaded === false ?
            <div> 
            <h2>Find the results below</h2>
            <p>Click the button to get results</p>
            <button onClick={context.carFootApi}>click me</button>
            </div>
            :
            <div>
            
            <p>Carbon footprint for driving: {(context.carCarb).toFixed(0)} g</p>
            <p>Carbon footprint for cycing: {(context.cyclingCarb).toFixed(0)} g</p>
            <div>
                <p>You've saved: {context.apiLoaded === true ? (context.carCarb - context.cyclingCarb).toFixed(0) : null } g
                </p>
            </div>
            </div>
        }

            
            
            
        </div>
    )
}

export default Results 