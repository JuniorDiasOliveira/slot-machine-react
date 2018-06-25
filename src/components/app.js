import React, { Component } from "react";
import Wheel from "./wheel/wheel";
import Visor from "./visor/visor";
import ControlButtons from "./control-buttons/control-buttons";
import Winner from "./winner/winner";
import "../css/app.css";
import "../css/fontawesome-all.min.css";

class App extends Component {
  constructor() {
    super();
    this.state = { started: false, showMessage: false };
    this.run = true;
    this.resultSet = [];
    this.scheduleWheelsRunning(5000);
  }

  notRunning = () => this.setState({ started: false });
  running = () => this.setState({ started: true });

  scheduleWheelsRunning(time) {
    setTimeout(() => {
      if (this.run) this.startWheels();
    }, time);
  }
  startWheels() {
    this.running();
    this.winner.drawComponent(false);
    this.run = false;
  }
  stopWheels() {
    this.notRunning();
  }
  getResult(result) {
    if (typeof result !== "undefined") this.resultSet.push(result);
    if (this.resultSet.length === 3) {
      this.winner.drawComponent(true);
      this.winner.calcResult(this.resultSet)
      this.resultSet = [];
    }
  }
  render() {
    return (
      <div className="app">
        <Winner
          onRef={ref => (this.winner = ref)}
        />
        <Visor>
          <Wheel
            time={10000}
            speed={50}
            start={this.state.started}
            result={this.getResult.bind(this)}
          />
        </Visor>
        <Visor>
          <Wheel
            time={10000}
            speed={50}
            start={this.state.started}
            result={this.getResult.bind(this)}
          />
        </Visor>
        <Visor>
          <Wheel
            time={10000}
            speed={50}
            start={this.state.started}
            result={this.getResult.bind(this)}
          />
        </Visor>
        <ControlButtons
          start={this.startWheels.bind(this)}
          stop={this.stopWheels.bind(this)}
        />
      </div>
    );
  }
}

export default App;
