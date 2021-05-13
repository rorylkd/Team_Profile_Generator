
const { test, expect } = require("@jest/globals");
const Intern = require("../dist/js/Intern");

describe("Intern", () => {
    test("throws an error if no school is given", () => {
      expect(() => {
        new Intern("Amy", 3, "hotmale@hotmail.com", "");
      }).toThrow("Please provide a school");
    });
});
