import React from 'react';
import Sorting from './sorting';
import Review from './review';
import AppContext from '../../../appContext.js';
import ReviewForm from './reviewForm';

const ReviewList = ({reviews, starFilter, recommended, sortHandler, moreReviewsHandler}) => (
  <AppContext.Consumer>
    {(value) => (
      <div className="reviewList">
        <Sorting recommended={recommended} clickHandler={sortHandler}/>
        <ul style={{
          padding: '0',
          maxHeight: '80vh',
          overflowY: 'scroll'
        }}>
          {
            reviews.results.map(review=>(
              starFilter.includes(review.rating)?
                <Review openModal={value.openModal} review={review} key={review.review_id}/>:
                null
            ))
          }
        </ul>
        <div>
          <button className='clickMe' style={{fontFamily: 'inherit'}} onClick={
            (e)=>{
              moreReviewsHandler(e);
            }
          }>More Reviews</button>
          <button
            className='clickMe'
            style={{fontFamily: 'inherit'}}
            onClick={()=>value.openModal(<ReviewForm id={value.product.id}/>)}>Add A Review +</button>
        </div>
      </div>
    )}
  </AppContext.Consumer>
);

export default ReviewList;