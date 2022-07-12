import { caesarCipher } from "./caesarCipher";

test("shifts each letter 3 spaces", () => {
  expect(caesarCipher("hello", 3)).toBe("khoor");
});
