import {Link } from "react-router-dom";

import Countdown from "../Countdown/Countdown";
import Hands from "../../Images/hands.png";

import './Header.css';

export const Header = () => {
    return ( <header className="header">
    <div className="header_left">
      <Link to="/easterEgg">
        <img src={Hands} alt="Hands" />
      </Link>
    </div>
    <div className="header_center">
      <Link to="/" style={{ color: "#808e95" }}>
        <h2>Save the date!</h2>
        <Countdown date="August 28, 2021 18:30:00 GMT+03:00" />
      </Link>
    </div>
  </header> );
}