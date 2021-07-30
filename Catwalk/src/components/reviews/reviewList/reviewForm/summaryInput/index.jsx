import React from 'react';

const SummaryInput = (props) => (
  <div className="review-form-section summary">
    <label htmlFor="summary">Summary: </label>
    <input
      type="text"
      name="summary"
      id="summary"
      placeholder="Example: Best purchase ever!"
      maxLength="60"
    />
  </div>
);

export default SummaryInput;