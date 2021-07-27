import React from 'react';
import ProductCard from './ProductCard.jsx';
import testData from '../testData.js';

const ProductList = () => (
  <div style = {{display: 'flex', justifyContent: 'flex-start'}}>
    {
      testData.map((card, index) => {
        return <ProductCard key = {index} isStar = {true} testCard = {card} />;
      })
    }
  </div>
);

export default ProductList;