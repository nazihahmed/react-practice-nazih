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
      isReset: false,
      indicator: [3,4],
      locked: false
    }
  }
  handleKeyDown(e) {
    let keys = {
      37:'left',
      39:'right',
      38:'up',
      40:'down',
      13:'enter'
    }

    let indicator = this.state.indicator;
    let {x,y} = this.scale;
    switch(keys[e.keyCode]){
      case 'left':
        if (indicator[1]>1) {
          this.setState({'indicator':[indicator[0],indicator[1]-1]});
        }
        break;
      case 'right':
        if (indicator[1]<y) {
          this.setState({'indicator':[indicator[0],indicator[1]+1]});
        }
        break;
      case 'up':
        if (indicator[0]>1) {
          this.setState({'indicator':[indicator[0]-1,indicator[1]]});
        }
        break;
      case 'down':
        if (indicator[0]<x) {
          this.setState({'indicator':[indicator[0]+1,indicator[1]]});
        }
        break;
      case 'enter':
        console.log('lock this stone to move it');
        this.setState({'locked':!this.state.locked});
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
    console.log(x,y);
    for (let i = 0;i<x;i++){
      for(let b = 0;b<y;b++) {
        if(flip) {
          game.push(<CheckerBlock key={'checker'+b+i} x={i+1} y={b+1} dark indicator={this.state.indicator}/>);
        } else {
          game.push(<CheckerBlock key={'checker'+b+i} x={i+1} y={b+1} indicator={this.state.indicator}/>);
        }
        flip = !flip;
      }
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
