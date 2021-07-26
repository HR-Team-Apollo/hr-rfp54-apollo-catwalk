import React from 'react';
import RatingBreakdown from './ratingBreakdown';
import ProductBreakdown from './productBreakdown';

const Ratings = () => (
  <div className="ratings">
    <p>Ratings</p>
    <RatingBreakdown/>
    <ProductBreakdown/>
  </div>
);

export default Ratings;