import React from 'react';
import { shallow } from 'enzyme';
import dashboard from './dashboard';
describe("dashboard", () => {
  it("should render my component", () => {
    const wrapper = shallow(<dashboard />);
  });
});