import React, { useContext } from "react";
import { MyContext } from '../context/MyProvider';

const Results = () => {
    const context = useContext(MyContext);
    
    return (
        <div>
            <h2>This is the results page</h2>
            <button onClick={context.carFootApi}>click me</button>
        </div>
    )
}

export default Results 