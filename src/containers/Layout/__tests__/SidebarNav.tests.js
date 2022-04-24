import { mount } from "enzyme";
import { createBrowserHistory } from "history";
import React from "react";
import { Nav } from "react-bootstrap";
import ReactDOM from "react-dom";
import { MemoryRouter, Router } from "react-router-dom";
import SidebarNav from "../SidebarNav";

describe("SidebarNav Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <SidebarNav />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should generate title nav item", () => {
    // Arrange
    const nav = {
      items: [
        {
          title: true,
          name: "Assets",
        },
      ],
    };
    const history = createBrowserHistory();
    history.push("/");

    // Act
    const wrapper = mount(
      <Router history={history}>
        <SidebarNav navConfig={nav} />
      </Router>
    );

    // Assert
    const navTitleItem = wrapper.find({ className: "nav-title" });
    expect(navTitleItem).toHaveLength(1);
    expect(navTitleItem.props().children).toBe(nav.items[0].name);
  });

  it("should generate link nav item", () => {
    // Arrange
    const nav = {
      items: [
        {
          name: "Clients",
          url: "/clients",
          icon: "fas fa-users",
        },
      ],
    };
    const history = createBrowserHistory();
    history.push("/");

    // Act
    const wrapper = mount(
      <Router history={history}>
        <SidebarNav navConfig={nav} />
      </Router>
    );

    // Assert
    const navLinkItem = wrapper.find(Nav.Item);
    expect(navLinkItem).toHaveLength(1);
    expect(navLinkItem.props().children.props.to).toBe(nav.items[0].url);
    expect(navLinkItem.props().children.props.active).toBe(false);
    expect(
      navLinkItem.props().children.props.children[0].props.className
    ).toMatch("nav-icon");
    expect(
      navLinkItem.props().children.props.children[0].props.className
    ).toMatch(nav.items[0].icon);
  });

  it("should remove style when link nav item is clicked", () => {
    // Arrange
    const nav = {
      items: [
        {
          name: "Clients",
          url: "/clients",
          icon: "fas fa-users",
        },
      ],
    };
    const history = createBrowserHistory();
    history.push("/");
    const wrapper = mount(
      <Router history={history}>
        <SidebarNav navConfig={nav} />
      </Router>
    );
    document.body.classList.add("sidebar-show");

    // Act
    const navLinkItem = wrapper.find(Nav.Item).find(Nav.Link);
    navLinkItem.simulate("click");

    // Assert
    expect(document.body.classList.contains("sidebar-show")).toBe(false);
  });

  it("should not remove style when link nav item is clicked", () => {
    // Arrange
    const nav = {
      items: [
        {
          name: "Clients",
          url: "/clients",
          icon: "fas fa-users",
        },
      ],
    };
    const history = createBrowserHistory();
    history.push("/");
    const wrapper = mount(
      <Router history={history}>
        <SidebarNav navConfig={nav} />
      </Router>
    );

    // Act
    const navLinkItem = wrapper.find(Nav.Item).find(Nav.Link);
    navLinkItem.simulate("click");

    // Assert
    expect(document.body.classList.contains("sidebar-show")).toBe(false);
  });

  it("should mark link nav item as active when current location matches route", () => {
    // Arrange
    const nav = {
      items: [
        {
          name: "Clients",
          url: "/clients",
          icon: "fas fa-users",
        },
      ],
    };
    const history = createBrowserHistory();
    history.push("/clients");

    // Act
    const wrapper = mount(
      <Router history={history}>
        <SidebarNav navConfig={nav} />
      </Router>
    );

    // Assert
    const navLinkItem = wrapper.find(Nav.Item);
    expect(navLinkItem).toHaveLength(1);
    expect(navLinkItem.props().children.props.to).toBe(nav.items[0].url);
    expect(navLinkItem.props().children.props.active).toBe(true);
    expect(
      navLinkItem.props().children.props.children[0].props.className
    ).toMatch("nav-icon");
    expect(
      navLinkItem.props().children.props.children[0].props.className
    ).toMatch(nav.items[0].icon);
  });
});
