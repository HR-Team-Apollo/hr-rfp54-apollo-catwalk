import React from 'react';
import Stars from '../../../../utils/stars';
import StarBar from './starBar';

const RatingBreakdown = () => (
  <div className="ratingBreakdown">
    <span className='rating-average'>2.5</span>
    <Stars rating='4.5'/>
    <div>
      <span>100</span>% of reviews recommend this product
    </div>
    <div>5 stars <StarBar/></div>
    <div>4 stars <StarBar/></div>
    <div>3 stars <StarBar/></div>
    <div>2 stars <StarBar/></div>
    <div>1 stars <StarBar/></div>
  </div>
);

export default RatingBreakdown;