import React from 'react';
import Stars from '../../../utils/stars';

const Product = () => (
  <div id='product-info'>
    <Stars rating='3.75'  />
    <a href='#ratings' className='overview-rating-link'>Read number reviews</a>
    <h5 className='product-category'>Category</h5>
    <h2 className='product-title'>Name of Product</h2>
    <div className='product-price'>$369</div>
  </div>
);

export default Product;