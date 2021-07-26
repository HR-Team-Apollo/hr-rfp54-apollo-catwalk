import React from 'react';
import Cart from './Cart';
import Gallery from './Gallery';
import Product from './Product';
import StyleSelector from './StyleSelector';

const Overview = () => (
  <div>
    <Cart />
    <Gallery />
    <Product />
    <StyleSelector />
  </div>
);

export default Overview;