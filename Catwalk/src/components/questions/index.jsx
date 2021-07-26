import React from 'react';
import questionsList from './dummyQuestions';
import answersList from './dummyAnswers';
import Questions from './Questions';
import Answers from './Answers';
import SearchBar from './SearchBar';

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
