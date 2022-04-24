import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { MemoryRouter, Router } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { mount } from "enzyme";
import Sidebar from "../Sidebar";

describe("Sidebar Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should add default styles when rendered", () => {
    // Arrange
    const history = createBrowserHistory();
    history.push("/");

    // Act
    mount(
      <Router history={history}>
        <Sidebar />
      </Router>
    );

    // Assert
    expect(document.body.classList.contains("sidebar-fixed")).toBe(true);
    expect(document.body.classList.contains("sidebar-lg-show")).toBe(true);
  });

  it("should not remove any style when mousedown events occurs on item with data-sidebar-toggler attribute", () => {
    // Arrange
    const history = createBrowserHistory();
    history.push("/");
    const map = {};
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    mount(
      <Router history={history}>
        <Sidebar />
      </Router>
    );
    const div = document.createElement("div");
    div.setAttribute("data-sidebar-toggler", "true");
    document.body.classList.add("sidebar-show");

    // Act
    act(() => {
      map.mousedown({ target: div });
    });

    // Assert
    expect(document.body.classList.contains("sidebar-show")).toBe(true);
  });

  it("should remove style when mousedown events occurs outside of sidebar", () => {
    // Arrange
    const history = createBrowserHistory();
    history.push("/");
    const map = {};
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    mount(
      <Router history={history}>
        <Sidebar />
      </Router>
    );
    const div = document.createElement("div");
    document.body.classList.add("sidebar-show");

    // Act
    act(() => {
      map.mousedown({ target: div });
    });

    // Assert
    expect(document.body.classList.contains("sidebar-show")).toBe(false);
  });

  it("should not remove any style when touchstart events occurs on item with data-sidebar-toggler attribute", () => {
    // Arrange
    const history = createBrowserHistory();
    history.push("/");
    const map = {};
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    mount(
      <Router history={history}>
        <Sidebar />
      </Router>
    );
    const div = document.createElement("div");
    div.setAttribute("data-sidebar-toggler", "true");
    document.body.classList.add("sidebar-show");

    // Act
    act(() => {
      map.touchstart({ target: div });
    });

    // Assert
    expect(document.body.classList.contains("sidebar-show")).toBe(true);
  });

  it("should remove style when touchstart events occurs outside of sidebar", () => {
    // Arrange
    const history = createBrowserHistory();
    history.push("/");
    const map = {};
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    mount(
      <Router history={history}>
        <Sidebar />
      </Router>
    );
    const div = document.createElement("div");
    document.body.classList.add("sidebar-show");

    // Act
    act(() => {
      map.touchstart({ target: div });
    });

    // Assert
    expect(document.body.classList.contains("sidebar-show")).toBe(false);
  });
});
