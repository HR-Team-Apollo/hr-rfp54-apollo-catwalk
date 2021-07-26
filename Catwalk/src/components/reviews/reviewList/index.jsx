import React from 'react';
import Sorting from './sorting';
import Review from './review';
import ModalContext from '../../../modalContext.js';

const ReviewList = () => (
  <div className="reviewList">
    <Sorting/>
    <ul>
      <Review/>
      <Review/>
    </ul>
    <div>
      <button>More Reviews</button>
      <ModalContext.Consumer>
        {(value) => <button onClick={()=>value('render some form for adding a review')}>Add A Review +</button>}
      </ModalContext.Consumer>

    </div>
  </div>
);

export default ReviewList;