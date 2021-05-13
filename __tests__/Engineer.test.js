
const { test, expect } = require("@jest/globals");
const Engineer = require("../dist/js/Engineer");

describe("Engineer", () => {
    test("throws an error if no github is given", () => {
      expect(() => {
        new Engineer("Amy", 3, "hotmale@hotmail.com", "");
      }).toThrow("Please provide a github");
    });
});
