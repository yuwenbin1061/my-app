import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './component/Clock'
import Toggle from './component/Toggle';
import LoginControl from './component/LoginControl';
import NameForm from './component/NameForm';
import EssayForm from './component/EssayForm';
import Reservation from './component/Reservation';
import Calculator from './component/Calculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="learn">Let us begin!</div>
        <Clock />
        <Toggle />
        <Calculator />
        <LoginControl />
        <NameForm />
        <EssayForm />
        <Reservation />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
export default App;
