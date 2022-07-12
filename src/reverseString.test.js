import { reverseString } from "./reverseString.js";

test("reverse a string", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});
