import React from 'react';
import ProductInfo from './ProductInfo.jsx';
import ActionButton from './ActionButton.jsx';

const ProductCard = ({testCard, isStar}) => {
  if (isStar) {
    return (
      <div style = {{border: '1.5px solid black', flexBasis: '10.5em', margin: '0 1.4%', position: 'relative'}}>
        <ActionButton isStar = {isStar}/>
        <img src={testCard.imageUrl} style={{width: '100%', height: '9em'}}></img>
        <ProductInfo testBody = {testCard.body} />
      </div>
    );
  } else {
    return (
      <div style = {{border: '1.5px solid black', flexBasis: '10.5em', margin: '0 1.4%', position: 'relative'}}>
        <ActionButton isStar = {isStar}/>
        <img src={testCard.imageUrl} style={{width: '100%', height: '9em'}}></img>
        <ProductInfo testBody = {testCard.body} />
      </div>
    );
  }
};

export default ProductCard;