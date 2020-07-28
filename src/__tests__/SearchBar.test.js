import React from "react";
import { shallow } from "enzyme";
import SearchBar from "../components/SearchBar/SearchBar";

describe("SearchBar", () => {
  let wrapped;
  beforeEach(() => {
    wrapped = shallow(<SearchBar />);
  });

  it("render an input and button", () => {
    expect(wrapped.find("input[type='text']").length).toBe(1);
    expect(wrapped.find("button[type='submit']").length).toBe(1);
  });

  describe("events input", () => {
    const inputText = "new text input";
    beforeEach(() => {
      const changeEventMock = {
        target: {
          value: inputText,
        },
      };

      wrapped.find("input[type='text']").simulate("change", changeEventMock);
      wrapped.update();
    });

    it("cat enter text an input", () => {
      expect(wrapped.find("input[type='text']").prop("value")).toBe(inputText);
    });

    it("on form submit, input should get emptied", () => {
      // const inputText = "new text input";
      // const changeEventMock = {
      //   target: {
      //     value: inputText,
      //   },
      // };

      // wrapped.find("input[type='text']").simulate("change", changeEventMock);
      // wrapped.update();
      expect(wrapped.find("input[type='text']").prop("value")).toBe(inputText);

      const submitEventMock = {
        preventDefault: () => null,
      };

      const props = {
        onSubmit: () => null,
      };

      wrapped.setProps(props);

      wrapped.find("form").simulate("submit", submitEventMock);
      wrapped.update();
      expect(wrapped.find("input[type='text']").prop("value")).toBe("");
    });
  });

  describe("callbacks", () => {
    it("onSubmit prop has been called on submit", () => {
      const submitEventMock = {
        preventDefault: () => null,
      };
      const onSubmitPropMock = jest.fn();
      const props = {
        onSubmit: onSubmitPropMock,
      };

      wrapped.setProps(props);

      wrapped.find("form").simulate("submit", submitEventMock);
      expect(onSubmitPropMock.mock.calls.length).toBe(1);
    });
  });
});
