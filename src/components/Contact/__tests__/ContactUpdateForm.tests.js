import { DatePicker, Input } from "components/base";
import { ContactUpdateForm } from "components/Contact";
import { mount } from "enzyme";
import { createBrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import contactService from "services/contactService";

const history = createBrowserHistory();
beforeEach(() => {
  history.push("/");
});

afterEach(() => {
  history.push("/");
});

describe("ContactUpdateForm Component", () => {
  it("renders without crashing", async () => {
    // Arrange
    const props = {
      match: { params: { id: "1" } },
      history: history,
      location: history.location,
    };
    const div = document.createElement("div");

    // Act
    await act(async () => {
      ReactDOM.render(<ContactUpdateForm {...props} />, div);
    });

    ReactDOM.unmountComponentAtNode(div);

    // Assert
  });

  it("when contact cant be found should redirect to contacts", async () => {
    // Arrange
    const props = {
      match: { params: { id: "1000" } },
      history: history,
      location: history.location,
    };

    // Act
    let wrapper;
    await act(async () => {
      wrapper = mount(<ContactUpdateForm {...props} />);
    });
    wrapper.update();

    // Assert
    expect(wrapper.props().history.location.pathname).toBe("/contacts");
  });

  it("when rendered should display contact info", async () => {
    // Arrange
    const props = {
      match: { params: { id: "1" } },
      history: history,
      location: history.location,
    };
    const contact = {
      id: 1,
      firstName: "First",
      lastName: "Last",
      birthDate: new Date(),
      address: "123 code rd Denver, CO 71010",
      email: "test@test.com",
      phoneNumber: "444-123-1234",
    };

    // Act
    let wrapper;
    await act(async () => {
      wrapper = mount(<ContactUpdateForm {...props} />);
    });
    wrapper.update();

    // Assert
    const displayInfo = wrapper.find(Input);
    expect(displayInfo).toHaveLength(5);
    expect(displayInfo.at(0).props().value).toBe(contact.firstName);
    expect(displayInfo.at(1).props().value).toBe(contact.lastName);
    expect(displayInfo.at(2).props().value).toBe(contact.address);
    expect(displayInfo.at(3).props().value).toBe(contact.email);
    expect(displayInfo.at(4).props().value).toBe(contact.phoneNumber);
    const dateInfo = wrapper.find(DatePicker);
    expect(dateInfo).toHaveLength(1);
    expect(dateInfo.at(0).props().value).toBeTruthy();
  });

  it("when cancel button is clicked should be redirected to contacts page", async () => {
    // Arrange
    const props = {
      match: { params: { id: 1 } },
      history: history,
      location: history.location,
    };
    const contact = {
      id: 1,
      firstName: "First",
      lastName: "Last",
      birthDate: "10/1/1990",
      address: "123 code rd Denver, CO 71010",
      email: "test@test.com",
      phoneNumber: "444-123-1234",
    };

    // Act
    let wrapper;
    await act(async () => {
      wrapper = mount(<ContactUpdateForm {...props} />);
    });
    wrapper.update();
    const cancelButton = wrapper.find({ variant: "light" });
    cancelButton.simulate("click");

    // Assert
    const fetchedContact = await contactService.get(contact.id);
    expect(wrapper.props().history.location.pathname).toBe("/contacts");
    expect(contactService.get()).toBeTruthy();
    expect(fetchedContact).toStrictEqual(contact);
  });

  it("should display an error message on input when form submission fails", async () => {
    // Arrange
    const props = {
      match: { params: { id: "44" } },
      history: history,
      location: history.location,
    };
    let wrapper;
    await act(async () => {
      wrapper = mount(<ContactUpdateForm {...props} />);
    });
    wrapper.update();

    // Act
    wrapper.find("form").simulate("submit");

    // Assert
    const firstNameInputField = wrapper.find({ id: "firstName" });
    const lastNameInputField = wrapper.find({ id: "lastName" });
    const addressInputField = wrapper.find({
      id: "address",
    });
    const emailInputField = wrapper.find({
      id: "email",
    });
    const phoneNumberInputField = wrapper.find({
      id: "phoneNumber",
    });
    const inputFieldFeedback = wrapper.find({
      className: "invalid-feedback",
    });

    expect(inputFieldFeedback).toHaveLength(5);
    expect(firstNameInputField.props().className).toMatch("is-invalid");
    expect(inputFieldFeedback.at(0).props().children).toBe(
      "First Name is a required field"
    );
    expect(lastNameInputField.props().className).toMatch("is-invalid");
    expect(inputFieldFeedback.at(1).props().children).toBe(
      "Last Name is a required field"
    );
    expect(addressInputField.props().className).toMatch("is-invalid");
    expect(inputFieldFeedback.at(2).props().children).toBe(
      "Address is a required field"
    );
    expect(emailInputField.props().className).toMatch("is-invalid");
    expect(inputFieldFeedback.at(3).props().children).toBe(
      "Email is a required field"
    );
    expect(phoneNumberInputField.props().className).toMatch("is-invalid");
    expect(inputFieldFeedback.at(4).props().children).toBe(
      "Phone number is invalid. Should follow format: XXX-XXX-XXXX"
    );
  });

  it("succeeds update request should display updated info", async () => {
    // Arrange
    const props = {
      match: { params: { id: "2" } },
      history: history,
      location: history.location,
    };
    const firstNameEvent = {
      target: {
        name: "firstName",
        value: "Updated",
        getAttribute: jest.fn(() => "firstName"),
      },
    };
    const addressEvent = {
      target: {
        name: "address",
        value: "Updated Address",
        getAttribute: jest.fn(() => "address"),
      },
    };
    const emailEvent = {
      target: {
        name: "email",
        value: "updated_email@test.com",
        getAttribute: jest.fn(() => "email"),
      },
    };
    const contact = {
      id: 2,
      firstName: "first",
      lastName: "last",
      birthDate: "1/1/1111",
      address: "address",
      email: "test",
      phoneNumber: "444-123-4545",
    };
    await (await contactService.getContacts()).push(contact);
    let wrapper;
    await act(async () => {
      wrapper = mount(<ContactUpdateForm {...props} />);
    });
    wrapper.update();

    // Act
    wrapper
      .find("input")
      .find({ name: firstNameEvent.target.name })
      .simulate("change", firstNameEvent);
    wrapper
      .find("input")
      .find({ name: addressEvent.target.name })
      .simulate("change", addressEvent);
    wrapper
      .find("input")
      .find({ name: emailEvent.target.name })
      .simulate("change", emailEvent);
    await act(async () => {
      wrapper.find("form").simulate("submit");
    });
    wrapper.update();

    // Assert
    const inputFields = wrapper.find(Input);
    expect(inputFields).toHaveLength(5);
    expect(inputFields.at(0).props().value).toBe(firstNameEvent.target.value);
    expect(inputFields.at(1).props().value).toBe(contact.lastName);
    expect(inputFields.at(2).props().value).toBe(addressEvent.target.value);
    expect(inputFields.at(3).props().value).toBe(emailEvent.target.value);
    expect(inputFields.at(4).props().value).toBe(contact.phoneNumber);
    const dateInfo = wrapper.find(DatePicker);
    expect(dateInfo).toHaveLength(1);
    expect(dateInfo.at(0).props().value).toBeTruthy();
  });
});
