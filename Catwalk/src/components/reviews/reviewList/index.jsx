import React from 'react';
import Sorting from './sorting';
import Review from './review';
import AppContext from '../../../appContext.js';
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
      <AppContext.Consumer>
        {(value) => <button onClick={()=>value.openModal(<ReviewForm/>)}>Add A Review +</button>}
      </AppContext.Consumer>

    </div>
  </div>
);

export default ReviewList;