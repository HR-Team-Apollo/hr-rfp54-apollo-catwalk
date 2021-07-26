import React from 'react';

const Answer = ({answerObj}) => (
  <div>
    <p>A: {answerObj.body}<br /></p>
    <span>by: {answerObj.isSeller ? <strong>Seller</strong> : answerObj.user}, {answerObj.date} | Helpful? <a href="">Yes</a> ({answerObj.helpfulCount}) | <a href="">Report</a></span>
  </div>
);

export default Answer;