import React from 'react';

const CheckerBlock = ({player1,player2,x,y,indicator,dark,locked}) => {

  /**
   * @return {number} 1 for player 1, 2 for player 2 and 0 if none
   */
  function checkPlayer() {
    if(player1[x].indexOf(y)!==-1) {
      return 1;
    }
    if(player2[x].indexOf(y)!==-1) {
      return 2;
    }
    return 0;
  }

  function checkIndicator() {
    return (x === indicator[0] && y === indicator[1]);
  }

  /**
   * @return {string} the classes that define the appearnce of this block
   */
  function checkClasses() {
    let classes = [];

    // check if this block is dark
    if (dark) {
      classes.push('checker-block--dark');
    }

    // check if a piece should be on this block
    let player = checkPlayer();
    if (player===1) {
      classes.push('checker-block__player1');
    } else if (player===2) {
      classes.push('checker-block__player2');
    }

    // check if indicator is on this piece
    if (checkIndicator()) {
      classes.push('checker-block__active');
    }

    return classes.join(' ');

    // unecessary for now +' checker-x'+x+' checker-y'+y
  }

  return <div className={'checker-block '+ checkClasses()}></div>;
};

export default CheckerBlock;
