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
  test("throws an error if name includes numbers or special characters", () => {
    expect(() => {
      new Employee("X Æ A-Xii #1", 3, "hotmale@hotmail.com");
    }).toThrow("Please provide a valid name");
  });
  test("throws an error if id includes letters or special characters", () => {
    expect(() => {
      new Employee("Amy", "Amy?", "hotmale@hotmail.com");
    }).toThrow("Please provide a valid id");
  });
  test("throws an error if email does not include @", () => {
    expect(() => {
      new Employee("Amy", 3, "notAnEmail");
    }).toThrow("Please provide a valid email");
  });
});
