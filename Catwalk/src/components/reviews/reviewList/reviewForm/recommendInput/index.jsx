import React from 'react';

const recommendInput = ({stateUpdate}) => (
  <div className="review-form-section recommendations">
    <label htmlFor="recommend">Do you recommend this product? </label>
    <input
      type="radio"
      id="recommend-y"
      name="recommend"
      value="true"
      defaultChecked
      onClick={()=>{
        stateUpdate('recommendations', true);
      }}
    ></input>
    <label htmlFor="recommend">Yes</label>
    <input
      type="radio"
      id="recommend-n"
      name="recommend"
      value="false"
      onClick={()=>{
        stateUpdate('recommend', false);
      }}
    ></input>
    <label htmlFor="recommend">No</label>
  </div>
);

export default recommendInput;