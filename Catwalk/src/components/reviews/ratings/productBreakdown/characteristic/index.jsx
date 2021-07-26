import React from 'react';

const chartIzard = {
  Size:[ 'A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'],
  Width: [ 'Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
  Comfort: [ 'Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
  Quality: [ 'Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
  Length: [ 'Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
  Fit: [ 'Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']
};

const Characteristic = ({characteristic, name}) => (
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
      <span className='highest'>{chartIzard[name][0]}</span>
      <span className='lowest'>{chartIzard[name][4]}</span>
    </div>
  </div>
);

export default Characteristic;