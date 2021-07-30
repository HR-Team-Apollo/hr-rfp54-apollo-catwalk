import React from 'react';
import AppContext from '../../../../../appContext.js';


const Characteristic = ({characteristic, name}) => {
  return (
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
            <span style={{
              position: 'absolute',
              top: '-.5rem',
              left: `${(characteristic.value/5)*100}%`,
              WebkitBackgroundClip: 'text',
              backgroundColor: 'rgb(64, 160, 0)',
              WebkitTextFillColor: 'transparent'
            }}>🔻</span>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '1rem',
            fontSize: '.5rem'
          }}>
            <span className='highest'>{characteristicsChart[name][0]}</span>
            <span className='lowest'>{characteristicsChart[name][4]}</span>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <span className='highest'>{characteristicsChart ? characteristicsChart[Object.keys(characteristicsChart)[0]].value : 'Loading'}</span>
            <span className='lowest'>{characteristicsChart ? characteristicsChart[Object.keys(characteristicsChart)[0]].value : 'Loading'}</span>
          </div>
        </div>
      )}
    </AppContext.Consumer>
  );
}

export default Characteristic;