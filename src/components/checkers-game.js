import React,{Component} from 'react';
import CheckerBlock from './checker-block';

export default class CheckersGame extends Component {
  constructor(props) {
    super(props);
    this.scale = {
      x:6,
      y:7
    }
    this.state = {
      isReset: false
    }
  }

  initializePlayers() {
    let positions = [];
  }

  renderGame() {
    let game = [];
    let flip = false;
    let {x,y} = this.scale;
    console.log(x,y);
    for (let i = 0;i<x;i++){
      for(let b = 0;b<y;b++) {
        if(flip) {
          game.push(<CheckerBlock key={'checker'+b+i} x={i+1} y={b+1} dark/>);
        } else {
          game.push(<CheckerBlock key={'checker'+b+i} x={i+1} y={b+1}/>);
        }
        flip = !flip;
      }
      // flip = true;
    }
    return game;
  }

  resetGame() {
    this.setState({isReset:true});
  }

  render() {
    return (
        <table className="checker-block__board">
          <tbody>
            <tr>
              {this.renderGame()}
            </tr>
          </tbody>
        </table>
      );
  }
}
