import React from 'react';
import Questions from './Questions';
import Answers from './Answers';
import SearchBar from './SearchBar';
import AddQuestion from './AddQuestion';
import MoreAnsweredQuestions from './MoreAnsweredQuestions';

const QuestionsAndAnswers = () => (
  <div>
    <h2>Questions & Answers</h2>
  
    <Questions />
    <Answers />
    <SearchBar />
    <MoreAnsweredQuestions />
    <AddQuestion />
  </div>
);

export default QuestionsAndAnswers;
