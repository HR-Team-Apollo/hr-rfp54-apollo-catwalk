import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe ('Overview', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Overview />, div);
  });

  describe ('Cart', () => {
    test ('', {

    });
  });
});