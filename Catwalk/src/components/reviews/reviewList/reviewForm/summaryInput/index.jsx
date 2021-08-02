import React from 'react';

const SummaryInput = ({stateUpdate}) => (
  <div className="review-form-section summary">
    <label htmlFor="summary">Summary: </label>
    <input
      type="text"
      name="summary"
      id="summary"
      placeholder="Example: Best purchase ever!"
      maxLength="60"
      onChange={(e)=>{
        stateUpdate('summary', e.target.value);
      }}
    />
  </div>
);

export default SummaryInput;