import {shallow} from 'enzyme';
import Ratings from './Ratings';

describe('<Reviews />', ()=>{
  it ('renders a <Ratings /> component', () => {
    const wrapper = shallow(<Reviews />);
    expect(wrapper.exists(Ratings));
  });
})