import React from 'react';
import Visor from "./visor/../visor";
import { shallow } from 'enzyme';

describe('Visor Component', () => {
    test('render', () => {
      const { wrapper } = setup()
      expect(wrapper.exists()).toBe(true)
    })
});

const setup = function() {
    const wrapper = shallow(<Visor />)
  
    return {
        wrapper
    }
}