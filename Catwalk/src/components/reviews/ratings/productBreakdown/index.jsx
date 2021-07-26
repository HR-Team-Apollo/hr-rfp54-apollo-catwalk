import React from 'react';
import Characteristic from './characteristic';

let characteristics = {
  "Size": {
    "id": 14,
    "value": "4.0000"
  },
  "Width": {
    "id": 15,
    "value": "3.5000"
  },
  "Comfort": {
    "id": 16,
    "value": "4.0000"
  }
};

const ProductBreakdown = () => (
  <div className= 'productBreakdown'>
    {
      Object.keys(characteristics).map(char=>(
        <Characteristic characteristic={characteristics[char]} name={char} key={characteristics[char].id}/>
      ))
    }
  </div>
);

export default ProductBreakdown;