import React from "react";
import "../../css/control-buttons.css";

const ControlButtons = props => {
  return (
    <div className="control-buttons">
      <button className="control-button-wheels" onClick={() => props.start()}>
        <i className="start"> </i>
      </button>
      <button className="control-button-wheels" onClick={() => props.stop()}>
        <i className="stop"> </i>
      </button>
    </div>
  );
};

export default ControlButtons;
