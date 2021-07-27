import React from 'react';

const StarBar = ({starPercentage}) => (
  <div style={{
    width: '10rem',
    height: '1rem',
    backgroundImage: `linear-gradient(to right, rgb(105, 105, 105) ${starPercentage}%, rgba(216, 216, 216, 1) ${starPercentage}%)`
  }}></div>
);

export default StarBar;