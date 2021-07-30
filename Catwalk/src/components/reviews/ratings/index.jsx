import React from 'react';
import RatingBreakdown from './ratingBreakdown';
import ProductBreakdown from './productBreakdown';

const Ratings = ({ratings}) => (
  <div className="ratings" style={{marginRight: '2rem'}}>
    <RatingBreakdown ratings={ratings.ratings} recommendations={ratings.recommended}/>
    <ProductBreakdown characteristics={ratings.characteristics}/>
  </div>
);
export default Ratings;