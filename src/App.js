import React, { Component } from 'react';
import './App.css';
import {Navbar,NavItem,Nav,Jumbotron} from 'react-bootstrap';

const NavbarInstance = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">React-Bootstrap</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="#">Link</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
      </Nav>
    </Navbar>
  );
};

class App extends Component {
  render() {
    return (
      <div class="container">
          <NavbarInstance/>
          <Jumbotron>
            <h1 class="text-center">Hello, world!</h1>
            <h4 class="text-center">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</h4>
          </Jumbotron>
      </div>
    );
  }
}

export default App;
