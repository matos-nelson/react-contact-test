import React from "react";
import ReactDOM from "react-dom";
import { create } from "react-test-renderer";
import SidebarMinimizer from "../SidebarMinimizer";

describe("SidebarMinimizer Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SidebarMinimizer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should minimize sidebar when minimizer is clicked", () => {
    // Arrange
    const component = create(<SidebarMinimizer />);

    // Act
    const rootInstance = component.root;
    const sidebarMinimizer = rootInstance.findByType("button");
    sidebarMinimizer.props.onClick();

    // Assert
    expect(document.body.classList.contains("sidebar-minimized")).toBe(true);
  });

  it("should unminimize sidebar when minimizer is clicked", () => {
    // Arrange
    const component = create(<SidebarMinimizer />);
    document.body.classList.add("sidebar-minimized");

    // Act
    const rootInstance = component.root;
    const sidebarMinimizer = rootInstance.findByType("button");
    sidebarMinimizer.props.onClick();

    // Assert
    expect(document.body.classList.contains("sidebar-minimized")).toBe(false);
  });

  it("should minimize brand when minimizer is clicked", () => {
    // Arrange
    const component = create(<SidebarMinimizer />);

    // Act
    const rootInstance = component.root;
    const sidebarMinimizer = rootInstance.findByType("button");
    sidebarMinimizer.props.onClick();

    // Assert
    expect(document.body.classList.contains("brand-minimized")).toBe(true);
  });

  it("should unminimize brand when minimizer is clicked", () => {
    // Arrange
    const component = create(<SidebarMinimizer />);
    document.body.classList.add("brand-minimized");

    // Act
    const rootInstance = component.root;
    const sidebarMinimizer = rootInstance.findByType("button");
    sidebarMinimizer.props.onClick();

    // Assert
    expect(document.body.classList.contains("brand-minimized")).toBe(false);
  });
});
