import React from 'react';

const NameInput = ({stateUpdate}) => (
  <div className="review-form-section">
    <label htmlFor="name">What is your nickname? </label>
    <input
      type="text"
      name="name"
      id="name"
      placeholder="Example: jackson11!"
      maxLength="60"
      required
      onChange={
        (e)=>{
          stateUpdate('name', e.target.value);
        }
      }
    />
    <p>For privacy reasons, do not use your full name or email address</p>
  </div>
);

export default NameInput;