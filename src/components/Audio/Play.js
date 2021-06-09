import React from "react";
import { PlayCircleFilled } from "@material-ui/icons";

import './styles.scss';

export default function Play(props) {
  const { handleClick } = props;

  return (
    <button className="player__button" onClick={() => handleClick()}>
      <PlayCircleFilled />
    </button>
  );
}
