import React from 'react';
import ProductCard from './ProductCard.jsx';
import outfitData from '../outfitData.js';
import AddOutfitCard from './AddOutfitCard.jsx';

const YourOutfitList = () => (
  <div style = {{display: 'flex', justifyContent: 'flex-start'}}>
    {
      outfitData.map((outfit, index) => {
        return <ProductCard isStar = {false} key = {index} testCard = {outfit} />;
      })
    }
    <AddOutfitCard />
  </div>
);

export default YourOutfitList;