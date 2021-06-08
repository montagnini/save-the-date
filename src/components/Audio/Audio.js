import React, { Component } from "react";
import yourlove from './yourlove.mp3';

export default class extends Component {
  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.play();
  }

  stopAudio(){
      const audioEl = document.getElementsByClassName("audio-element")[0];
      audioEl.pause();
  }

  render() {
    return (
      <div>
        <button onClick={this.playAudio}>
          <span>Play Audio</span>
        </button>
        <button onClick={this.stopAudio}>
          <span>Stop Audio</span>
        </button>
        <audio className="audio-element">
          <source src={yourlove}></source>
        </audio>
      </div>
    );
  }
}
