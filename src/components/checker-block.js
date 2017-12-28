import React from 'react';

const CheckerBlock = (props) => {
  let player1 = {
    1: [2,4,6],
    2: [1,3,5,7],
  }

  let player2 = {
    5: [2,4,6],
    6: [1,3,5,7]
  }

  let {x,y} = props;

  function checkPlayer() {
    if (x < 3) {
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
    return (x == props.indicator[0] && y == props.indicator[1]);
  }
  return (
    <td className={'checker-block '+(props.dark ?'checker-block--dark':'') +
      ' checker-x'+x+' checker-y'+y + (checkPlayer()==1?' checker-block__player1':'') +
      (checkPlayer()==2?' checker-block__player2':'') + (checkIndicator()?' checker-block__active':'')}>
    </td>
  );
};

export default CheckerBlock
