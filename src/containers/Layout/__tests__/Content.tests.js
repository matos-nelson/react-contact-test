import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { mount } from "enzyme";
import { MemoryRouter, Route, Router } from "react-router-dom";
import Content from "../Content";

describe("Content Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <Route path="/" name="Home" component={Content} />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders given route", () => {
    // Arrange
    const pathName = "/contacts";
    const history = createBrowserHistory();
    history.push(pathName);

    // Act
    const wrapper = mount(
      <Router history={history}>
        <Content />
      </Router>
    );

    // Assert
    const route = wrapper.find(Route).find({ name: "Contacts" });
    expect(route).toHaveLength(1);
    expect(route.props().location.pathname).toBe(pathName);
  });
});
