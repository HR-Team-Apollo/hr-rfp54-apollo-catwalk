import React from 'react';
import Cart from './Cart';
import Gallery from './Gallery';
import Product from './Product';
import StyleSelector from './StyleSelector';
import ProductOverview from './Product/ProductOverview';

const Overview = () => (
  <div id='overview'>
    <Gallery />
    <Product />
    <StyleSelector />
    <Cart />
    <ProductOverview />
  </div>
);

export default Overview;