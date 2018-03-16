import React from "react";
import PropTypes from "prop-types";
import "./Team.css";

function Team(props) {
  return (
    <div className="team">
      <span>{props.name}</span>
    </div>
  );
}

Team.propTypes = {
  name: PropTypes.string.isRequired
};

export default Team;