const { describe, test, expect } = require("@jest/globals");
const Employee = require("../dist/js/Employee");

describe("Employee", () => {
  test("throws an error if no name is given", () => {
    expect(() => {
      new Employee("", 3, "hotmale@hotmail.com");
    }).toThrow("Please provide a name");
  });
  test("throws an error if no email is given", () => {
    expect(() => {
      new Employee("Amy", 3, "");
    }).toThrow("Please provide an email");
  });
  test("throws an error if no id is given", () => {
    expect(() => {
      new Employee("Amy", "", "hotmale@hotmail.com");
    }).toThrow("Please provide an id");
  });
});
