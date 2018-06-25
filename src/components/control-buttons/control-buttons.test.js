import React from 'react';
import ControlButtons from "./control-buttons";
import { shallow } from 'enzyme';

describe('Visor Component', () => {
    test('render', () => {
      const { wrapper } = setup()
      expect(wrapper.exists()).toBe(true)
    })
});

const setup = function() {
    const wrapper = shallow(<ControlButtons />)
  
    return {
        wrapper
    }
}