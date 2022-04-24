import React from "react";
import ReactDOM from "react-dom";
import ContactModalForm from "../ContactModalForm";

describe("ContactModalForm Component", () => {
  it("renders without crashing", () => {
    // Arrange
    const div = document.createElement("div");
    let contact = {
      firstName: "",
      lastName: "",
      birthDate: "",
      address: "",
      email: "",
      phoneNumber: "",
    };

    // Act
    ReactDOM.render(
      <ContactModalForm
        isOpen={true}
        onSubmit={jest.fn()}
        onClose={jest.fn()}
        onChange={jest.fn()}
        data={contact}
        errors={{}}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);

    // Assert
  });
});
