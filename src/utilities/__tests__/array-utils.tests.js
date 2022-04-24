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

  it("convertToOptions should return empty list if given config is null", () => {
    // Arrange

    // Act
    const result = arrayUtils.convertToOptions([], null);

    // Assert
    expect(result).toBeTruthy();
    expect(result).toHaveLength(0);
    expect(result).toStrictEqual([]);
  });

  it("convertToOptions should return empty list if given config does not have idKey defined", () => {
    // Arrange
    const config = { valueKey: "", labelKey: "" };

    // Act
    const result = arrayUtils.convertToOptions([], config);

    // Assert
    expect(result).toBeTruthy();
    expect(result).toHaveLength(0);
    expect(result).toStrictEqual([]);
  });

  it("convertToOptions should return empty list if given config does not have valueKey defined", () => {
    // Arrange
    const config = { idKey: "", labelKey: "" };

    // Act
    const result = arrayUtils.convertToOptions([], config);

    // Assert
    expect(result).toBeTruthy();
    expect(result).toHaveLength(0);
    expect(result).toStrictEqual([]);
  });

  it("convertToOptions should return empty list if given config does not have labelKey defined", () => {
    // Arrange
    const config = { idKey: "", valueKey: "" };

    // Act
    const result = arrayUtils.convertToOptions([], config);

    // Assert
    expect(result).toBeTruthy();
    expect(result).toHaveLength(0);
    expect(result).toStrictEqual([]);
  });

  it("convertToOptions should return empty list if given data is null", () => {
    // Arrange
    const config = { idKey: "", valueKey: "", labelKey: "" };

    // Act
    const result = arrayUtils.convertToOptions(null, config);

    // Assert
    expect(result).toBeTruthy();
    expect(result).toHaveLength(0);
    expect(result).toStrictEqual([]);
  });

  it("convertToOptions should not convert to option if given config idKey is not found in object", () => {
    // Arrange
    const data = [{ id: 1, fullName: "First Client" }];
    const config = { idKey: "", valueKey: "id", labelKey: "fullName" };

    // Act
    const result = arrayUtils.convertToOptions(data, config);

    // Assert
    expect(result).toBeTruthy();
    expect(result).toHaveLength(0);
    expect(result).toStrictEqual([]);
  });

  it("convertToOptions should not convert to option if given config valueKey is not found in object", () => {
    // Arrange
    const data = [{ id: 1, fullName: "First Client" }];
    const config = { idKey: "id", valueKey: "", labelKey: "fullName" };

    // Act
    const result = arrayUtils.convertToOptions(data, config);

    // Assert
    expect(result).toBeTruthy();
    expect(result).toHaveLength(0);
    expect(result).toStrictEqual([]);
  });

  it("convertToOptions should not convert to option if given config labelKey is not found in object", () => {
    // Arrange
    const data = [{ id: 1, fullName: "First Client" }];
    const config = { idKey: "id", valueKey: "id", labelKey: "" };

    // Act
    const result = arrayUtils.convertToOptions(data, config);

    // Assert
    expect(result).toBeTruthy();
    expect(result).toHaveLength(0);
    expect(result).toStrictEqual([]);
  });

  it("convertToOptions should convert to option", () => {
    // Arrange
    const data = [
      { id: 1, fullName: "First Client" },
      { id: 2, fullName: "Second Client" },
      { id: 3, fullName: "Third Client" },
    ];
    const config = { idKey: "id", valueKey: "id", labelKey: "fullName" };

    // Act
    const result = arrayUtils.convertToOptions(data, config);

    // Assert
    expect(result).toBeTruthy();
    expect(result).toHaveLength(3);
    for (let i = 0; i < result.length; i++) {
      expect(result[i].id).toStrictEqual(data[i].id);
      expect(result[i].value).toStrictEqual(data[i].id);
      expect(result[i].label).toStrictEqual(data[i].fullName);
    }
  });
});
