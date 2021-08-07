import React from 'react';
import Stars from '../../../utils/stars';

const ProductInfo = ({card}) => (
  <div style={{backgroundColor: 'white'}}>
    <h5 style = {{margin: '0.2em'}}>{card.category.toUpperCase()}</h5>
    <h5 style = {{margin: '0.2em'}}>{card.name}</h5>
    <h5 style = {{margin: '0.2em'}}>${card.original_price}</h5>
    <div style = {{fontSize: '0.8em', margin: '0'}}>
      <Stars rating = {card.average_rating} />
    </div>
  </div>
);

export default ProductInfo;