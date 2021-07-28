import React from 'react';
import Stars from '../../../../utils/stars';
import moment from 'moment';

const Review = ({review}) => (
  <div className='review' style={{
    display: 'block',
    width: '35rem',
    borderBottom: '1px solid grey'}}>
    <div className='review-header' style={{display: 'flex', justifyContent: 'space-between'}}>
      <Stars rating={review.rating}/>
      <div>
        <span className='reviewer_name'>{review.reviewer_name} </span>
        <span className='date'>{moment(review.date).format('LL')}</span>
      </div>
    </div>

    <div className='review-body'>
      <div className='summary' style={{overflow: 'hidden', textOverflow: 'ellipsis', fontWeight: 'bold'}}>{review.summary}</div>
      <div className='body'>{review.body}</div>
      {
        review.response?
          <div className='response' style={{background: 'lightgrey'}}>
            Response from seller:<br/>
            {review.response}
          </div>:
          null
      }

    </div>

    <div className='review-footer'>
      Helpful?
      <span onClick={()=>{
        console.log('helpfulness++')}}>
        Yes
        ({review.helpfulness})
      </span>
      <span onClick={()=>{
        console.log('helpfulness--')}}>
        No
        ({review.helpfulness})
      </span>
      <span onClick={()=>{
        console.log('Report!');
      }}>
        Report
      </span>
    </div>

  </div>
);

export default Review;