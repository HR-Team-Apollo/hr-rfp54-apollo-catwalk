import React from 'react';

const Question = ({questionObj}) => (
  <div className="question">
    <h4 className="questionBody">Q: {questionObj.body} <span className="questionHelpful">Helpful? <u>Yes</u> ({questionObj.helpfulCount}) | <u className="addAnswer">Add Answer</u></span></h4>
  </div>
    
);

export default Question;