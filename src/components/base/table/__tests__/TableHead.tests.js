import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { mount } from "enzyme";
import TableHead from "../TableHead";

const columns = [
  { selector: "column1", label: "Column 1" },
  { selector: "column2", label: "Column 2" },
  { selector: "column3", label: "Column 3" },
];
describe("TableHead Component", () => {
  it("renders without crashing", () => {
    // Arrange
    const table = document.createElement("table");

    // Act
    ReactDOM.render(<TableHead columns={columns} />, table);
    ReactDOM.unmountComponentAtNode(table);

    // Assert
  });

  it("renders given table headers", () => {
    // Arrange

    // Act
    const wrapper = mount(
      <table>
        <TableHead columns={columns} />
      </table>
    );

    // Assert
    const headers = wrapper.find("th");
    expect(headers).toHaveLength(columns.length);
    for (let i = 0; i < columns.length; i++) {
      expect(headers.at(i).props().children[0]).toEqual(columns[i].label);
    }
  });

  it("should not render sort column if onSort is not given", () => {
    // Arrange

    // Act
    const wrapper = mount(
      <table>
        <TableHead columns={columns} />
      </table>
    );
    const headers = wrapper.find("th");
    headers.at(0).simulate("click");

    // Assert
    expect(wrapper.find({ "data-icon": "sort-up" })).toHaveLength(0);
    expect(wrapper.find({ "data-icon": "sort-down" })).toHaveLength(0);
  });

  it("should render initial sort column as asc if onSort is given", () => {
    // Arrange

    // Act
    const wrapper = mount(
      <table>
        <TableHead columns={columns} onSort={jest.fn()} />
      </table>
    );
    const headers = wrapper.find("th");
    headers.at(0).simulate("click");

    // Assert
    expect(wrapper.find({ "data-icon": "sort-up" })).toHaveLength(1);
  });

  it("should alternate between up and down order when sort column is clicked", () => {
    // Arrange

    // Act
    const wrapper = mount(
      <table>
        <TableHead columns={columns} onSort={jest.fn()} />
      </table>
    );
    const headers = wrapper.find("th");
    headers.at(0).simulate("click");
    headers.at(0).simulate("click");

    // Assert
    expect(wrapper.find({ "data-icon": "sort-up" })).toHaveLength(0);
    expect(wrapper.find({ "data-icon": "sort-down" })).toHaveLength(1);
  });

  it("raise sort should update sort column to up when initial sort column is down", () => {
    // Arrange

    // Act
    const wrapper = mount(
      <table>
        <TableHead columns={columns} onSort={jest.fn()} />
      </table>
    );
    const headers = wrapper.find("th");
    headers.at(0).simulate("click");
    headers.at(0).simulate("click");
    headers.at(0).simulate("click");

    // Assert
    expect(wrapper.find({ "data-icon": "sort-up" })).toHaveLength(1);
    expect(wrapper.find({ "data-icon": "sort-down" })).toHaveLength(0);
  });
});
