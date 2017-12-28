import React,{Component} from 'react';
import CheckerBlock from './checker-block';

export default class CheckersGame extends Component {
  constructor(props) {
    super(props);
    this.scale = {
      x:8,
      y:5
    }
    this.state = {
      isReset: false
    }
  }

  renderGame() {
    let game = [];
    let flip = false;
    let {x,y} = this.scale;
    console.log(x,y);
    for (let i = 0;i<x;i++){
      // game.push(<tr>);
      for(let b = 0;b<y;b++) {
        if(flip) {
          game.push(<CheckerBlock key={'checker'+b+i} dark/>);
        } else {
          game.push(<CheckerBlock key={'checker'+b+i}/>);
        }
        flip = !flip;
      }
      //game.push(</tr>);
      console.log('push')
    }
    return game;
  }

  resetGame() {
    this.setState({isReset:true});
  }

  render() {
    return (
        <table>
          {this.renderGame()}
        </table>
      );
  }
}
