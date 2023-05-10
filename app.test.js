// import { capitalize } from ("app.js");
const { capitalize } = require("./app");
const { reverseString } = require("./app");
const { calculator } = require("./app");
const { caesarCipher } = require("./app");
const { analyzeArray } = require("./app");

test("capitalize", () => {
  expect(capitalize("word")).toBe("Word");
});

test("reverse string", () => {
  expect(reverseString("string")).toBe("gnirts");
});

test("calculator", () => {
  expect(calculator.sum(3, 2)).toBe(5);
  expect(calculator.subtract(7, 4)).toBe(3);
  expect(calculator.divide(8, 4)).toBe(2);
  expect(calculator.multiply(3, 2)).toBe(6);
});

test("caesar cipher", () => {
  expect(caesarCipher("bazooka", 2)).toBe("dcbqqmc");
  expect(caesarCipher("berlin", 24)).toBe("zcpjgl");
  expect(caesarCipher("berlin is a city, isn't it?", 5)).toBe(
    "gjwqns nx f hnyd, nxs'y ny?"
  );
});

test("analyze an array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
