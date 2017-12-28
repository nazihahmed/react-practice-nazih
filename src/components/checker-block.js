import React from 'react';

const CheckerBlock = (props) => {
  return (
    <td className={'checker-block '+(props.dark ?'checker-block--dark':'')}></td>
  );
};

export default CheckerBlock
