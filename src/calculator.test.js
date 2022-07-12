import { calculator } from "./calculator.js";

test("add 1 + 2 equals 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("subtract 3 - 1 equals 2", () => {
  expect(calculator.subtract(3, 1)).toBe(2);
});

test("multiply 1 * 3 equals 3", () => {
  expect(calculator.multiply(1, 3)).toBe(3);
});

test("divide 3 / 1 equals 3", () => {
  expect(calculator.division(3, 1)).toBe(3);
});
