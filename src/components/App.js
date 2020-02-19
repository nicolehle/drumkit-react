import React, { Component } from "react";
import "../styles.css";

import DrumKeys from "./DrumKeys";

import clap from "../sounds/clap.wav";
import hihat from "../sounds/hihat.wav";
import kick from "../sounds/kick.wav";
import openhat from "../sounds/openhat.wav";
import boom from "../sounds/boom.wav";
import ride from "../sounds/ride.wav";
import snare from "../sounds/snare.wav";
import tom from "../sounds/tom.wav";
import tink from "../sounds/tink.wav";

export default class App extends Component {
  render() {
    return (
      <div className="keys">
        <DrumKeys keyTrigger="A" code={65} clipId={clap} text="clap" />
        <DrumKeys keyTrigger="S" code={83} clipId={hihat} text="hihat" />
        <DrumKeys keyTrigger="D" code={68} clipId={kick} text="kick" />
        <DrumKeys keyTrigger="F" code={70} clipId={openhat} text="openhat" />
        <DrumKeys keyTrigger="G" code={71} clipId={boom} text="boom" />
        <DrumKeys keyTrigger="H" code={72} clipId={ride} text="ride" />
        <DrumKeys keyTrigger="J" code={74} clipId={snare} text="snare" />
        <DrumKeys keyTrigger="K" code={75} clipId={tom} text="tom" />
        <DrumKeys keyTrigger="L" code={76} clipId={tink} text="tink" />
      </div>
    );
  }
}
