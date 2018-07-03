import React, { Component } from "react";
import { interval, timer } from "rxjs";
import { takeUntil } from "rxjs/operators";
import getRamdomImage from "../../services/ramdomly-images";
import wheelStore from '../stores/wheel-store';

import "../../css/wheel.css";

class Wheel extends Component {
  constructor(props) {
    super(props);
    this.speed = interval(props.speed);
    this.timer = timer(props.time);
    this.subscription = null;
    this.state = {
      src: "",
      id: 0
    };
  }

  componentWillMount() {
    wheelStore.on("rollWheels", () => {
      this.handleWheel(wheelStore.getStateWheel())
    });
  }

  componentDidMount() {
    this.tick();
  }

  handleWheel(state) {
    if (state) {
      this.startWheel();
    } else {
      this.stopWheel();
    }
  }

  tick() {
    const image = getRamdomImage();
    this.setState({
      src: image.src,
      id: image.id
    });
  }

  startWheel() {
    this.subscription = this.speed
      .pipe(takeUntil(this.timer))
      .subscribe(
        x => this.tick(),
        e => console.log(`error ${e}`),
        () => this.stopWheel()
      );
  }

  stopWheel() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
      this.subscription = null;
      this.finishedRunning();
    }
   }

  finishedRunning() {
    this.props.result(this.state.id);
  }

  render() {
    return (
      <div className="container">
        <img src={this.state.src} alt="" className="wheel-image" />
      </div>
    );
  }
}

export default Wheel;