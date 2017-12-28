import React, { Component } from 'react';
import './App.css';
import {Jumbotron,Button,ButtonToolbar} from 'react-bootstrap';
import CheckersGame from './components/checkers-game';

const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };

class App extends Component {
  render() {
    return (
      <div className="container">
          <Jumbotron>
            <h1 className="text-center"><a href="#">CHECKERS</a></h1>
            <ButtonToolbar className="text-center" style={wellStyles}>
              {/* <Button bsStyle="success" bsSize="large" block>Play</Button> */}
              {/* <Button bsStyle="warning" bsSize="large" block>Pause</Button> */}
              <Button bsStyle="danger" bsSize="large" block>Reset</Button>
            </ButtonToolbar>
            <CheckersGame/>
          </Jumbotron>
      </div>
    );
  }
}

export default App;
