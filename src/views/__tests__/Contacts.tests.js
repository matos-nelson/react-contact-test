import { Input } from "components/base";
import {
  ContactDetailsModal,
  ContactModalForm,
  ContactTable,
} from "components/Contact";
import { mount } from "enzyme";
import { createBrowserHistory } from "history";
import React from "react";
import { Button } from "react-bootstrap";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import contactService from "services/contactService";
import Contacts from "../Contacts";

describe("Contacts View Component", () => {
  it("renders without crashing", async () => {
    // Arrange
    const div = document.createElement("div");
    const history = createBrowserHistory();
    const props = {
      history: history,
    };

    // Act
    await act(async () => {
      ReactDOM.render(<Contacts {...props} />, div);
    });

    ReactDOM.unmountComponentAtNode(div);

    // Assert
  });

  it("should display contacts after being mounted", async () => {
    // Arrange
    const history = createBrowserHistory();
    const props = {
      history: history,
    };
    const contacts = [
      {
        id: 1,
        firstName: "First",
        lastName: "Last",
        birthDate: "10/1/1990",
        address: "123 code rd Denver, CO 71010",
        email: "test@test.com",
        phoneNumber: "444-123-1234",
      },
    ];

    // Act
    let wrapper;
    await act(async () => {
      wrapper = mount(<Contacts {...props} />);
    });
    wrapper.update();

    // Assert
    const tableBody = wrapper.find("tbody");
    expect(tableBody.props().children.length).toBe(1);
    expect(tableBody.props().children[0].props.children.length).toBe(6);
    expect(tableBody.props().children[0].props.children[0].props.children).toBe(
      contacts[0].firstName
    );
    expect(tableBody.props().children[0].props.children[1].props.children).toBe(
      contacts[0].lastName
    );
    expect(tableBody.props().children[0].props.children[2].props.children).toBe(
      contacts[0].birthDate
    );
    expect(tableBody.props().children[0].props.children[3].props.children).toBe(
      contacts[0].address
    );
    expect(tableBody.props().children[0].props.children[4].props.children).toBe(
      contacts[0].email
    );
    expect(tableBody.props().children[0].props.children[5].props.children).toBe(
      contacts[0].phoneNumber
    );
  });

  it("should display add contact modal after clicking on add button", async () => {
    // Arrange
    const history = createBrowserHistory();
    const props = {
      history: history,
    };

    // Act
    let wrapper;
    await act(async () => {
      wrapper = mount(<Contacts {...props} />);
    });
    wrapper.update();
    wrapper.find("button").find({ id: "btn-add" }).simulate("click");

    // Assert
    expect(wrapper.find(ContactModalForm).prop("isOpen")).toEqual(true);
  });

  it("should close add contact modal and reset data after clicking on toggle button", async () => {
    // Arrange
    const history = createBrowserHistory();
    const props = {
      history: history,
    };
    let wrapper;
    await act(async () => {
      wrapper = mount(<Contacts {...props} />);
    });
    wrapper.update();

    // Act
    wrapper.find("button").find({ id: "btn-add" }).simulate("click");
    wrapper.find(ContactModalForm).find("form").simulate("submit");
    wrapper.find(ContactModalForm).find(".close").simulate("click");

    // Assert
    const inputs = wrapper.find(ContactModalForm).find(Input);
    expect(wrapper.find(ContactModalForm).prop("isOpen")).toEqual(false);
    inputs.forEach((node) => {
      expect(node.props().value).toEqual("");
      expect(node.props().error).toBeFalsy();
    });
  });

  it("should close add modal and reset data after clicking on cancel button", async () => {
    // Arrange
    const history = createBrowserHistory();
    const props = {
      history: history,
    };
    let wrapper;
    await act(async () => {
      wrapper = mount(<Contacts {...props} />);
    });
    wrapper.update();

    // Act
    wrapper.find("button").find({ id: "btn-add" }).simulate("click");
    wrapper.find(ContactModalForm).find("form").simulate("submit");
    wrapper
      .find(ContactModalForm)
      .find(Button)
      .find({ type: "button" })
      .simulate("click");

    // Assert
    const inputs = wrapper.find(ContactModalForm).find(Input);
    expect(wrapper.find(ContactModalForm).prop("isOpen")).toEqual(false);
    inputs.forEach((node) => {
      expect(node.props().value).toEqual("");
      expect(node.props().error).toBeFalsy();
    });
  });

  it("should display errors when form submission fails", async () => {
    // Arrange
    const history = createBrowserHistory();
    const props = {
      history: history,
    };
    let wrapper;
    await act(async () => {
      wrapper = mount(<Contacts {...props} />);
    });
    wrapper.update();

    // Act
    wrapper.find("button").find({ id: "btn-add" }).simulate("click");
    wrapper.find(ContactModalForm).find("form").simulate("submit");

    // Assert
    const inputs = wrapper.find(ContactModalForm).find(Input);
    expect(wrapper.find(ContactModalForm).prop("isOpen")).toEqual(true);
    inputs.forEach((node) => {
      expect(node.props().error).toBeTruthy();
    });
  });

  it("should display new contact in table when form submission succeeds", async () => {
    // Arrange
    const history = createBrowserHistory();
    const props = {
      history: history,
    };
    const newContact = {
      firstName: "NewFirst",
      lastName: "NewLastLast",
      birthDate: "10/1/1990",
      address: "123 code rd Denver, CO 71010",
      email: "new@contact.com",
      phoneNumber: "444-123-1234",
    };
    const firstNameEvent = {
      target: {
        name: "firstName",
        value: newContact.firstName,
        getAttribute: jest.fn(() => "firstName"),
      },
    };
    const lastNameEvent = {
      target: {
        name: "lastName",
        value: newContact.lastName,
        getAttribute: jest.fn(() => "lastName"),
      },
    };
    const birthDateEvent = {
      target: {
        name: "birthDate",
        value: newContact.birthDate,
        getAttribute: jest.fn(() => "birthDate"),
      },
    };
    const addressEvent = {
      target: {
        name: "address",
        value: newContact.address,
        getAttribute: jest.fn(() => "address"),
      },
    };
    const emailEvent = {
      target: {
        name: "email",
        value: newContact.email,
        getAttribute: jest.fn(() => "email"),
      },
    };
    const phoneNumberEvent = {
      target: {
        name: "phoneNumber",
        value: newContact.phoneNumber,
        getAttribute: jest.fn(() => "phoneNumber"),
      },
    };
    let wrapper;
    await act(async () => {
      wrapper = mount(<Contacts {...props} />);
    });
    const contact = (await contactService.getContacts()).pop();
    wrapper.update();

    // Act
    wrapper.find("button").find({ id: "btn-add" }).simulate("click");
    wrapper
      .find("input")
      .find({ name: firstNameEvent.target.name })
      .simulate("change", firstNameEvent);
    wrapper
      .find("input")
      .find({ name: lastNameEvent.target.name })
      .simulate("change", lastNameEvent);
    wrapper
      .find("input")
      .find({ name: birthDateEvent.target.name })
      .simulate("change", birthDateEvent);
    wrapper
      .find("input")
      .find({ name: addressEvent.target.name })
      .simulate("change", addressEvent);
    wrapper
      .find("input")
      .find({ name: emailEvent.target.name })
      .simulate("change", emailEvent);
    wrapper
      .find("input")
      .find({ name: phoneNumberEvent.target.name })
      .simulate("change", phoneNumberEvent);
    await act(async () => {
      wrapper.find(ContactModalForm).find("form").simulate("submit");
      wrapper.find(ContactModalForm).find(".close").simulate("click");
    });
    wrapper.update();

    // Assert
    const tableBody = wrapper.find("tbody");
    expect(tableBody.props().children.length).toBe(1);
    expect(tableBody.props().children[0].props.children.length).toBe(6);
    expect(tableBody.props().children[0].props.children[0].props.children).toBe(
      newContact.firstName
    );
    expect(tableBody.props().children[0].props.children[1].props.children).toBe(
      newContact.lastName
    );
    expect(tableBody.props().children[0].props.children[2].props.children).toBe(
      newContact.birthDate
    );
    expect(tableBody.props().children[0].props.children[3].props.children).toBe(
      newContact.address
    );
    expect(tableBody.props().children[0].props.children[4].props.children).toBe(
      newContact.email
    );
    expect(tableBody.props().children[0].props.children[5].props.children).toBe(
      newContact.phoneNumber
    );
    (await contactService.getContacts()).pop();
    contactService.createContact(contact);
    wrapper.update();
  });

  it("should display detail modal if table row is clicked", async () => {
    // Arrange
    const history = createBrowserHistory();
    const props = {
      history: history,
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

    let wrapper;
    await act(async () => {
      wrapper = mount(<Contacts {...props} />);
    });
    wrapper.update();

    // Act
    const row = wrapper.find(ContactTable).find("tbody").find("tr");
    row.simulate("click");

    // Assert
    expect(wrapper.find(ContactDetailsModal).prop("isOpen")).toEqual(true);
    expect(wrapper.find(ContactDetailsModal).prop("contact")).toBeTruthy();
    const inputFields = wrapper
      .find(ContactDetailsModal)
      .find("p")
      .find("strong");
    expect(inputFields).toHaveLength(4);

    expect(inputFields.at(0).props().children).toBe(contact.birthDate);
    expect(inputFields.at(1).props().children).toBe(contact.address);
    expect(inputFields.at(2).props().children).toBe(contact.email);
    expect(inputFields.at(3).props().children).toBe(contact.phoneNumber);
  });

  it("should close client detail modal after toggle button is clicked", async () => {
    // Arrange
    const history = createBrowserHistory();
    const props = {
      history: history,
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
    let wrapper;
    await act(async () => {
      wrapper = mount(<Contacts {...props} />);
    });
    wrapper.update();

    // Act
    const row = wrapper.find(ContactTable).find("tbody").find("tr");
    row.simulate("click");
    wrapper.find(ContactDetailsModal).find(".close").simulate("click");

    // Assert
    expect(wrapper.find(ContactDetailsModal).prop("isOpen")).toEqual(false);
    expect(wrapper.find(ContactDetailsModal).prop("contact")).toEqual({});
  });
});
