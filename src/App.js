import React, { Component } from 'react';
import Button from './Components/Button'
import iconConfig from './Icons/icon-config.svg';
import './App.css';
/*
class App extends Component {
  render() {
    return (  
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}*/

class App extends Component {
  render() {
    return (  
      <div className="App">
        <div className="App-header">
          <div className="App-content-button">
            <Button icon={iconConfig} />
            <Button icon={iconConfig} />
            <Button icon={iconConfig} />
          </div>
        </div>
        <div className="App-footer">
        </div>
      </div>
    );
  }
}

export default App;

