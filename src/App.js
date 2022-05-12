import React from 'react'
import MyProvider from './context/MyProvider'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/signup.component'
import VehicleInformation from './components/VehicleInformation'
import Location from './components/Location'
import Results from './components/Results'


function App() {
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
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/vehicle-information" element={<VehicleInformation />} />
              <Route path="/location" element={<Location />} />
              <Route path="/results" element={<Results />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
    </MyProvider>
  )
}
export default App