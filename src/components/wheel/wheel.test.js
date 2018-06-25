import React from "react";
import Wheel from "./wheel/../wheel/../wheel";
import { shallow } from "enzyme";

describe("Whell Component", () => {
  test("render", () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });
});

const setup = propOverrides => {
  const props = Object.assign(
    {
      time: 10000,
      speed: 50,
      start: false,
      result: function() {}
    },
    propOverrides
  );

  const wrapper = shallow(<Wheel {...props} />);

  return {
    props,
    wrapper
  };
};
