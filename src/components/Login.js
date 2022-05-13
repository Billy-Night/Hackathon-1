// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

const navigate = useNavigate();
// const [loginDone, setLoginDone] = useState(true);

const handleSignIn = () => (
  navigate('/vehicle-information')
  // setLoginDone(false);
);

  return (
  <div>
      <form>
        <h3>Login</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button onClick={handleSignIn} className="btn btn-primary">
            Submit
          </button>
        </div>
        {/* <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p> */}
      </form>
    </div>
  )}

  export default Login;