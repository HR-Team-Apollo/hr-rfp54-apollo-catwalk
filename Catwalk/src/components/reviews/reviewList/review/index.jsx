import React from 'react';
import Stars from '../../stars';

const Review = () => (
  <div className='review' style={{display: 'block'}}>
    <div className='review-header' style={{display: 'flex', justifyContent: 'space-between'}}>
      <Stars rating='3'/>
      <div>
        <span className='reviewer_name'>shortandsweeet</span>
        <span className='date'>2019-04-14T00:00:00.000Z</span>
      </div>
    </div>

    <div className='review-body'>
      <div className='summary'>I'm enjoying wearing these shades</div>
      <div className='body'>Comfortable and practical.</div>
      <div className='response'>Glad you're enjoying the product!</div>
    </div>

    <div className='review-footer'>
      Helpful? Yes(2) Report
    </div>

  </div>
);

export default Review;