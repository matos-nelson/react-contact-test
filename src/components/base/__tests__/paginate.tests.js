import React from "react";
import ReactDOM from "react-dom";
import { create } from "react-test-renderer";
import Pagination from "../pagination";

describe("Pagination Component", () => {
  it("renders without crashing", () => {
    // Arrange
    const div = document.createElement("div");

    // Act
    ReactDOM.render(
      <Pagination
        itemsCount={1}
        pageSize={1}
        currentPage={1}
        onPageChange={jest.fn()}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);

    // Assert
  });

  it("should disable prev button when on first page", () => {
    // Arrange

    // Act
    const component = create(
      <Pagination
        itemsCount={10}
        pageSize={1}
        currentPage={1}
        onPageChange={jest.fn()}
      />
    );
    const rootInstance = component.root;

    // Assert
    const pageNumbers = rootInstance.findAllByType("li");
    expect(pageNumbers.length).toBe(5);
    expect(pageNumbers[0].props.className).toBe("page-item disabled");
    expect(pageNumbers[0].props.children.props.children).toBe("Prev");
    expect(pageNumbers[1].props.className).toBe("page-item active");
    expect(pageNumbers[1].props.children.props.children).toBe(1);
    expect(pageNumbers[2].props.className).toBe("page-item");
    expect(pageNumbers[2].props.children.props.children).toBe(2);
    expect(pageNumbers[3].props.className).toBe("page-item");
    expect(pageNumbers[3].props.children.props.children).toBe(3);
    expect(pageNumbers[4].props.className).toBe("page-item");
    expect(pageNumbers[4].props.children.props.children).toBe("Next");
  });

  it("should disable next page item when on last page", () => {
    // Arrange

    // Act
    const component = create(
      <Pagination
        itemsCount={10}
        pageSize={1}
        currentPage={10}
        onPageChange={jest.fn()}
      />
    );
    const rootInstance = component.root;

    // Assert
    const pageNumbers = rootInstance.findAllByType("li");
    expect(pageNumbers.length).toBe(5);
    expect(pageNumbers[0].props.className).toBe("page-item");
    expect(pageNumbers[0].props.children.props.children).toBe("Prev");
    expect(pageNumbers[1].props.className).toBe("page-item");
    expect(pageNumbers[1].props.children.props.children).toBe(8);
    expect(pageNumbers[2].props.className).toBe("page-item");
    expect(pageNumbers[2].props.children.props.children).toBe(9);
    expect(pageNumbers[3].props.className).toBe("page-item active");
    expect(pageNumbers[3].props.children.props.children).toBe(10);
    expect(pageNumbers[4].props.className).toBe("page-item disabled");
    expect(pageNumbers[4].props.children.props.children).toBe("Next");
  });

  it("should display next and last 2 page items", () => {
    // Arrange

    // Act
    const component = create(
      <Pagination
        itemsCount={10}
        pageSize={1}
        currentPage={5}
        onPageChange={jest.fn()}
      />
    );
    const rootInstance = component.root;

    // Assert
    const pageNumbers = rootInstance.findAllByType("li");
    expect(pageNumbers.length).toBe(7);
    expect(pageNumbers[0].props.className).toBe("page-item");
    expect(pageNumbers[0].props.children.props.children).toBe("Prev");
    expect(pageNumbers[1].props.className).toBe("page-item");
    expect(pageNumbers[1].props.children.props.children).toBe(3);
    expect(pageNumbers[2].props.className).toBe("page-item");
    expect(pageNumbers[2].props.children.props.children).toBe(4);
    expect(pageNumbers[3].props.className).toBe("page-item active");
    expect(pageNumbers[3].props.children.props.children).toBe(5);
    expect(pageNumbers[4].props.className).toBe("page-item");
    expect(pageNumbers[4].props.children.props.children).toBe(6);
    expect(pageNumbers[5].props.className).toBe("page-item");
    expect(pageNumbers[5].props.children.props.children).toBe(7);
    expect(pageNumbers[6].props.className).toBe("page-item");
    expect(pageNumbers[6].props.children.props.children).toBe("Next");
  });

  it("when Prev page item is clicked should call onPageChange function", () => {
    // Arrange
    const mockFn = jest.fn();

    // Act
    const component = create(
      <Pagination
        itemsCount={10}
        pageSize={1}
        currentPage={5}
        onPageChange={mockFn}
      />
    );
    const rootInstance = component.root;

    // Assert
    const pageNumbers = rootInstance.findAllByType("li");
    expect(pageNumbers.length).toBe(7);
    expect(pageNumbers[0].props.className).toBe("page-item");
    expect(pageNumbers[0].props.children.props.children).toBe("Prev");
    pageNumbers[0].props.children.props.onClick();
    expect(mockFn).toHaveBeenCalled();
  });

  it("when Next page item is clicked should call onPageChange function", () => {
    // Arrange
    const mockFn = jest.fn();
    // Act
    const component = create(
      <Pagination
        itemsCount={10}
        pageSize={1}
        currentPage={5}
        onPageChange={mockFn}
      />
    );
    const rootInstance = component.root;

    // Assert
    const pageNumbers = rootInstance.findAllByType("li");
    expect(pageNumbers.length).toBe(7);
    expect(pageNumbers[6].props.className).toBe("page-item");
    expect(pageNumbers[6].props.children.props.children).toBe("Next");
    pageNumbers[6].props.children.props.onClick();
    expect(mockFn).toHaveBeenCalled();
  });

  it("when Next page item is clicked should call onPageChange function", () => {
    // Arrange
    const mockFn = jest.fn();
    // Act
    const component = create(
      <Pagination
        itemsCount={10}
        pageSize={1}
        currentPage={5}
        onPageChange={mockFn}
      />
    );
    const rootInstance = component.root;

    // Assert
    const pageNumbers = rootInstance.findAllByType("li");
    expect(pageNumbers.length).toBe(7);
    expect(pageNumbers[1].props.className).toBe("page-item");
    expect(pageNumbers[1].props.children.props.children).toBe(3);
    pageNumbers[1].props.children.props.onClick();
    expect(mockFn).toHaveBeenCalled();
  });
});
