import React from "react";
import Winner from "./winner";
import { shallow } from "enzyme";

describe("Winner Component", () => {
  test("render", () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });
});

const setup = propOverrides => {
  const props = Object.assign(
    {
      onRef: function() {}
    },
    propOverrides
  );

  const wrapper = shallow(<Winner {...props} />);

  return {
    wrapper
  };
};
