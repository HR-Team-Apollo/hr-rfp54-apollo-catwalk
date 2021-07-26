import React from 'react';
import mockData from './reviewData.js';

import Ratings from './ratings';
import ReviewList from './reviewList';

const Reviews = () => (
  <div className="reviews">
    <h2>Ratings &amp; Reviews</h2>
    <div style={{display: 'flex'}}>
      <Ratings data={mockData}/>
      <ReviewList data={mockData}/>
    </div>
  </div>
);

export default Reviews;