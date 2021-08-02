import React from 'react';
import CompareCharacteristic from './CompareCharacteristic.jsx';
import AppContext from '../../../appContext.js';

// const curChars = [
//   {
//     'GMO and Pesticide-free': {
//       id: 1,
//       value: true
//     }
//   },
//   {
//     'Made with 100% Genetic Modification': {
//       id: 2,
//       value: true
//     }
//   },
//   {
//     'It doesn\'t matter': {
//       id: 3,
//       value: true
//     }
//   },
//   {
//     'Number of Items': {
//       id: 7,
//       value: 9
//     }
//   },
// ];

// const compareChars = [
//   {
//     'GMO and Pesticide-free': {
//       id: 4,
//       value: true
//     }
//   },
//   {
//     'Made with 100% Genetic Modification': {
//       id: 5,
//       value: true
//     }
//   },
//   {
//     'Uses React Hooks and Redux': {
//       id: 6,
//       value: true
//     }
//   },
//   {
//     'Number of Items': {
//       id: 8,
//       value: 9546
//     }
//   }
// ];

const convertToArray = (object) => {
  let results = [];
  for (let key in object) {
    let name = key;
    results.push({[name]: object[key]});
  }
  return results;
};

const CompareModal = ({compareChars}) => {
  let compareName = compareChars.name;
  compareChars = convertToArray(compareChars.characteristics);
  return (
    <AppContext.Consumer>
      {
        ({characteristicsChart, product}) => (
          <div style = {{width: '27rem'}}>
            <h4 style = {{textAlign: 'center'}}>Comparing</h4>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <h5 style = {{display: 'inline', margin: '0 0 0 0', flex: '1'}}>{product.name}</h5>
              <h5 style = {{display: 'inline', margin: '0 0 0 0', flex: '1', textAlign: 'right'}}>{compareName}</h5>
            </div>
            {
              convertToArray(characteristicsChart).map(curObj => {
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
                let curChars = convertToArray(characteristicsChart);
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
        )
      }
    </AppContext.Consumer>
  );
};

export default CompareModal;