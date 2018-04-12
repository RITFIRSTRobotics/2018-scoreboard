import React from "react";
import PropTypes from "prop-types";

function Timer(props) {
  return (
    <div className='timer'>
      <h1>{props.count}</h1>
    </div>
  );
}

Timer.propTypes = {
  count: PropTypes.number.isRequired
};

export default Timer;
