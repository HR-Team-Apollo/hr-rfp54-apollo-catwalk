import React from 'react';
import Sorting from './sorting';
import Review from './review';

const ReviewList = () => (
  <div className="reviewList">
    <Sorting/>
    <ul>
      <Review/>
      <Review/>
      <Review/>
    </ul>
    <div>
      <button>More Reviews</button>
      <button>Add A Review +</button>
    </div>
  </div>
);

export default ReviewList;