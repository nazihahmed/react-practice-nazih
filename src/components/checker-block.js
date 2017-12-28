import React from 'react';

const CheckerBlock = (props) => {
  let {player1,player2,x,y,indicator,dark,readyToMove} = props;

  function checkPlayer() {
    if (x < 4) {
      if(player1[x].indexOf(y)!==-1) {
        return 1;
      } else {
        return 0;
      }
    } else if (x>4){
      if(player2[x].indexOf(y)!==-1) {
        return 2;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  }

  function checkIndicator() {
    return (x == indicator[0] && y == indicator[1]);
  }
  var once = false;

  if(props.locked&&checkIndicator()&&checkPlayer()>0.1&&!once) {
    let player = checkPlayer();
    once = true;
    console.log(`player: ${player}, x: ${x} y:${y} ${once}`);
  }

  return (
    <td className={'checker-block '+(dark ?'checker-block--dark':'') +
      ' checker-x'+x+' checker-y'+y + (checkPlayer()==1?' checker-block__player1':'') +
      (checkPlayer()==2?' checker-block__player2':'') + (checkIndicator()?' checker-block__active':'')}>
    </td>
  );
};

export default CheckerBlock
