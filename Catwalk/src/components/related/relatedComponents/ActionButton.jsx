import React from 'react';

const ActionButton = ({isStar}) => {
  if (isStar) {
    return (
      <div style = {{position: 'absolute', right: '0.5em', top: '0.5em', color: 'yellow'}}>
        <i className='fa fa-star-o'></i>
      </div>
    );
  } else {
    return (
      <div style = {{position: 'absolute', right: '0.5em', top: '0.5em', color: 'red', fontFamily: 'arial'}}>
        <span>X</span>
      </div>
    );
  }
};

export default ActionButton;