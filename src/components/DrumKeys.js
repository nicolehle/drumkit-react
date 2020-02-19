import React from "react";
import "../styles.css";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isPlaying: false
    };

    this.playSound = this.playSound.bind(this);
    this.transitionEndHandler = this.transitionEndHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keydown", this.playSound);
    this.audio = new Audio(this.props.clipId);
  }

  UNSAFE_componentWillUnmount() {
    window.removeEventListener("keydown", this._playSound);
  }

  playSound(e) {
    if (e.keyCode === this.props.code || e.type === "click") {
      this.setState({ isPlaying: true });
      this.audio.currentTime = 0;
      this.audio.play();
    }
  }

  transitionEndHandler(e) {
    this.setState({ isPlaying: false });
  }

  render() {
    const isPlaying = this.state.isPlaying ? "key playing" : "key";

    return (
      <button
        onClick={this.playSound}
        onTransitionEnd={this.transitionEndHandler}
        className={isPlaying}
      >
        <kbd>{this.props.keyTrigger}</kbd>
        <span className="sound">{this.props.text}</span>
      </button>
    );
  }
}
