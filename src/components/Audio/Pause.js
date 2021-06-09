import React from "react";
import { PauseCircleFilled } from "@material-ui/icons";

import './styles.scss';

export default function Play(props) {
  const { handleClick } = props;
  
  return (
    <button className="player__button" onClick={() => handleClick()}>
      <PauseCircleFilled />
    </button>
  );
}