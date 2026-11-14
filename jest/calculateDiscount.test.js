const calculateDiscount = require("./calculateDiscount");
test("member should receive 10% discount", () => {
    // Arrange
    const price = 1000;
    const member = true;
    // Act
    const result = calculateDiscount(price, member);
    // Assert
    expect(result).toBe(900);
});