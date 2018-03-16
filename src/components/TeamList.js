import React from "react";
import Team from "./Team";

function TeamList(props) {
  return (
    <div>
      {props.teams.map(t => <Team key={t.id} name={t.name} />)}
    </div>
  );
}

export default TeamList;