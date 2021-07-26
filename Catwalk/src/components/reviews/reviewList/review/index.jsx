import React from 'react';

const Review = () => (
  <div className='review' style={{display: 'block'}}>
    <div className='review-header' style={{display: 'flex', justifyContent: 'space-between'}}>
      <div className='rating'>
        ⭐️⭐️⭐️⭐️⭐️
      </div>
      <div>
        <span className='reviewer_name'>shortandsweeet</span>
        <span className='date'>2019-04-14T00:00:00.000Z</span>
      </div>
    </div>

    <div className='review-body'>
      <div>I'm enjoying wearing these shades</div>
      <div>Comfortable and practical.</div>
      <div>Glad you're enjoying the product!</div>
    </div>

    <div className='review-footer'>
      Helpful? Yes(2) Report
    </div>

  </div>
);

export default Review;