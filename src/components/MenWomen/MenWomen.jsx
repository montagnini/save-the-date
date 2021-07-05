
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";

import './MenWomen.css';

export const MenWomen = (props) => {
  return (
    <div className='card'>
      <Link to={"/dress-code/women"} style={{ color: "black" }}>
        <div className='children' style={{marginRight:'10px' }}>
          <Icon className='icon'>
            {"emoji_nature"}
          </Icon>
          <h2 className='label'> {"Mulheres"}</h2>
        </div>
      </Link>
      <Link to={"/dress-code/men"} style={{ color: "black" }}>
        <div className='children' style={{marginLeft:'10px' }}>
          <Icon className='icon' >
            {"masks"}
          </Icon>
          <h2 className='label'>{"Homens"}</h2>
        </div>
      </Link>
    </div>
  );
};
