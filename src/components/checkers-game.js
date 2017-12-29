import React,{Component} from 'react';
import CheckerBlock from './checker-block';
import {Button,ButtonToolbar} from 'react-bootstrap';

const defaults = {
  indicator: [3,4],
  locked: false,
  player1: {
    1: [2,4,6,8],
    2: [1,3,5,7],
    3: [2,4,6,8],
    4: [],
    5: [],
    6: [],
    7: [],
    8: []
  },
  player2: {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [1,3,5,7],
    7: [2,4,6,8],
    8: [1,3,5,7],
  },
  current: []
};

export default class CheckersGame extends Component {
  constructor(props) {
    super(props);
    this.scale = {
      x:8,
      y:8
    }
    this.state = defaults;
  }

  handleKeyDown(e) {
    let keys = {
      37:'left',
      39:'right',
      38:'up',
      40:'down',
      13:'enter'
    }

    let {indicator} = this.state;
    let {x,y} = this.scale;
    switch(keys[e.keyCode]){
      case 'left':
        // if more than min allow to move
        if (indicator[1]>1) {
          this.setState({'indicator':[indicator[0],indicator[1]-1]});
        }
        break;
      case 'right':
        // if less than max allow to move
        if (indicator[1]<y) {
          this.setState({'indicator':[indicator[0],indicator[1]+1]});
        }
        break;
      case 'up':
        // if more than min allow to move
        if (indicator[0]>1) {
          this.setState({'indicator':[indicator[0]-1,indicator[1]]});
        }
        break;
      case 'down':
        // if less than max allow to move
        if (indicator[0]<x) {
          this.setState({'indicator':[indicator[0]+1,indicator[1]]});
        }
        break;
      case 'enter':
        // switch the locked state on each enter
        this.setState({'locked':!this.state.locked});
        break;
      default:
        console.log('else',e.keyCode);
    }
  }
  componentWillMount() {
    document.addEventListener("keydown", this.handleKeyDown.bind(this), false);
  }
  renderGame() {
    let game = [];
    let flip = false;
    let {x,y} = this.scale;
    for (let i = 0;i<x;i++){
      for(let b = 0;b<y;b++) {
        if(flip) {
          game.push(<CheckerBlock key={'checker'+b+i} x={i+1} y={b+1} dark {...this.state} />);
        } else {
          game.push(<CheckerBlock key={'checker'+b+i} x={i+1} y={b+1} {...this.state} />);
        }
        flip = !flip;
        if(b === y-1) {
          flip = !flip;
        }
      }
    }
    return game;
  }

  resetGame() {
    this.setState(defaults);
  }

  render() {
    return (
        <div>
          <ButtonToolbar className="text-center reset-button">
            <Button bsStyle="danger" bsSize="large" onClick={this.resetGame.bind(this)} block>Reset</Button>
          </ButtonToolbar>
          <div className="checker-block__board">
                {this.renderGame()}
          </div>
        </div>
      );
  }
}
