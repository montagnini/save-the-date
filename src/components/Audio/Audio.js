import React, { useEffect } from "react";

import Play from "./Play";
import Pause from "./Pause";
import YourLove from "./yourlove.mp3";

import useAudioPlayer from "./useAudioPlayer";

import "./styles.scss";

function Audio() {
  const { playing, setPlaying } = useAudioPlayer();

  useEffect(() => {
    setPlaying(true);
  }, [setPlaying]);

  return (
    <div className="player">
      <audio id="audio">
        <source src={YourLove} />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <div className="controls">
        {playing ? (
          <Pause handleClick={() => setPlaying(false)} />
        ) : (
          <Play handleClick={() => setPlaying(true)} />
        )}
      </div>
    </div>
  );
}

export default Audio;
