import React from 'react';
import RatingBreakdown from './ratingBreakdown';
import ProductBreakdown from './productBreakdown';

const Ratings = ({ratings, filter}) => (
  <div className="ratings" style={{marginRight: '2rem'}}>
    <RatingBreakdown filter={filter} ratings={ratings.ratings} recommendations={ratings.recommended}/>
    <ProductBreakdown characteristics={ratings.characteristics}/>
  </div>
);
export default Ratings;