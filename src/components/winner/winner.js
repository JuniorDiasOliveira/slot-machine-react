import React, { Component } from "react";
import winnerStore from '../stores/winner-store';
import "../../css/winner.css";

class Winner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.show
    };
    this.message = "";
    this.listMessages = {
      yeah: "Yeaah - Your prize is $100",
      almost: "Almost - Your prize is $20",
      hum: "Hummm... take this $10",
      noLuck: "You Lost. Try another machine."
    };
  }

  componentWillMount() {
    winnerStore.on("showWinner", () => {
      this.handleWinner(winnerStore.getResults())
    });
  }

  handleWinner(results) {
    this.drawComponent(true);
    this.calcResult(results);
  }

  drawComponent(showMessage) {
    this.setState({
      show: showMessage
    });
  }
  calcResult(list) {
    if (list.every(x => x === list[0])) {
      this.message = this.listMessages.yeah;
    } else if (list[0] === list[1] || list[1] === list[2]) {
      this.message = this.listMessages.almost;
    } else if (list[0] === list[2]) {
      this.message = this.listMessages.hum;
    } else {
      this.message = this.listMessages.noLuck;
    }
  }
  show() {
    return this.state.show ? "winner" : "winner none";
  }

  render() {
    return (
      <div className={this.show()}>
        <span>{this.message}</span>
      </div>
    );
  }
}

export default Winner;
