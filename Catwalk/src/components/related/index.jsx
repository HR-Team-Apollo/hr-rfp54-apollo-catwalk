import React from 'react';
import ProductList from './relatedComponents/ProductList.jsx';
import YourOutfitList from './relatedComponents/YourOutfitList.jsx';

const Related = () => (
  <div>
    <h2>Related Products</h2>
    <ProductList />
    <h2>Your Outfit</h2>
    <YourOutfitList />
  </div>
);

export default Related;