import React, { useState } from "react";
// import { MyContext } from './context/MyProvider';
import MyProvider from './context/MyProvider.js';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Login from './components/Login'
import SignUp from './components/signup.component'
import VehicleInformation from './components/VehicleInformation'
import Location from './components/Location'
import Results from './components/Results'
import User from './components/User/User'



function App() {
  let [loginDone, setLoginDone] = useState(false);

  // const context = useContext(MyContext);


  const handleLogin = () => {
    setLoginDone(true);
  }

  return (
    <MyProvider>
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              GreenWay
            </Link>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                {loginDone === false ? 
                <>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
                </>
                : <></> }

                <li className="nav-item">
                  <Link className="nav-link" to={'/vehicle-information'}>
                    Vehicle Information
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/location'}>
                    Location
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/user'}>
                    User
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login handleLogin={handleLogin}/>} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/vehicle-information" element={<VehicleInformation />} />
              <Route path="/location" element={<Location />} />
              <Route path="/results" element={<Results />} />
              <Route path="/user" element={<User />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
    </MyProvider>
  )
}
export default App