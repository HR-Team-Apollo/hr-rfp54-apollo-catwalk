import React from 'react';
import Thumbnail from './Thumbnail';

const Gallery = () => (
  <div id='gallery'>
    <ul>
      <Thumbnail />
    </ul>
    <img src='https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/mens-wr-pdp_7c4197e6-4ae7-4c20-8c65-54dee3b077bc.jpg?v=1622651375' className='gallery-main-image' />
  </div>
);

export default Gallery;