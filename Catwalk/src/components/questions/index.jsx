import React from 'react';
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
