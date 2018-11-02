import React, { Component } from 'react';
import Timer from './components/Timer/Timer';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      challenges: {
        'one': 'Reto 1',
        'two': 'Reto 2',
        'three': 'Reto 3',
        'four': 'Reto 4'
      }
    };
  }

  render() {
    let challengesObj = this.state.challenges;
    return (
      <div className="App">
        <header className="App-header">
          <p>Retos</p>
        </header>
        <Timer minuts={0} seconds={10} text={ challengesObj.one }></Timer>
      </div>
    );
  }
}

export default App;
