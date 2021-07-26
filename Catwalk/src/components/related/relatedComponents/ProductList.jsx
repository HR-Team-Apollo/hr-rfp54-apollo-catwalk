import React from 'react';
import ProductCard from './ProductCard.jsx';

const ProductList = ({testData, isStar}) => (
  <div style = {{display: 'flex', justifyContent: 'flex-start'}}>
    <ProductCard isStar = {isStar} testCard = {testData[0]}/>
    <ProductCard isStar = {isStar} testCard = {testData[0]}/>
    <ProductCard isStar = {isStar} testCard = {testData[0]}/>
    <ProductCard isStar = {isStar} testCard = {testData[0]}/>
  </div>
);

export default ProductList;