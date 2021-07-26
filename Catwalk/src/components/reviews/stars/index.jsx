import React from 'react';

//convert rating to percentage and fill in stars based on that
//possible solution: https://github.com/FortAwesome/Font-Awesome/issues/4147
const Stars = ({rating}) => (
  <div style={{
    position: 'relative',
    width: '7rem',
    height: '2rem'
  }}>
    <span style={{
      position: 'absolute',
      top: '0',
      left: '0',
      WebkitBackgroundClip: 'text',
      backgroundImage: `linear-gradient(to right, #696969 ${(rating/5 * 100)}%, #ffffff00 50%)`,
      WebkitTextFillColor: 'transparent',
    }}><i className='fa fa-car'></i>
      ⭐️⭐️⭐️⭐️⭐️
    </span>
    <span style={{
    }}>
      ⭐️⭐️⭐️⭐️⭐️
    </span>
  </div>
);

export default Stars;