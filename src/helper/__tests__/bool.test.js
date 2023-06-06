const { returnBoolAfterOperation } = require("../BotFunctions");
const { AND, XOR, OR, NOR } = require("../BoolFunctions");

test("Checks 2 boolean values according to specified operation", () => {
  expect(returnBoolAfterOperation("AND", 0, 0)).toBe(0);
  expect(returnBoolAfterOperation("AND", 0, 1)).toBe(0);
  expect(returnBoolAfterOperation("AND", 1, 0)).toBe(0);
  expect(returnBoolAfterOperation("AND", 1, 1)).toBe(1);
  expect(returnBoolAfterOperation("XOR", 0, 0)).toBe(0);
  expect(returnBoolAfterOperation("XOR", 0, 1)).toBe(1);
  expect(returnBoolAfterOperation("XOR", 1, 0)).toBe(1);
  expect(returnBoolAfterOperation("XOR", 1, 1)).toBe(0);
  expect(returnBoolAfterOperation("OR", 0, 0)).toBe(0);
  expect(returnBoolAfterOperation("OR", 0, 1)).toBe(1);
  expect(returnBoolAfterOperation("OR", 1, 0)).toBe(1);
  expect(returnBoolAfterOperation("OR", 1, 1)).toBe(1);
  expect(returnBoolAfterOperation("NOR", 0, 0)).toBe(1);
  expect(returnBoolAfterOperation("NOR", 0, 1)).toBe(0);
  expect(returnBoolAfterOperation("NOR", 1, 0)).toBe(0);
  expect(returnBoolAfterOperation("NOR", 1, 1)).toBe(0);
});
