import React from 'react';
import { shallow } from 'enzyme';
import { Search } from '../../src/components/Search';


// TODO: SETUP ENZYME TESTS
describe('(Component) Search', () => {

  const mockFn = jest.fn();  
  const wrapper = shallow(<Search onChange={mockFn} placeholder="test" value="testVal"/>);

  it('renders without exploding', () => {
    expect(wrapper.length).toBe(1);
  });
});