import React from 'react';
import Sorting from './sorting';
import Review from './review';
import ModalContext from '../../../modalContext.js';
import ReviewForm from './reviewForm';

const ReviewList = ({reviews}) => (
  <div className="reviewList">
    <Sorting/>
    <ul style={{
      padding: '0'
    }}>
      {
        reviews.results.map(review=>{
          return <Review review={review} key={review.review_id}/>
        })
      }
    </ul>
    <div>
      <button>More Reviews</button>
      <ModalContext.Consumer>
        {(value) => <button onClick={()=>value(<ReviewForm/>)}>Add A Review +</button>}
      </ModalContext.Consumer>

    </div>
  </div>
);

export default ReviewList;