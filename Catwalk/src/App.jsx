import React from 'react';
import Overview from './components/overview';
import Questions from './components/questions';
import Related from './components/related';
import Reviews from './components/reviews';

const App = () => (
  <div>
    <Overview />
    <Questions />
    <Related />
    <Reviews />
  </div>
);

export default App;