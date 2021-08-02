import React from 'react';

const StarBar = ({starPercentage}) => (
  <div
    style={{
      width: '10rem',
      height: '.75rem',
      margin: '0 .25rem',
      backgroundImage: `linear-gradient(to right, rgb(64, 160, 0) ${starPercentage}%, rgba(216, 216, 216, 1) ${starPercentage}%)`
    }}></div>
);

export default StarBar;