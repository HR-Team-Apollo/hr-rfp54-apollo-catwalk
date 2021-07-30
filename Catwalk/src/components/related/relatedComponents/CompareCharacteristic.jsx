import React from 'react';

const CompareCharacteristic = ({name, curValue, compareValue}) => (
  <div style = {{display: 'flex', justifyContent: 'space-between'}}>
    <h5 style = {{flex: '1', margin: '3% 0 0 2%'}}>{typeof curValue === 'boolean' ? <i className="fa fa-check"></i> : (Math.round((curValue * 10)) / 10).toString()}</h5>
    <h5 style = {{margin: '3% 0 0 0'}}>{name}</h5>
    <h5 style = {{flex: '1', margin: '3% 2% 0 0', textAlign: 'right'}}>{typeof compareValue === 'boolean' ? <i className="fa fa-check"></i>  : (Math.round((compareValue * 10)) / 10).toString()}</h5>
  </div>
);

export default CompareCharacteristic;