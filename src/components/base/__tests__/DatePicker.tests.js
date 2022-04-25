import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import DatePicker from "../DatePicker";

describe("DatePicker Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<DatePicker />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders date picker input", () => {
    const wrapper = mount(<DatePicker name="my_input" />);
    const input = wrapper.find("input");
    expect(input).toHaveLength(1);
    expect(input.prop("type")).toEqual("text");
    expect(input.prop("name")).toEqual("my_input");
    expect(input.prop("id")).toEqual("my_input");
    expect(input.prop("className")).toEqual("form-control");
  });

  it("renders date picker input with given className prop", () => {
    const style = "style";
    const wrapper = mount(<DatePicker name="my_input" className={style} />);
    const input = wrapper.find("input");
    expect(input).toHaveLength(1);
    expect(input.prop("type")).toEqual("text");
    expect(input.prop("name")).toEqual("my_input");
    expect(input.prop("id")).toEqual("my_input");
    expect(input.prop("className")).toEqual("form-control " + style);
  });
});
