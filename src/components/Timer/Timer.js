import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      text: this.props.text,
      minuts: this.props.minuts,
      seconds: this.props.seconds,
      btnTimer: 0,
      showMessage: 0,
      timer: null
    }
    this.handleTimerStart = this.handleTimerStart.bind(this);
    this.timer = this.timer.bind(this);
  }

  handleTimerStart() {
    this.setState({
      btnTimer: 1,
      timer: setInterval(this.timer, 1000)
    });
  }

  timer() {
    if (this.state.minuts == 0 && this.state.seconds == 1) {
      clearInterval(this.state.timer);
      this.setState({
        showMessage: 1
      });
    }
    if(this.state.seconds === 0) {
      this.state.minuts--
      this.state.seconds = 60
    }
    this.setState({
      seconds: this.state.seconds - 1
    })
  }

  render() {
    let min = this.state.minuts.toString().length === 1 ?
              `0${this.state.minuts}` : `${this.state.minuts}`;
    let sec = this.state.seconds.toString().length === 1 ?
              `0${this.state.seconds}` : `${this.state.seconds}`;
    return (
      <section className="App-content">
        <p className="App-challenge">
          { this.state.text }
        </p>
        <div className="App-timer">
          <p className="timer">
            <span className="minuts">
              { min }
            </span>
            :
            <span className="seconds">
              { sec }
            </span>
          </p>
          <button
            type="button"
            className={
              `timer-start
               ${this.state.btnTimer == 0 ? 'show' : 'hide'}
              `
            }
            onClick={this.handleTimerStart}
          >
            Empezar
          </button>
          <button
            type="button"
            className={
              `timer-start
               ${this.state.showMessage == 0 ? 'hide' : 'show'}
              `
            }
          >
            Se acabo!
          </button>
        </div>
      </section>
    )
  }
}

export default Timer;
