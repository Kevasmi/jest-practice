import { capitalize } from "./capitalize.js";

test("first letter of string capitalized", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});
