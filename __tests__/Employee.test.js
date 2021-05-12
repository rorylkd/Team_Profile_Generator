const { describe, test, expect } = require("@jest/globals");
const Employee = require("../dist/js/Employee");

describe("Employee", () => {
  test("throws an error if inputs are empty", () => {
    expect(() => {
        new Employee();
    }).toThrow("Please provide answers to all the prompts");
  });
});
