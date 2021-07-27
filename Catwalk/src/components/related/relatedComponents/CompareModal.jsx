import React from 'react';
import CompareCharacteristic from './CompareCharacteristic.jsx';

const curData = [
  {
    name: 'GMO and Pesticide-free',
    value: true
  },
  {
    name: 'Made with 100% Genetic Modification',
    value: true
  },
  {
    name: 'It doesn\'t matter',
    value: true
  }
];

const compareData = [
  {
    name: 'GMO and Pesticide-free',
    value: true
  },
  {
    name: 'Made with 100% Genetic Modification',
    value: true
  },
  {
    name: 'Uses React Hooks and Redux',
    value: true
  }
];

const CompareModal = () => (
  <div>
    <h4 style = {{textAlign: 'center'}}>Comparing</h4>
    <h5 style = {{display: 'inline', margin: '0 0 0 2%'}}>Product Short Name</h5>
    <h5 style = {{display: 'inline', margin: '0 0 0 48%'}}>Product Short Name</h5>
    <CompareCharacteristic />
    <CompareCharacteristic />
    <CompareCharacteristic />
  </div>
);

export default CompareModal;