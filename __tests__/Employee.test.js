const { describe, test, expect } = require("@jest/globals");
const Employee = require("../dist/js/Employee");

describe("Employee", () => {
  test("throws an error if no name is given", () => {
    expect(() => {
        new Employee("", 3, "hotmale@hotmail.com");
    }).toThrow("Please provide answers to all the prompts");
  });
});
