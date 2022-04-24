import { objectUtils } from "utilities";

const item = {
  name: "item",
  temp: {
    temp: {
      key: "key",
      value: "value",
    },
  },
  age: 5,
};

describe("Object Utils", () => {
  it("findValue should return false if given pattern is null", () => {
    // Arrange

    // Act
    var result = objectUtils.findValue(item, null);

    // Assert
    expect(result).toBeFalsy();
  });

  it("findValue should return false if value can not be found in object", () => {
    // Arrange

    // Act
    var result = objectUtils.findValue(item, "temp");

    // Assert
    expect(result).toBeFalsy();
  });

  it("findValue should return false if value can not be found deep in object", () => {
    // Arrange

    // Act
    var result = objectUtils.findValue(item, "itemtemp");

    // Assert
    expect(result).toBeFalsy();
  });

  it("findValue should return true if value can be found in object", () => {
    // Arrange

    // Act
    var result = objectUtils.findValue(item, 5);

    // Assert
    expect(result).toBeTruthy();
  });

  it("findValue should return true if value can be found deep in object", () => {
    // Arrange

    // Act
    var result = objectUtils.findValue(item, "value");

    // Assert
    expect(result).toBeTruthy();
  });

  it("isEmpty should return false if param is not an object", () => {
    // Arrange
    const value = 1;

    // Act
    var result = objectUtils.isEmpty(value);

    // Assert
    expect(result).toBe(false);
  });

  it("isEmpty should return true if param is an empty object", () => {
    // Arrange
    const value = {};

    // Act
    var result = objectUtils.isEmpty(value);

    // Assert
    expect(result).toBe(true);
  });

  it("isEmpty should return false if param is not an empty object", () => {
    // Arrange
    const value = { name: "" };

    // Act
    var result = objectUtils.isEmpty(value);

    // Assert
    expect(result).toBe(false);
  });
});
