//it
//expect
//beforeEach
//afterEach
//describe
import React from "react";
import { shallow } from "enzyme";
import App from "../components/App";
import { Route } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";

// it("App render Navigation component", () => {
//   const wrapped = shallow(<App />);

//   expect(wrapped.find(Navigation).length).toEqual(1);
// });

// it("App render router components", () => {
//   const wrapped = shallow(<App />);
//   expect(wrapped.find(Route).length).toEqual(3);
// });

describe("App component", () => {
  let wrapped;
  beforeEach(() => {
    wrapped = shallow(<App />);
  });

  it("render Navigation component", () => {
    expect(wrapped.find(Navigation).length).toEqual(1);
  });

  it("render router components", () => {
    expect(wrapped.find(Route).length).toEqual(3);
  });
});
