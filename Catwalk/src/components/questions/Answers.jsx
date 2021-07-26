import React from 'react';
import Answer from './Answer';
import answersList from './dummyAnswers';

const mappedAnswers = answersList.map(answerObj => 
  <Answer 
    key={answerObj.answerId}
    answerObj={answerObj}
  />);

const Answers = () => (
  <div>
    {mappedAnswers}
  </div>
);

export default Answers;