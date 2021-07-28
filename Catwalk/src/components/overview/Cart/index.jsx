import React from 'react';

const Cart = () => (
  <div id='cart'>
    <select className='size-selection'>
      <option value='Select Size'>Select Size</option>
    </select>

    <select className='quantity-selection'>
      <option value='1'>1</option>
    </select>

    <button className='add-to-bag'>Add to bag</button>
    <button className='add-to-wishlist'>♥</button>
  </div>
);

export default Cart;