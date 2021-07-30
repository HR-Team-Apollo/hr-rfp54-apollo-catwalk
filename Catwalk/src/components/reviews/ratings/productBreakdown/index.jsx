import React from 'react';
import Characteristic from './characteristic';

const ProductBreakdown = ({characteristics}) => (
  <div className= 'productBreakdown'>
    {
      Object.keys(characteristics).map(char=>(
        <Characteristic characteristic={characteristics[char]} name={char} key={characteristics[char].id}/>
      ))
    }
  </div>
);

export default ProductBreakdown;