import React from 'react';
import CompareCharacteristic from './CompareCharacteristic.jsx';

const curChars = [
  {
    'GMO and Pesticide-free': {
      id: 1,
      value: true
    }
  },
  {
    'Made with 100% Genetic Modification': {
      id: 2,
      value: true
    }
  },
  {
    'It doesn\'t matter': {
      id: 3,
      value: true
    }
  },
  {
    'Number of Items': {
      id: 7,
      value: 9
    }
  },
];

const compareChars = [
  {
    'GMO and Pesticide-free': {
      id: 4,
      value: true
    }
  },
  {
    'Made with 100% Genetic Modification': {
      id: 5,
      value: true
    }
  },
  {
    'Uses React Hooks and Redux': {
      id: 6,
      value: true
    }
  },
  {
    'Number of Items': {
      id: 8,
      value: 9546
    }
  }
];

const CompareModal = () => {
  return (
    <div>
      <h4 style = {{textAlign: 'center'}}>Comparing</h4>
      <h5 style = {{display: 'inline', margin: '0 0 0 2%'}}>Product Short Name</h5>
      <h5 style = {{display: 'inline', margin: '0 0 0 48%'}}>Product Short Name</h5>
      {
        curChars.map(curObj => {
          let keyName = Object.keys(curObj)[0];
          let compareIndex;
          for (let i = 0; i < compareChars.length; i++) {
            if (keyName === Object.keys(compareChars[i])[0]) {
              compareIndex = i;
              break;
            }
          }
          return <CompareCharacteristic key = {curObj[keyName].id} name = {keyName} curValue = {curObj[keyName].value} compareValue = {compareIndex !== undefined ? compareChars[compareIndex][keyName].value : ''} />;
        })
      }
      {
        compareChars.filter(compareObj => {
          let keyName = Object.keys(compareObj)[0];
          let isRendered = false;
          for (let i = 0; i < curChars.length; i++) {
            if (curChars[i].hasOwnProperty(keyName)) {
              isRendered = true;
              break;
            }
          }
          return !isRendered;
        }).map(compareObj => {
          let keyName = Object.keys(compareObj)[0];
          return <CompareCharacteristic key = {compareObj[keyName].id} name = {keyName} curValue = {''} compareValue = {compareObj[keyName].value} />;
        })
      }
    </div>
  );
};

export default CompareModal;