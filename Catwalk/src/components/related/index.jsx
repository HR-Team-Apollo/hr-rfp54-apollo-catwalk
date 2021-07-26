import React from 'react';
import ProductList from './relatedComponents/ProductList.jsx';
import testData from './testData.js';

const Related = () => (
  <div>
    <h2>Related Products</h2>
    <ProductList testData = {testData}/>
    <h2>Your Outfit</h2>
    <ProductList testData = {testData}/>
  </div>
);

export default Related;