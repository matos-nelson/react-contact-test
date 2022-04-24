import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import Input from "../Input";

describe("Input Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Input />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders text input", () => {
    const wrapper = mount(
      <Input name="my_input" type="text" placeholder="My Input" />
    );
    const input = wrapper.find("input");
    expect(input).toHaveLength(1);
    expect(input.prop("type")).toEqual("text");
    expect(input.prop("name")).toEqual("my_input");
    expect(input.prop("id")).toEqual("my_input");
    expect(input.prop("placeholder")).toEqual("My Input");
    expect(input.prop("className")).toEqual("form-control");

    const div = wrapper.find("div");
    expect(div).toHaveLength(0);
  });

  it("renders text input with given className prop", () => {
    const style = "style";
    const wrapper = mount(
      <Input
        name="my_input"
        type="text"
        placeholder="My Input"
        className={style}
      />
    );
    const input = wrapper.find("input");
    expect(input).toHaveLength(1);
    expect(input.prop("type")).toEqual("text");
    expect(input.prop("name")).toEqual("my_input");
    expect(input.prop("id")).toEqual("my_input");
    expect(input.prop("placeholder")).toEqual("My Input");
    expect(input.prop("className")).toEqual("form-control " + style);

    const div = wrapper.find("div");
    expect(div).toHaveLength(0);
  });

  it("renders text input with error message", () => {
    const wrapper = mount(
      <Input
        name="my_input"
        type="text"
        placeholder="My Input"
        error="Error Message"
      />
    );
    const input = wrapper.find("input");
    expect(input).toHaveLength(1);
    expect(input.prop("type")).toEqual("text");
    expect(input.prop("name")).toEqual("my_input");
    expect(input.prop("id")).toEqual("my_input");
    expect(input.prop("placeholder")).toEqual("My Input");
    expect(input.prop("className")).toEqual("is-invalid form-control");

    const div = wrapper.find("div");
    expect(div).toHaveLength(1);
    expect(div.prop("className")).toEqual("invalid-feedback");
    expect(div.text()).toEqual("Error Message");
  });

  it("renders text input with given className prop along with error message", () => {
    const style = "style";
    const wrapper = mount(
      <Input
        name="my_input"
        type="text"
        placeholder="My Input"
        error="Error Message"
        className={style}
      />
    );
    const input = wrapper.find("input");
    expect(input).toHaveLength(1);
    expect(input.prop("type")).toEqual("text");
    expect(input.prop("name")).toEqual("my_input");
    expect(input.prop("id")).toEqual("my_input");
    expect(input.prop("placeholder")).toEqual("My Input");
    expect(input.prop("className")).toEqual("is-invalid form-control " + style);

    const div = wrapper.find("div");
    expect(div).toHaveLength(1);
    expect(div.prop("className")).toEqual("invalid-feedback");
    expect(div.text()).toEqual("Error Message");
  });

  it("renders textarea input", () => {
    const wrapper = mount(
      <Input name="my_input" type="textarea" placeholder="My Input" rows={5} />
    );
    const input = wrapper.find("textarea");
    expect(input).toHaveLength(1);
    expect(input.prop("type")).toEqual("textarea");
    expect(input.prop("name")).toEqual("my_input");
    expect(input.prop("id")).toEqual("my_input");
    expect(input.prop("placeholder")).toEqual("My Input");
    expect(input.prop("className")).toEqual("form-control");
    expect(input.prop("rows")).toEqual(5);

    const div = wrapper.find("div");
    expect(div).toHaveLength(0);
  });

  it("renders textarea input with error message", () => {
    const wrapper = mount(
      <Input
        name="my_input"
        type="textarea"
        placeholder="My Input"
        error="Error Message"
      />
    );
    const input = wrapper.find("textarea");
    expect(input).toHaveLength(1);
    expect(input.prop("type")).toEqual("textarea");
    expect(input.prop("name")).toEqual("my_input");
    expect(input.prop("id")).toEqual("my_input");
    expect(input.prop("placeholder")).toEqual("My Input");
    expect(input.prop("className")).toEqual("is-invalid form-control");
    expect(input.prop("rows")).toEqual(9);

    const div = wrapper.find("div");
    expect(div).toHaveLength(1);
    expect(div.prop("className")).toEqual("invalid-feedback");
    expect(div.text()).toEqual("Error Message");
  });
});
