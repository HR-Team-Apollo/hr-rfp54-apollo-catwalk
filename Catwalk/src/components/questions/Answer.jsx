import React from 'react';
import answersList from './dummyAnswers';


// const mappedAnswers = answersList.map(answerObj => 
//   <p key={answerObj.answerId}>A: {answerObj.body}<br /></p>);

const Answer = ({answerObj}) => (
  <div>
    <p>A: {answerObj.body}<br /></p>
  </div>
);

export default Answer;