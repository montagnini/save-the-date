import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";
import Hands from "../../Images/hands.png";
import "./LinkDrawer.css";

export const LinkDrawer = ({ icon, label, link, onLinkClick}) => {
  let render = (
    <div
      className="div_link"
    >
      <Icon>{icon}</Icon>
      <h2 style={{ marginLeft: "10px" }}>{label}</h2>
    </div>
  );

  if (label === "EasterEgg") {
    render = (
      <div className="div_img">
        <img src={Hands} alt="img" />
      </div>
    );
  }

  return (
    <div>
      <Link
        to={link}
        style={{ color: "black" }}
        onClick={() => onLinkClick(false)}
      >
        {render}
      </Link>
    </div>
  );
};
