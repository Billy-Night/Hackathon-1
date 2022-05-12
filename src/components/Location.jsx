import { useNavigate } from 'react-router-dom';


const Location = () => {

    const navigate = useNavigate();
    
    
    const handleLocationClick = () => (
      navigate('/results')
    );


    return (
        <div>
      <form>
        <h3>Enter Your Journey</h3>
        <div className="mb-3">
          <label>Enter Start Location</label>
          <input
            type="text"
            className="form-control"
            placeholder="Start Location"
          />
        </div>
        <div className="mb-3">
          <label>Enter End Location</label>
          <input
            type="text"
            className="form-control"
            placeholder="End Location"
          />
        </div>
        <div className="d-grid">
          <button onClick={handleLocationClick} type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      </div>
    )
}

export default Location