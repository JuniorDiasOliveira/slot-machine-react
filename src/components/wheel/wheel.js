import React, { Component } from "react";
import "../../css/wheel.css";
import getRamdomImage from "../../services/ramdomly-images";
import WheelFunctions from "./wheel-functions";

class Wheel extends Component {
  constructor(props) {
    super(props);
    this.wheelFunctions = new WheelFunctions(this.props.speed, this.props.time);
    this.state = {
      start: this.props.start
    };
  }

  componentWillReceiveProps(props) {
    const started = props.start;
    if (started) {
      this.startWheel(started);
    } else {
      this.stopWheel(started);
    }
  }

  componentDidMount() {
    this.defineState();
  }
  componentWillUnmount() {
    this.wheelFunctions.stopWheel();
  }

  tick() {
    const image = getRamdomImage();
    this.setState({
      src: image.src,
      id: image.id
    });
  }

  startWheel(started) {
    this.setState({
      start: started
    });
    this.defineState(started);
  }

  stopWheel(started) {
    if (!started && !this.state.start) {
      const image = getRamdomImage();
      this.setState({
        src: image.src,
        id: image.id
      });
    }
    this.wheelFunctions.stopWheel(() => this.finishedRunning());
  }

  defineState(started) {
    if (this.state.start || started)
      this.wheelFunctions.startWheel(
        () => this.tick(),
        () => this.finishedRunning()
      );
    else this.stopWheel();
  }

  finishedRunning() {
    this.props.result(this.state.id);
  }

  render() {
    return <img src={this.state.src} alt="" className="wheel-image" />;
  }
}

export default Wheel;
