"use strict";

const {
  sum
} = require("./index.js");

const n = a => null;

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
test("should return null", () => {
  expect(n()).toBe(null);
});