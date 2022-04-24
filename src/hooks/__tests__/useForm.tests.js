import React, { useState } from "react";
import ReactDOM from "react-dom";
import { string } from "yup";
import { mount } from "enzyme";
import useForm from "../useForm";

function FormTestClass({ callback }) {
  const [formData] = useState({ email: "" });
  const schema = {
    email: string().required().email().label("Email"),
  };

  const { values, errors, handleOnChange, handleOnSubmit } = useForm(
    formData,
    schema,
    callback
  );

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          id="email"
          name="email"
          value={values.email}
          onChange={handleOnChange}
          type="text"
        />
        {errors.email && <span>{errors.email}</span>}
      </form>
    </div>
  );
}

describe("Form Component", () => {
  it("renders without crashing", () => {
    // Arrange
    const div = document.createElement("div");

    // Act
    ReactDOM.render(<FormTestClass />, div);
    ReactDOM.unmountComponentAtNode(div);

    // Assert
  });

  it("when input field fails validation should return error message", () => {
    // Arrange
    const callback = jest.fn();
    const wrapper = mount(<FormTestClass callback={callback} />);
    const input = { name: "email", value: "email" };
    const e = {
      preventDefault: jest.fn(),
      target: {
        ...input,
        getAttribute: jest.fn(() => input.name),
      },
    };

    // Act
    wrapper.find("input").find({ name: input.name }).simulate("change", e);
    wrapper.find("form").simulate("submit");

    // Assert
    expect(callback).not.toHaveBeenCalled();
    expect(wrapper.find("span").props().children).toBe(
      "Email must be a valid email"
    );
  });

  it("when useForm hook is given a form submit callback should not execute callback when errors exist", () => {
    // Arrange
    const callback = jest.fn();
    const wrapper = mount(<FormTestClass callback={callback} />);

    // Act
    wrapper.find("form").simulate("submit");

    // Assert
    expect(callback).not.toHaveBeenCalled();
    expect(wrapper.find("span").props().children).toBe(
      "Email is a required field"
    );
  });

  it("when useForm hook is given a form submit callback should execute the form submit callback when submitted", () => {
    // Arrange
    const callback = jest.fn();
    const wrapper = mount(<FormTestClass callback={callback} />);
    const input = { name: "email", value: "email@email.com" };
    const e = {
      target: {
        ...input,
        getAttribute: jest.fn(() => input.name),
      },
    };

    // Act
    wrapper.find("input").find({ name: input.name }).simulate("change", e);
    wrapper.find("form").simulate("submit");

    // Assert
    expect(callback).toHaveBeenCalled();
    expect(wrapper.find("span")).toHaveLength(0);
  });
});
