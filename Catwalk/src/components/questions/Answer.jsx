import React from 'react';

const Answer = ({answerObj}) => (
  <div>
    <p>A: {answerObj.body}<br /></p>
    <span>by: {answerObj.user}, {answerObj.date} | Helpful? <u>Yes</u> ({answerObj.helpfulCount}) | <u>Report</u></span>
  </div>
);

export default Answer;