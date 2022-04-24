import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { mount } from "enzyme";
import { Pagination } from "components/base";
import TableHead from "../TableHead";
import TableBody from "../TableBody";
import DataTable from "../DataTable";

const columns = [
  { selector: "name", label: "Name" },
  { selector: "age", label: "Age" },
];

const data = [
  { name: "Person A", age: 1 },
  { name: "Person B", age: 2 },
  { name: "Person C", age: 3 },
  { name: "Person D", age: 4 },
  { name: "Person E", age: 5 },
  { name: "Person F", age: 6 },
  { name: "Person G", age: 7 },
  { name: "Person H", age: 8 },
  { name: "Person I", age: 9 },
  { name: "Person J", age: 10 },
  { name: "Person K", age: 11 },
  { name: "Person L", age: 12 },
  { name: "Person M", age: 13 },
  { name: "Person N", age: 14 },
  { name: "Person O", age: 15 },
];

describe("DataTable Component", () => {
  it("renders without crashing", () => {
    // Arrange
    const div = document.createElement("div");

    // Act
    ReactDOM.render(<DataTable data={data} columns={columns} />, div);
    ReactDOM.unmountComponentAtNode(div);

    // Assert
  });

  it("when columns props are given should display columns", () => {
    // Arrange

    // Act
    const wrapper = mount(<DataTable data={data} columns={columns} />);

    // Assert
    expect(wrapper.find(TableHead).props().columns).toStrictEqual(columns);
  });

  it("when given data prop is empty should display message", () => {
    // Arrange

    // Act
    const wrapper = mount(<DataTable data={[]} columns={columns} />);

    // Assert
    expect(wrapper.find("p").props().children).toBe(
      "No matching records found."
    );
  });

  it("when data props are given should display data up to default page size", () => {
    // Arrange

    // Act
    const wrapper = mount(<DataTable data={data} columns={columns} />);

    // Assert
    expect(wrapper.find(TableBody).props().data).toStrictEqual(
      data.slice(0, 10)
    );
  });

  it("when column is clicked should store column that was clicked and sort data based on clicked column", () => {
    // Arrange
    const wrapper = mount(<DataTable data={data} columns={columns} />);

    // Act
    const column = wrapper.find("tr").find("th").at(1);
    column.simulate("click");
    column.simulate("click");
    wrapper.update();

    // Assert
    const firstRow = wrapper.find("tbody").find("tr").at(0).find("td");
    expect(firstRow).toHaveLength(2);
    expect(firstRow.at(0).props().children).toBe(data[data.length - 1].name);
    expect(firstRow.at(1).props().children).toBe(data[data.length - 1].age);
    expect(wrapper.find({ "data-icon": "sort-down" })).toHaveLength(1);
    expect(wrapper.find(TableHead).props().sortColumn).toStrictEqual({
      selector: "age",
      order: "desc",
    });
  });

  it("when next page is clicked should display next section of given data", () => {
    // Arrange
    const wrapper = mount(<DataTable data={data} columns={columns} />);

    // Act
    const nextButton = wrapper
      .find(Pagination)
      .find("button")
      .find({ children: "Next" });
    nextButton.simulate("click");
    wrapper.update();

    // Assert
    const firstRow = wrapper.find("tbody").find("tr").at(0).find("td");
    expect(firstRow).toHaveLength(2);
    expect(firstRow.at(0).props().children).toBe(data[10].name);
    expect(firstRow.at(1).props().children).toBe(data[10].age);
    expect(wrapper.find(Pagination).props().currentPage).toBe(2);
  });

  it("when a search query is entered the data should be filtered based on entered search query", () => {
    // Arrange
    const wrapper = mount(<DataTable data={data} columns={columns} />);
    const input = { name: "searchQuery", value: data[11].name };
    const e = { currentTarget: input };

    // Act
    act(() => {
      wrapper.find("input").find({ name: input.name }).props().onChange(e);
    });
    wrapper.update();

    // Assert
    const row = wrapper.find("tbody").find("tr");
    expect(row).toHaveLength(1);
    const rowData = row.find("td");
    expect(rowData).toHaveLength(2);
    expect(rowData.at(0).props().children).toBe(data[11].name);
    expect(rowData.at(1).props().children).toBe(data[11].age);
    expect(wrapper.find("input").props().value).toStrictEqual(data[11].name);
    expect(wrapper.find(Pagination).props().currentPage).toStrictEqual(1);
  });

  it("when an entered search query causes the filtered data to be empty should display message", () => {
    // Arrange
    const wrapper = mount(<DataTable data={data} columns={columns} />);
    const input = { name: "searchQuery", value: data[11].name + data[11].name };
    const e = { currentTarget: input };

    // Act
    act(() => {
      wrapper.find("input").find({ name: input.name }).props().onChange(e);
    });
    wrapper.update();

    // Assert
    expect(wrapper.find("p").props().children).toBe(
      "No matching records found."
    );
  });
});
