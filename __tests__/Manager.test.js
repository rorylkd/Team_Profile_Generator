
const { test, expect } = require("@jest/globals");
const Manager = require("../dist/js/Manager");

describe("Manager", () => {
    test("throws an error if no office number is given", () => {
      expect(() => {
        new Manager("Amy", 3, "hotmale@hotmail.com", "");
      }).toThrow("Please provide an office number");
    });
});
