import { useState, useEffect } from "react";

import './styles.scss';

function useAudioPlayer() {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = document.getElementById("audio");


    if(playing){

      let playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise
          .then(_ => {
            // Automatic playback started!
            // Show playing UI.
          })
          .catch(error => {
            // Auto-play was prevented
            // Show paused UI.
            setPlaying(false);
          });
      }
    }else{
      audio.pause();
    }

  }, [playing]);

  return {
    playing,
    setPlaying,
  }
}

export default useAudioPlayer;