import React from 'react';
import questionsList from "./dummyQuestions";

const Question = ({questionObj}) => (
  <div>
    <h4>Q: {questionObj.body}</h4>;
  </div>
    
);

export default Question;