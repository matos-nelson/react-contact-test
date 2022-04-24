import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "../Dashboard";

describe("Dashboard View Component", () => {
  it("renders without crashing", () => {
    // Arrange
    const div = document.createElement("div");

    // Act
    ReactDOM.render(<Dashboard />, div);
    ReactDOM.unmountComponentAtNode(div);

    // Assert
  });
});
