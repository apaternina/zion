import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Menu from './Components/Menu';
import Button from './Components/Button'
import iconConfig from './Icons/icon-config.svg';
import './App.css';
import logo from './logo.svg';
import introLogo from './img/background-intro.svg';
import { Link, DirectLink, Element, Events , animateScroll, scrollSpy } from 'react-scroll';

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

/*class App extends Component {
  render() {
    return (  
      <div className="App">
      <Row className="App-header m-r-none m-l-none">
        <Col lg={2} md={2} xs={1} className="Content-logo">
          <img src={logo} className="App-logo" alt="logo" />
        </Col>
        <Menu items = {['Acerca de','Que Hacemos', 'Servicios' , 'Contacto', 'Equipo']}   />
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
}*/


  


var durationFn = function(deltaTop) {
    return deltaTop;
};

class App extends Component {

  constructor (props) {
      super(props);
      this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });

    scrollSpy.update();

  }
  scrollToTop() {
    animateScroll.scrollToTop();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render () {
    return (
      <div>
      <div className="App">
        <Row className="App-header m-r-none m-l-none">
          <Col lg={2} md={2} xs={2}  className="Content-logo">
            <img src={logo} className="App-logo" alt="logo" />
          </Col>
          <Col lg={10} md={10} sm={10} className="App-content-link vertical-align hidden-xs hidden-sm">
             <ul>
                  <li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >Acerca de</Link></li>
                  <li><Link activeClass="active" className="test6" to="anchor" spy={true} smooth={true} duration={500}>¿Qué hacemos?</Link></li>
                  <li><Link activeClass="active" className="test7" to="test7" spy={true} smooth={true} duration={durationFn}>Servicios</Link></li>
                  <li> <a onClick={() => animateScroll.scrollTo(100)}>Contacto</a></li>
                  <li> <a onClick={() => animateScroll.scrollToBottom()}>Equipo</a></li>
              </ul>
          </Col>
          <Col xs={8} className={"hidden-lg hidden-md hidden-xl content-menu-wrap" }>
          <i className="material-icons">menu</i>
          </Col>
        </Row>
          <div className="App-body">
        
          </div>
          <div className="App-footer">
          </div>
        <aside className="side-menu">
        <a className="close"><i className="material-icons">close</i></a>
            <ul>
                <li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >Acerca de</Link></li>
                <li><Link activeClass="active" className="test6" to="anchor" spy={true} smooth={true} duration={500}>¿Qué hacemos?</Link></li>
                <li><Link activeClass="active" className="test7" to="test7" spy={true} smooth={true} duration={durationFn}>Servicios</Link></li>
                <li> <a onClick={() => animateScroll.scrollTo(100)}>Contacto</a></li>
                <li> <a onClick={() => animateScroll.scrollToBottom()}>Equipo</a></li>
            </ul>
        </aside>

      </div>


        <Element name="test1" className="element" >
          test 1
        </Element>

        <div id="anchor" className="element">
          test 6 (anchor)
        </div>

        <Link activeClass="active" to="firstInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{display:'inline-block', margin: '20px'}}>
          Go to first element inside container
        </Link>

        <Link activeClass="active" to="secondInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{display:'inline-block', margin: '20px'}}>
          Go to second element inside container
        </Link>
        <Element name="test7" className="element" id="containerElement" style={{
          position: 'relative',
          height:'200px',
          overflow:'scroll',
          marginBottom: '100px'
        }}>
          test 7 (duration and container)

          <Element name="firstInsideContainer" style={{
            marginBottom: '200px'
          }}>
            first element inside container
          </Element>

          <Element name="secondInsideContainer" style={{
            marginBottom: '200px'
          }}>
            second element inside container
          </Element>
        </Element>


        <Element id="same" className="element">
          Two links point to this
        </Element>

        <a onClick={this.scrollToTop}>To the top!</a>

      </div>
    );
  }
};

export default App;

