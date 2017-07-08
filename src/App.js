import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Menu from './Components/Menu';
import Button from './Components/Button'
import iconConfig from './Icons/icon-config.svg';
import './App.css';
import logo from './logo.svg';
import introLogo from './img/background-intro.svg';

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
      <Row className="App-header m-r-none m-l-none">
        <Col lg={2} md={2} xs={1} className="Content-logo">
          <img src={logo} className="App-logo" alt="logo" />
        </Col>
        <Menu items = {['Acerca de','Que Hacemos', 'Servicios' , 'Contacto', 'Equipo']} />
        <Col xs={1} className={"hidden-lg hidden-xl" }>
        Menu
        </Col>
      </Row>
        <div className="App-body">
          <div className="circle"></div>
          <div className="imgwrap">
            <div className="street">
          </div>

        </div>
        </div>
        <div className="App-footer">
        </div>
      </div>
    );
  }
}

export default App;

