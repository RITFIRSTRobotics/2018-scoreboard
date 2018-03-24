import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button, PageHeader } from 'react-bootstrap';
import axios from "axios";
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
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Ping Pong Panic</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <PageHeader>Welcome to Ping Pong Panic!</PageHeader>
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="/"
                target="_blank">
                Are You Ready?
              </Button>
            </p>
          </Grid>
        </Jumbotron>
        <TeamList teams={teams}/>
        <MatchInfo timer={this.state.timer} redScore={this.state.redScore} blueScore={this.state.blueScore}/>
      </div>
    );
  }
}

export default App;
