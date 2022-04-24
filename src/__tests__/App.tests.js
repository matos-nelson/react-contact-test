import React from "react";
import { mount, shallow } from "enzyme";
import { createBrowserHistory } from "history";
import { Router, Route } from "react-router-dom";
import App from "../App";

describe("App Component", () => {
  it("mounts without crashing", () => {
    // Arrange

    // Act
    const wrapper = shallow(<App />);
    wrapper.unmount();

    // Assert
  });

  it("500 path should route to Page500 component", () => {
    // Arrange
    const pathName = "/500";
    const history = createBrowserHistory();
    history.push(pathName);

    // Act
    const wrapper = mount(
      <Router history={history}>
        <App />
      </Router>
    );

    // Assert
    const route = wrapper.find(Route);
    expect(route).toHaveLength(1);
    expect(route.props().path).toMatch(pathName);
  });

  it("not found path should route to Page404 component", () => {
    // Arrange
    const pathName = "/not-found";
    const history = createBrowserHistory();
    history.push(pathName);

    // Act
    const wrapper = mount(
      <Router history={history}>
        <App />
      </Router>
    );

    // Assert
    const route = wrapper.find(Route);
    expect(route).toHaveLength(1);
    expect(route.props().path).toMatch(pathName);
  });

  it("dashboard path should route to DashBoard component", () => {
    // Arrange
    const pathName = "/";
    const history = createBrowserHistory();
    history.push(pathName);

    // Act
    const wrapper = mount(
      <Router history={history}>
        <App />
      </Router>
    );

    // Assert
    const route = wrapper.find(Route);
    expect(route).toHaveLength(1);
    expect(route.props().path).toMatch(pathName);
  });
});
