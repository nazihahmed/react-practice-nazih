import React from 'react';

const CheckerBlock = (props) => {
  return (
    <td className={'checker-block '+(props.dark ?'checker-block--dark':'') + ' checker-x'+props.x+' checker-y'+props.y}></td>
  );
};

export default CheckerBlock
