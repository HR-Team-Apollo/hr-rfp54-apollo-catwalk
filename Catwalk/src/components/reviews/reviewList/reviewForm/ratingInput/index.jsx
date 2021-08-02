import React from 'react';
import Stars from '../../../../../utils/stars';

const RatingInput = ({stateRate, stateUpdate}) => (
  <div className="review-form-section rating">
    <div className='review-section-title'>Overall Rating</div>
    <div style={{display: 'flex', height: '1rem'}}>
      {['Poor', 'Fair', 'Average', 'Good', 'Great'].map((rating, i) => (
        //container
        <label
          className='starInput'
          key={rating}
          style={{
            display: 'block',
            position: 'relative',
            paddingLeft: '35px',
            marginBottom: '12px',
            cursor: 'pointer',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            MsUserSelect: 'none',
            userSelect: 'none'
          }}>
          <input
            type="radio"
            id={`rating-${i + 1}`}
            name="rating"
            value={i + 1}
            data={rating}
            style={{
              position: 'absolute',
              opacity: '0',
              cursor: 'pointer',
              height: '0',
              width: '0'
            }}
            onChange={()=>{
              const desc = document.getElementById('ratings-description');
              desc.innerText=rating;
              stateUpdate('rating', i + 1);
            }}
          />
          <span
            className='radio'
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              color: 'rgb(64, 160, 0)'
            }}>
            <i className={i + 1 <= stateRate?
              'fa fa-star':
              'fa fa-star-o'}>
            </i>
          </span>
        </label>
      ))}
      <div style={{width: '10rem'}} id={'ratings-description'}></div>
    </div>
  </div>
);

export default RatingInput;