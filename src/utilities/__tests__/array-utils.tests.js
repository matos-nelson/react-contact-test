import { arrayUtils } from "utilities";

describe("Array Utils", () => {
  it("paginate should return false if given pattern is null", () => {
    // Arrange
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Act
    const result = arrayUtils.paginate(items, 1, 2);

    // Assert
    expect(result).toBeTruthy();
    expect(result).toStrictEqual([1, 2]);
  });
});
