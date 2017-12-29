import React,{Component} from 'react';
import CheckerBlock from './checker-block';
import {Button} from 'react-bootstrap';

export default class CheckersGame extends Component {
  constructor(props) {
    super(props);
    // the size of the board
    this.scale = {
      x:8,
      y:8
    }
    this.state = this.getInitialState();
  }
  getInitialState(){
    const initialState = {
      indicator: [4,4],
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
      currentPlayer: 1
    };
    return initialState;
  }

  checkPiece() {
    let {indicator,player1,player2} = this.state;
    // console.log(indicator,player1,player2);
    if (player1[indicator[0]].indexOf(indicator[1]) !== -1) {
      return 1;
    } else if (player2[indicator[0]].indexOf(indicator[1]) !== -1) {
      return 2;
    }
    return 0;
  }

  movePlayer(x=0,y=0) {
    let {indicator,currentPlayer} = this.state;
    this.setState((state) => {
      let player = 'player'+currentPlayer;
      let arr = state[player][indicator[0]];
      arr.splice(arr.indexOf(indicator[1]), 1);
      state[player][indicator[0]+x].push(indicator[1]+y);
      return state;
    });
  }

  moveIndicator(x=0,y=0) {
    let {indicator} = this.state;
    this.setState({'indicator':[indicator[0]+x,indicator[1]+y]});
  }

  handleKeyDown(e) {
    // the allowed key codes
    let keys = {
      37:'left', // arrow left
      65:'left', // A key
      39:'right',// arrow right
      68:'right',// D key
      38:'up',// arrow up
      87:'up',// W key
      40:'down',// arrow down
      83:'down',// S key
      13:'enter'// enter key
    }

    let {indicator,locked,currentPlayer} = this.state;
    let {x,y} = this.scale;
    let currentP;
    let movePlayer = this.movePlayer.bind(this);
    let moveIndicator = this.moveIndicator.bind(this);
    switch(keys[e.keyCode]){
      case 'left':
        currentP = this.checkPiece();
        // if more than min allow to move
        if (indicator[1]>1) {
          if (locked && currentP === currentPlayer) {
            // piece is allowed to move
            movePlayer(0,-1);
          }
          moveIndicator(0,-1);
        }
        break;
      case 'right':
        currentP = this.checkPiece();
        // if less than max allow to move
        if (indicator[1]<y) {
          if (locked && currentP === currentPlayer) {
            // piece is allowed to move
            movePlayer(0,1);
          }
          moveIndicator(0,1);
        }
        break;
      case 'up':
        currentP = this.checkPiece();
        // if more than min allow to move
        if (indicator[0]>1) {
          if (locked && currentP === currentPlayer) {
            // piece is allowed to move
            movePlayer(-1,0);
          }
          moveIndicator(-1,0);
        }
        break;
      case 'down':
        currentP = this.checkPiece();
        // if less than max allow to move
        if (indicator[0]<x) {
          if (locked && currentP === currentPlayer) {
            // piece is allowed to move
            movePlayer(1,0);
          }
          moveIndicator(1,0);
        }
        break;
      case 'enter':
        // switch the locked state on each enter
        if(this.state.locked) {
          this.setState((state) => {
            // switch current player
            state.currentPlayer = (state.currentPlayer===1) ? 2 : 1;
            state.locked = !state.locked;
            return state;
          });
        }
        currentP = this.checkPiece();
        if (!locked && currentP === currentPlayer) {
          this.setState((state)=> {
            state.locked = !state.locked
            return state;
          });
        }
        break;
      default:
        console.log('else',e.keyCode);
    }
  }
  componentWillMount() {
    document.addEventListener("keydown", this.handleKeyDown.bind(this), false);
  }

  // assemble the board
  renderGame() {
    let game = [];// array of all checker blocks
    let flip = false;
    let {x,y} = this.scale;// the size of the board

    for (let i = 0;i<x;i++){
      for(let b = 0;b<y;b++) {
        game.push(<CheckerBlock key={'checker'+b+i} x={i+1} y={b+1} dark={flip?true:false} {...this.state} />);
        // flip logic for dark blocks
        flip = !flip;
        if(b === y-1) {
          flip = !flip;
        }
      }
    }
    return game;
  }

  resetGame() {
    this.setState(this.getInitialState());
  }

  render() {
    return (
        <div className="overall-container">
          <Button bsStyle="danger" className="reset-button" bsSize="large" onClick={this.resetGame.bind(this)}>Reset</Button>
          <p className="text-center">Current Player: {this.state.currentPlayer===1?'Red':'White'}, lock: {this.state.locked?'locked':'unlocked'}</p>
          <div className="checker-block__board">
                {this.renderGame()}
          </div>
        </div>
      );
  }
}
