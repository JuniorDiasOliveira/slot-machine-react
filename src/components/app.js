import React, { Component } from "react";
import Wheel from "./wheel/wheel";
import Winner from './winner/winner';
import ControlButtons from "./control-buttons/control-buttons";
import wheelActions from "./actions/wheel-actions";
import winnerActions from "./actions/winner-actions";
import "../css/app.css";

class App extends Component {
  constructor() {
    super();
    this.scheduleWheelsRunning(5000);
    this.state = {
      started: false
    }
  }

  scheduleWheelsRunning = time => {
    // setTimeout(() => {
    //   if (this.run) this.startWheels();
    // }, time);
  }

  stopWheels = () => wheelActions.changeWheelState(false)
  startWheels = () => wheelActions.changeWheelState(true)

  getResult = (result) => {
    winnerActions.changeWinnerState(result);
  }

  render() {

    return (
      <div className="app">
        <Winner></Winner>
        <Wheel
          time={10000}
          speed={50}
          result={this.getResult}
        />
        <Wheel
          time={10000}
          speed={50}
          result={this.getResult}
        />
        <Wheel
          time={10000}
          speed={50}
          result={this.getResult}
        />
        <ControlButtons
          start={this.startWheels}
          stop={this.stopWheels}
        />
      </div>
    );
  }
}

export default App;
