import React from "react";
import { NavLink } from "react-router-dom";
import { shallow } from "enzyme";
import Navigation from "../components/Navigation/Navigation";

describe("Navigation component", () => {
  let wrapped;
  beforeEach(() => {
    wrapped = shallow(<Navigation />);
  });

  it("render link component", () => {
    expect(wrapped.find(NavLink).length).toBe(2);
  });
});
