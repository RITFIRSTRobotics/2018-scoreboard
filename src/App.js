import React, { Component } from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';
import TeamList from "./components/TeamList";
import MatchInfo from "./components/MatchInfo";

const teams = [
  {id: 1, name: "Red Team"},
  {id: 2, name: "Blue Team"}
];

class App extends Component {
  state = {
    timer: 0,
    redScore: 0,
    blueScore: 0
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/game/timer")
      .then(response => {
        const newTimer = response.data.remaining;
        const newState = Object.assign({}, this.state, {
          timer: newTimer
        });
        this.setState(newState);
      })
      .catch(error => console.log(error));
    axios
      .get("http://localhost:5000/game/scores")
      .then(response => {
        const newRedScore = response.data.red_score;
        const newBlueScore = response.data.blue_score;
        const newState = Object.assign({}, this.state, {
          redScore: newRedScore,
          blueScore: newBlueScore
        });
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ping Pong Panic</h1>
        </header>
        <p className="App-intro">
          This is under the <code>App-intro</code> class.
        </p>
        <TeamList teams={teams}/>
        <MatchInfo timer={this.state.timer} redScore={this.state.redScore} blueScore={this.state.blueScore}/>
      </div>
    );
  }
}

export default App;
