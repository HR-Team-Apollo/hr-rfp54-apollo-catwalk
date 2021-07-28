import React from 'react';
import AppContext from '../../../../../appContext.js';

const Characteristic = ({characteristic, name}) => (
  <AppContext.Consumer>
    {({characteristicsChart}) => (
      <div className='characteristic'>
        {name}
        <div className='charBar' style={{
          position: 'relative',
          width: '100%',
          height: '.5rem',
          backgroundColor: '#d8d8d8'
        }}>
          {/* TODO: divide the charBar into 4 segements */}
          <span style={{
            position: 'absolute',
            top: '-.5rem',
            left: `${(characteristic.value/5)*100}%`,
            WebkitBackgroundClip: 'text',
            backgroundColor: '#696969',
            WebkitTextFillColor: 'transparent'
          }}>🔻</span>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <span className='highest'>{characteristicsChart[name][0]}</span>
          <span className='lowest'>{characteristicsChart[name][4]}</span>
        </div>
      </div>
    )}
</AppContext.Consumer>
);

export default Characteristic;