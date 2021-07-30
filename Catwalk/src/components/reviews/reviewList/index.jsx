import React from 'react';
import Sorting from './sorting';
import Review from './review';
import AppContext from '../../../appContext.js';
import ReviewForm from './reviewForm';

const ReviewList = ({reviews}) => (
  <div className="reviewList">
    {/* TODO: GET NUMBER OF REVIEWS VIA STARS? */}
    <Sorting/>
    <ul style={{
      padding: '0'
    }}>
      {
        reviews.results.map(review=>{
          return (<Review review={review} key={review.review_id}/>);
        })
      }
    </ul>
    <div>
      <button onClick={
        ()=>{
          // TODO: make an API call to get more reviews to render
          alert('More reviews coming to a store near you!');
        }
      }>More Reviews</button>
      <AppContext.Consumer>
        {(value) => <button onClick={()=>value.openModal(<ReviewForm/>)}>Add A Review +</button>}
      </AppContext.Consumer>

    </div>
  </div>
);

export default ReviewList;