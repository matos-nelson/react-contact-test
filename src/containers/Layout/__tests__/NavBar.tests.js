import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { create } from "react-test-renderer";
import Avatar from "react-avatar";
import NavBar from "../NavBar";

describe("NavBar Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should apply default styles when mounted", () => {
    // Arrange
    const component = create(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    const instance = component.getInstance();

    // Act
    instance.componentDidMount();

    // Assert
    expect(document.body.classList.contains("header-fixed")).toBe(true);
  });

  it("given a user should display an avatar with user initials", () => {
    // Arrange
    const component = create(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    const instance = component.getInstance();

    // Act
    instance.componentDidMount();

    // Assert
    const rootInstance = component.root;
    const avatar = rootInstance.findByType(Avatar);
    expect(avatar.props.name).toBe("Nelson Matos");
  });

  it("given an invalid user it should display a default avatar", () => {
    // Arrange
    const component = create(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    const instance = component.getInstance();

    // Act
    instance.componentDidMount();

    // Assert
    const rootInstance = component.root;
    const avatar = rootInstance.findByType(Avatar);
    expect(avatar.props.name).toBe("Nelson Matos");
  });

  it("should remove sidebar from window when sidebar is being toggled", () => {
    // Arrange
    const component = create(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    const instance = component.getInstance();
    instance.componentDidMount();

    // Act
    const rootInstance = component.root;
    const sidebarToggler = rootInstance.findByProps({ name: "sidebar-toggle" });
    sidebarToggler.props.onClick();

    // Assert
    expect(document.body.classList.contains("sidebar-lg-show")).toBe(true);
  });

  it("should show sidebar on window when sidebar is being toggled", () => {
    // Arrange
    const component = create(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    document.body.classList.add("sidebar-lg-show");
    const instance = component.getInstance();
    instance.componentDidMount();

    // Act
    const rootInstance = component.root;
    const sidebarToggler = rootInstance.findByProps({ name: "sidebar-toggle" });
    sidebarToggler.props.onClick();

    // Assert
    expect(document.body.classList.contains("sidebar-lg-show")).toBe(false);
  });

  it("should remove sidebar from mobile window when sidebar is being toggled", () => {
    // Arrange
    const component = create(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    const instance = component.getInstance();
    instance.componentDidMount();

    // Act
    const rootInstance = component.root;
    const sidebarToggler = rootInstance.findByProps({
      name: "sidebar-toggle-mobile",
    });
    sidebarToggler.props.onClick();

    // Assert
    expect(document.body.classList.contains("sidebar-show")).toBe(true);
  });

  it("should show sidebar on mobile window when sidebar is being toggled", () => {
    // Arrange
    const component = create(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    document.body.classList.add("sidebar-show");
    const instance = component.getInstance();
    instance.componentDidMount();

    // Act
    const rootInstance = component.root;
    const sidebarToggler = rootInstance.findByProps({
      name: "sidebar-toggle-mobile",
    });
    sidebarToggler.props.onClick();

    // Assert
    expect(document.body.classList.contains("sidebar-show")).toBe(false);
  });
});
