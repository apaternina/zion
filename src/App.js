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
      this.expandMenu = this.expandMenu.bind(this)
  }

  expandMenu(e) {
    let menuAside = document.querySelector('.aside-menu');
    menuAside.classList.toggle('open');
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
                  <li><Link activeClass="active"  to="about" spy={true} smooth={true} duration={500} >Acerca de</Link></li>
                  <li><Link activeClass="active"  to="whatdo" spy={true} smooth={true} duration={500}>¿Qué hacemos?</Link></li>
                  <li><Link activeClass="active"  to="services" spy={true} smooth={true} duration={durationFn}>Servicios</Link></li>
                  <li><Link activeClass="active"  to="contact" spy={true} smooth={true} duration={durationFn}>Contacto</Link></li>
                  <li><Link activeClass="active"  to="team" spy={true} smooth={true} duration={durationFn}>Equipo</Link></li>
              </ul>
          </Col>
          <Col xs={8} className={"hidden-lg hidden-md hidden-xl content-menu-wrap" }>
            <a onClick={this.expandMenu}>
              <i className="material-icons">menu</i>
            </a>
          </Col>
        </Row>
          <div className="App-body">
        
          </div>
          <div className="App-footer">
          </div>
        <aside className="aside-menu">
        <a className="close" onClick={this.expandMenu}><i className="material-icons">close</i></a>
            <ul>
                <li><Link activeClass="active"  to="about" spy={true} smooth={true} duration={500} >Acerca de</Link></li>
                <li><Link   to="whatdo" spy={true} smooth={true} duration={500}>¿Qué hacemos?</Link></li>
                <li><Link   to="services" spy={true} smooth={true} duration={durationFn}>Servicios</Link></li>
                <li><Link  to="contact" spy={true} smooth={true} duration={durationFn}>Contacto</Link></li>
                <li><Link  to="team" spy={true} smooth={true} duration={durationFn}>Equipo</Link></li>
            </ul>
        </aside>

      </div>


        <Element name="about" className="element" >
         page one
        </Element>

        <Element name="whatdo" className="element" >
          page twoo
        </Element>

        <Element name="services" className="element" >
          page 3
        </Element>

        <Element name="contact" className="element" >
          page 4
        </Element>

        <Element name="team" className="element" >
          page 5
        </Element>

        <div id="anchor" className="element">
          test 6 (anchor)
        </div>


        <a onClick={this.scrollToTop}>To the top!</a>

      </div>
    );
  }
};

export default App;

