import React from 'react';
import mockData from './reviewData.js';

import Ratings from './ratings';
import ReviewList from './reviewList';

const Reviews = () => (
  <div className="reviews">
    <h2>Ratings &amp; Reviews</h2>
    <div style={{display: 'flex'}}>
      {/* what all does ratings need? */}
      <Ratings ratings={mockData}/>
      <ReviewList reviews={mockData}/>
    </div>
  </div>
);

export default Reviews;