import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import { createBrowserHistory } from "history";
import contactService from "services/contactService";
import { ContactDetailsModal } from "components/Contact";

describe("ContactDetailsModal Component", () => {
  it("renders without crashing", () => {
    // Arrange
    const div = document.createElement("div");
    const history = createBrowserHistory();
    const props = {
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
    ReactDOM.render(
      <ContactDetailsModal
        {...props}
        isOpen={true}
        onClose={jest.fn()}
        contact={contact}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);

    // Assert
  });

  it("displays contact information", () => {
    // Arrange
    const history = createBrowserHistory();
    const props = {
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
    const wrapper = mount(
      <ContactDetailsModal
        {...props}
        isOpen={true}
        onClose={jest.fn()}
        contact={contact}
      />
    );

    // Assert
    var contactInfoTitle = wrapper.find(ContactDetailsModal).find("h2");
    expect(contactInfoTitle.text()).toBe(
      contact.firstName + " " + contact.lastName
    );
    var contactInfo = wrapper.find(ContactDetailsModal).find("p");
    expect(contactInfo.length).toBe(4);
    expect(contactInfo.at(0).text()).toBe(contact.birthDate);
    expect(contactInfo.at(1).text()).toBe(contact.address);
    expect(contactInfo.at(2).text()).toBe(contact.email);
    expect(contactInfo.at(3).text()).toBe(contact.phoneNumber);
  });

  it("when edit button is clicked should store object and redirect to edit page", async () => {
    // Arrange
    const history = createBrowserHistory();
    const props = {
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
    const wrapper = mount(
      <ContactDetailsModal
        {...props}
        isOpen={true}
        onClose={jest.fn()}
        contact={contact}
      />
    );
    wrapper
      .find(ContactDetailsModal)
      .find("button")
      .find({ children: "Edit" })
      .simulate("click");

    // Assert
    const fetchedContact = await contactService.get(contact.id);
    expect(wrapper.props().history.location.pathname).toBe(
      "/contacts/" + contact.id
    );
    expect(fetchedContact).toStrictEqual(contact);
  });
});
