import React from 'react';
import { shallow } from 'enzyme';
import Cart from './cart';
describe("Cart", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Cart />);
  });
});