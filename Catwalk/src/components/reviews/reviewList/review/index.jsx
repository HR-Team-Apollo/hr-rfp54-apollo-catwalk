import React from 'react';
import Stars from '../../../../utils/stars';
import moment from 'moment';
import ReviewBody from './reviewBody';

const Review = ({review, openModal}) => (
  <div className='review' style={{
    display: 'block',
    maxWidth: '35rem',
    borderBottom: '1px solid grey'}}>
    <div className='review-header' style={{display: 'flex', justifyContent: 'space-between'}}>
      <Stars rating={review.rating}/>
      <div>
        <span className='reviewer_name'>{review.reviewer_name} </span>
        <span className='date'>{moment(review.date).format('LL')}</span>
      </div>
    </div>

    <div className='review-body'>
      <div className='summary' style={{overflow: 'hidden', textOverflow: 'ellipsis', fontWeight: 'bold'}}>
        {review.summary}
      </div>

      {review.recommend?
        <div className='review-recommend'>
          <i className="fa fa-check"></i>
          I recommend this product</div>:
        null
      }
      <ReviewBody text={review.body}/>
      <div className='review-photos' style={{display: 'flex', justifyContent: 'space-evenly'}}>
        {
          review.photos.map(photoData=>{
            return(<img
              key={photoData.id}
              className='clickMe'
              style={{
                height: '5rem'
              }}
              src={photoData.url}
              onClick={(e)=>openModal(<img style={{margin: '0 auto', display: 'block', overflowX:'scroll'}} src={e.target.src}/>)}
            />);
          })
        }
      </div>
      {
        review.response?
          <div className='response' style={{background: 'lightgrey'}}>
            Response from seller:<br/>
            {review.response}
          </div>:
          null
      }

    </div>

    <div className='review-footer' style={{margin: '1rem 0'}}>
      Helpful?
      <span style={{margin: '0 2rem'}}>
        Yes(<span className='clickMe'  data-clicked='false' onClick={(e)=>{
          if(e.target.dataset.clicked==='false'){
            fetch(`http://localhost:3001/api/reviews/${review.review_id}/helpful`, {
              method: 'PUT'
            })
              .then(response => response)
              .then(result => {
                let helpNum = Number(e.target.innerText);
                e.target.innerText= helpNum + 1;
                e.target.dataset.clicked='true';
              })
              .catch(error => {
                console.error('Error:', error);
              });}
        }} >{review.helpfulness}</span>)
      </span>
      <span className='clickMe' onClick={(e)=>{
        if(e.target.innerText === 'Report') {
          fetch(`http://localhost:3001/api/reviews/${review.review_id}/report`, {
            method: 'PUT'
          })
            .then(response => response)
            .then(result => {
              e.target.innerText='Reported';
            })
            .catch(error => {
              console.error('Error:', error);
            });
        }
      }}>
        Report
      </span>
    </div>

  </div>
);

export default Review;