import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TeamList from "./components/TeamList";

const teams = [
  {id: 1, name: "Red Team"},
  {id: 2, name: "Blue Team"}
];

class App extends Component {
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
      </div>
    );
  }
}

export default App;
