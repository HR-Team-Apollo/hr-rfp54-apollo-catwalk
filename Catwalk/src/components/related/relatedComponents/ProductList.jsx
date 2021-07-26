import React from 'react';
import ProductCard from './ProductCard.jsx';

const ProductList = ({testData}) => (
  <div style = {{display: 'flex', justifyContent: 'flex-start'}}>
    <ProductCard testCard = {testData[0]}/>
    <ProductCard testCard = {testData[0]}/>
    <ProductCard testCard = {testData[0]}/>
    <ProductCard testCard = {testData[0]}/>
  </div>
);

export default ProductList;