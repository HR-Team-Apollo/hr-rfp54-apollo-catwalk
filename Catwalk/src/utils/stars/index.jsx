import React from 'react';

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
      backgroundImage: `linear-gradient(to right, rgb(64, 160, 0) ${(rating/5 * 100)}%, #ffffff00 ${(rating/5 * 100)}%)`,
      WebkitTextFillColor: 'transparent',
    }}>
      <i className='fa fa-star'></i>
      <i className='fa fa-star'></i>
      <i className='fa fa-star'></i>
      <i className='fa fa-star'></i>
      <i className='fa fa-star'></i>
    </span>
    <span style={{
      color: '#696969'
    }}>
      <i className='fa fa-star-o'></i>
      <i className='fa fa-star-o'></i>
      <i className='fa fa-star-o'></i>
      <i className='fa fa-star-o'></i>
      <i className='fa fa-star-o'></i>

    </span>
  </div>
);

export default Stars;