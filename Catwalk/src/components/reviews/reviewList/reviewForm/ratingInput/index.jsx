import React from 'react';
import Stars from '../../../../../utils/stars';

const RatingInput = ({stateRate, stateUpdate}) => (
  <div className="review-form-section rating">
    <div className='review-section-title'>Overall Rating</div>
    <div style={{
      height: '1rem',
      display: 'flex'
    }}>
      <div style={{
        position: 'relative',
        width: '10rem'
      }}>
        <div style={{position: 'absolute'}} >
          <Stars rating={stateRate} />
        </div>
        <div style={{position: 'absolute'}}>
          {/* TODO: make input transparent */}
          {['Poor', 'Fair', 'Average', 'Good', 'Great'].map((rating, i) => (
            <input
              type="radio"
              key={rating}
              id={`rating-${i + 1}`}
              name="rating"
              value={i + 1}
              data={rating}
              style={{
                width: '.94rem',
                padding: '0',
                margin: '0',
              }}
              onChange={()=>{
                const desc = document.getElementById('ratings-description');
                desc.innerText=rating;
                stateUpdate('rating', i + 1);
              }}
            ></input>
          ))}
        </div>
      </div>
      <div style={{width: '10rem'}} id={'ratings-description'}></div>
    </div>
  </div>
);

export default RatingInput;