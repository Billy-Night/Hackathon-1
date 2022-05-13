// import React, { useContext } from "react";
// import { MyContext } from '../../context/MyProvider';
import './user.css'
import man from '../../assets/man.png';
// import App.css from '../app.css';
// import './App.css'

const User = () => {
    // const context = useContext(MyContext);

    
    return (
        <div className="user">
            <img src={man} alt="man" />
            <h1>Charles Harrison</h1>
            <p>Hi, Chales how are you today ?</p>
            <p>It looks like you've been make good progress on cuting emissions
            </p>
            <div className="points-box">
                
            </div>
        </div>
    )
}

export default User; 