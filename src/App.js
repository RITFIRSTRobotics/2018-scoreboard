import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, PageHeader, ProgressBar, Panel, Well } from 'react-bootstrap';
import 'whatwg-fetch';
import './App.css';
import Timer from "./components/Timer";

class App extends Component {
  state = {
    isTimerLoaded: false,
    isScoreLoaded: false,
    timer: 135,
    redScore: 0,
    blueScore: 0,
    error: null
  };

  fetchTimer() {
    fetch("http://10.0.1.2:5000/game/timer")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isTimerLoaded: true,
            timer: result.remaining
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  };

  fetchScores() {
    fetch("http://10.0.1.2:5000/game/scores")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isScoreLoaded: true,
            redScore: result.red_score,
            blueScore: result.blue_score
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  };

  tick() {
    this.fetchTimer();
    this.fetchScores();
  };

  componentDidMount() {
    setInterval(() => this.tick(), 500);
  }

  render() {
    const { error, isTimerLoaded, isScoreLoaded, timer, redScore, blueScore } = this.state;
    if (error) {
      return (<div>Error: {error.message}</div>);
    } else if (!isTimerLoaded || !isScoreLoaded) {
      return (<div>Loading...</div>);
    } else {
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
              <PageHeader>Let's Play: Ping Pong Panic!</PageHeader>
            </Grid>
          </Jumbotron>
          <Panel>
            <Panel.Heading componentClass="h1">Scores</Panel.Heading>
            <Panel.Body>
              <ProgressBar className="large-scores">
                <ProgressBar bsStyle="info" now={50} key={1} label={blueScore}/>
                <ProgressBar bsStyle="danger" now={50} key={2} label={redScore}/>
              </ProgressBar>
            </Panel.Body>
          </Panel>
          <Well bsSize="large">
            <Timer remaining={timer}/>
          </Well>
        </div>
      );
    }
  }
}

export default App;
