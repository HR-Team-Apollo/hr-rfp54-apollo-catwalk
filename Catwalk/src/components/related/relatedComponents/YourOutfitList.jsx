import React from 'react';
import ProductCard from './ProductCard.jsx';
import outfitData from '../outfitData.js';

const YourOutfitList = () => (
  <div style = {{display: 'flex', justifyContent: 'flex-start'}}>
    {
      outfitData.map((outfit, index) => {
        return <ProductCard isStar = {false} key = {index} testCard = {outfit} />;
      })
    }
  </div>
);

export default YourOutfitList;