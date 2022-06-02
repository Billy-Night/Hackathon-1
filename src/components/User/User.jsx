
import './user.css'
import man from '../../assets/man.png';


const User = () => {

    return (
        <div className="user">
            <img src={man} alt="man" />
            <h1>Charles Harrison</h1>
            <p>Hi,</p>
            <p>It looks like you've been make good progress on cuting emissions
            </p>
            <p>Carbonfoot print saved: 328 kg</p>
            <p>Total distance traveled by bike: 424 km</p>
            <p>Total distance traveled by foot: 122 km</p>
        </div>
    )
}

export default User; 