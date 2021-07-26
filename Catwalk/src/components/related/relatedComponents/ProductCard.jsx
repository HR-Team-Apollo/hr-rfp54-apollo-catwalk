import React from 'react';
import ProductInfo from './ProductInfo.jsx';

const ProductCard = ({testCard}) => (
  <div style = {{border: '1.5px solid black', flexBasis: '10.5em', margin: '0 1.4%'}}>
    <img src={testCard.imageUrl} style={{width: '100%', height: '9em'}}></img>
    <ProductInfo testBody = {testCard.body} />
  </div>
);

export default ProductCard;