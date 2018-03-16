import React from "react";
import PropTypes from "prop-types";
import "./MatchInfo.css";

function MatchInfo(props) {
  return (
    <div className="info">
      <p>Timer: {props.timer}</p>
      <p>Red: {props.redScore}</p>
      <p>Blue: {props.blueScore}</p>
    </div>
  );
}

MatchInfo.propTypes = {
  timer: PropTypes.number.isRequired,
  redScore: PropTypes.number.isRequired,
  blueScore: PropTypes.number.isRequired
};

export default MatchInfo;