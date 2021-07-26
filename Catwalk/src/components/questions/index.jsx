import React from 'react';
import questionsList from './dummyQuestions';
import answersList from './dummyAnswers';
import Questions from './Questions';
import Answers from './Answers';
import SearchBar from './SearchBar';

const mappedQuestions = questionsList.map(questionObj => 
  <h4 key={questionObj.questionId}>Q: {questionObj.body}</h4>);

const mappedAnswers = answersList.map(answerObj => 
  <p key={answerObj.answerId}>A: {answerObj.body}<br /></p>);

const QuestionsAndAnswers = () => (
  <div>
    <h2>Question & Answers</h2>
  
    <Questions />
    <Answers />
    <div className="searchBar">
      <SearchBar />
    </div>
  </div>
);

export default QuestionsAndAnswers;
