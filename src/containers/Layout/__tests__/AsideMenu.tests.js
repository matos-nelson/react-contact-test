import { mount } from "enzyme";
import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import ReactDOM from "react-dom";
import AsideMenu from "../AsideMenu";

describe("AsideMenu Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AsideMenu />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should set first Nav Link to active when the Navlink is clicked", () => {
    // Arrange
    const wrapper = mount(<AsideMenu />);

    // Act
    const firstTab = wrapper
      .find(Tabs)
      .find({ "data-rb-event-key": "1" })
      .at(0);
    firstTab.simulate("click");

    // Assert
    const tabContainer = wrapper.find(Tab.Container);
    expect(tabContainer.at(0).props().activeKey).toBe("1");
  });

  it("should set second Nav Link to active when the Navlink is clicked", () => {
    // Arrange
    const wrapper = mount(<AsideMenu />);

    // Act
    const firstTab = wrapper
      .find(Tabs)
      .find({ "data-rb-event-key": "2" })
      .at(0);
    firstTab.simulate("click");

    // Assert
    const tabContainer = wrapper.find(Tab.Container);
    expect(tabContainer.at(0).props().activeKey).toBe("2");
  });

  it("should set third Nav Link to active when the Navlink is clicked", () => {
    // Arrange
    const wrapper = mount(<AsideMenu />);

    // Act
    const firstTab = wrapper
      .find(Tabs)
      .find({ "data-rb-event-key": "3" })
      .at(0);
    firstTab.simulate("click");

    // Assert
    const tabContainer = wrapper.find(Tab.Container);
    expect(tabContainer.at(0).props().activeKey).toBe("3");
  });
});
