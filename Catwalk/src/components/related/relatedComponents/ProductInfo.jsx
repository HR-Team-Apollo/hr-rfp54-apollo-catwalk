import React from 'react';
import Stars from '../../../utils/stars';

const ProductInfo = ({testBody}) => (
  <div>
    <h5 style = {{margin: '0.2em'}}>{testBody.category}</h5>
    <h5 style = {{margin: '0.2em'}}>{testBody.name}</h5>
    <h5 style = {{margin: '0.2em'}}>{testBody.price}</h5>
    <div style = {{fontSize: '0.8em', margin: '0'}}>
      <Stars rating = {testBody.starRating} />
    </div>
  </div>
);

export default ProductInfo;