import React from "react";
import PropTypes from "prop-types";

function Timer(props) {
  return (
    <div className='timer'>
      <h1>{props.remaining}</h1>
    </div>
  );
}

Timer.propTypes = {
  remaining: PropTypes.number.isRequired
};

export default Timer;
