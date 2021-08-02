import React from 'react';

const EmailInput = ({stateUpdate}) => (
  <div className="review-form-section">
    <label htmlFor="email">Enter your email: </label>
    <input
      type="email"
      name="email"
      id="email"
      placeholder="Example: jackson11@email.com"
      required
      onChange = {
        (e)=>{
          stateUpdate('email', e.target.value);
        }
      }
    />
    <p style={{fontSize: '.5rem', color: 'lightGrey'}}>For authentication reasons, you will not be emailed</p>
  </div>
);

export default EmailInput;