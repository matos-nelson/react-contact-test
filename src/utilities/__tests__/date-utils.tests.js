import { dateUtils } from "utilities";

describe("Date Utils", () => {
  it("format should return formated date", () => {
    // Arrange

    // Act
    const result = dateUtils.format(new Date());

    // Assert
    expect(result).toBeTruthy();
  });
});
