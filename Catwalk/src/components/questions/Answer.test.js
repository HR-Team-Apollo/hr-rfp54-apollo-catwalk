import React from 'react';
import { shallow } from 'enzyme';
import Answer from './Answer.jsx';

it('should exist', () => {
  const wrapper = shallow(<Answer />);
  expect(wrapper.exists()).toBe(true);
});