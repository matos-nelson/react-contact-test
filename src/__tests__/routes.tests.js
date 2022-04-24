import React from "react";
import { createBrowserHistory } from "history";
import { mount } from "enzyme";
import { renderRoutes } from "react-router-config";
import { Route, Router } from "react-router-dom";
import { act } from "react-dom/test-utils";
import routes from "../routes";

const loading = () => <div></div>;

describe("Routes", () => {
  it("renders dashboard route", () => {
    // Arrange
    const pathName = "/dashboard";
    const history = createBrowserHistory();
    history.push(pathName);

    // Act
    const wrapper = mount(
      <Router history={history}>
        <React.Suspense fallback={loading()}>
          {renderRoutes(routes)}
        </React.Suspense>
      </Router>
    );

    // Assert
    const route = wrapper.find(Route);
    expect(route).toHaveLength(1);
    expect(route.props().path).toBe(pathName);
  });

  it("renders contacts view route", () => {
    // Arrange
    const pathName = "/contacts";
    const history = createBrowserHistory();
    history.push(pathName);

    // Act
    const wrapper = mount(
      <Router history={history}>
        <React.Suspense fallback={loading()}>
          {renderRoutes(routes, {})}
        </React.Suspense>
      </Router>
    );

    // Assert
    const route = wrapper.find(Route);
    expect(route).toHaveLength(1);
    expect(route.props().path).toBe(pathName);
  });

  it("renders contacts update form route", async () => {
    // Arrange
    const pathName = "/contacts/1";
    const history = createBrowserHistory();
    history.push(pathName);

    // Act
    let wrapper;
    await act(async () => {
      wrapper = mount(
        <Router history={history}>
          <React.Suspense fallback={loading()}>
            {renderRoutes(routes, {})}
          </React.Suspense>
        </Router>
      );
    });
    wrapper.update();

    // Assert
    const route = wrapper.find(Route);
    expect(route).toHaveLength(1);
    expect(route.props().path).toBe("/contacts/:id");
  });
});
