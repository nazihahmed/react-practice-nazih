import React, { Component } from 'react';
import './App.css';
import {Jumbotron} from 'react-bootstrap';
import CheckersGame from './components/checkers-game';

class App extends Component {
  render() {
    return (
      <div className="container">
          <Jumbotron>
            <h1 className="text-center">CHECKERS</h1>
            <CheckersGame/>
          </Jumbotron>
      </div>
    );
  }
}

export default App;
