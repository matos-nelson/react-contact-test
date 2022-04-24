import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import TableBody from "../TableBody";

const columns = [
  { selector: "column1", label: "Column 1" },
  { selector: "column2", label: "Column 2" },
  { selector: "column3", label: "Column 3" }
];

const data = [
  {
    id: 1,
    column1: "data r1 c1",
    column2: "data r1 c2",
    column3: "data r1 c3"
  },
  {
    id: 2,
    column1: "data r2 c1",
    column2: "data r2 c2",
    column3: "data r2 c3"
  },
  {
    id: 3,
    column1: "data r3 c1",
    column2: "data r3 c2",
    column3: "data r3 c3"
  }
];

describe("TableBody Component", () => {
  it("renders without crashing", () => {
    const table = document.createElement("table");
    ReactDOM.render(<TableBody data={data} columns={columns} />, table);
    ReactDOM.unmountComponentAtNode(table);
  });

  it("renders given table data", () => {
    // Arrange

    // Act
    const wrapper = mount(
      <table>
        <TableBody data={data} columns={columns} />
      </table>
    );

    // Assert
    const rows = wrapper.find("tr");
    expect(rows).toHaveLength(data.length);
    for (let i = 0; i < rows.length; i++) {
      for (let j = 0; j < columns.length; j++) {
        expect(rows.at(i).props().children[j].props.children).toBe(
          data[i]["column" + (j + 1)]
        );
      }
    }
  });

  it("should not crash when onClick function is not given when row is clicked", () => {
    // Arrange
    const wrapper = mount(
      <table>
        <TableBody data={data} columns={columns} />
      </table>
    );

    // Act
    const rows = wrapper.find("td");
    rows.at(0).simulate("click");

    // Assert
  });

  it("should execute onClick function when row is clicked", () => {
    // Arrange
    const mockFn = jest.fn();
    const wrapper = mount(
      <table>
        <TableBody data={data} columns={columns} onRowClick={mockFn} />
      </table>
    );

    // Act
    const rows = wrapper.find("td");
    rows.at(0).simulate("click");

    // Assert
    expect(mockFn).toBeCalled();
  });
});
