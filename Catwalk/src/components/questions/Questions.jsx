import React from 'react';
import questionsList from './dummyQuestions';
import Question from "./Question";

const mappedQuestions = questionsList.map(questionObj => 
    <Question
    key={questionObj.questionId}
    body={questionObj.body}
    />

const Questions = () => (
  <div>
      {mappedQuestions}
  </div>
);

export default Questions;

