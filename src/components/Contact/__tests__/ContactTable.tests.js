import React from "react";
import { Card } from "react-bootstrap";
import ReactDOM from "react-dom";
import { create } from "react-test-renderer";
import ContactTable from "../ContactTable";

describe("ContactTable Component", () => {
  it("renders without crashing", async () => {
    // Arrange
    const div = document.createElement("div");

    // Act
    ReactDOM.render(<ContactTable contacts={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);

    // Assert
  });

  it("should display correct header", () => {
    // Arrange

    // Act
    const component = create(<ContactTable contacts={[]} />);
    const rootInstance = component.root;

    // Assert
    const header = rootInstance.findByType(Card.Header);
    expect(header.props.children[0].props.className).toBe(
      "fas fa-address-book"
    );
    expect(header.props.children[1].props.children).toBe("Contacts");
  });
});
