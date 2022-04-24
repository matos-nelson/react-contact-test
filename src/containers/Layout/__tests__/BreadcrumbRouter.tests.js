import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { mount } from "enzyme";
import { MemoryRouter, Router } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import BreadcrumbRouter from "../BreadcrumbRouter";

describe("BreadcrumbRouter Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <BreadcrumbRouter />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should not generate any breadcrumb items when given routes is empty", () => {
    // Arrange
    const routes = [];
    const history = createBrowserHistory();
    history.push("/");

    // Act
    const wrapper = mount(
      <Router history={history}>
        <BreadcrumbRouter routes={routes} />
      </Router>
    );

    // Assert
    const route = wrapper.find(Breadcrumb.Item);
    expect(route).toHaveLength(0);
  });

  it("should generate breadcrumb items when given routes", () => {
    // Arrange
    const routes = [
      { path: "/", exact: true, name: "Home" },
      { path: "/dashboard", name: "Dashboard" },
      { path: "/profile", exact: true, name: "Profile" },
    ];
    const history = createBrowserHistory();
    history.push("/dashboard");

    // Act
    const wrapper = mount(
      <Router history={history}>
        <BreadcrumbRouter routes={routes} />
      </Router>
    );

    // Assert
    const route = wrapper.find(Breadcrumb.Item);
    expect(route).toHaveLength(2);
    expect(route.at(0).props().children.active).toBeFalsy();
    expect(route.at(0).props().children.props.to).toBe("/");
    expect(route.at(0).props().children.props.children).toBe(routes[0].name);
    expect(route.at(1).props().active).toBeTruthy();
    expect(route.at(1).props().children).toBe(routes[1].name);
  });
});
