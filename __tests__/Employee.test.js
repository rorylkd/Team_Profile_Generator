
const { test, expect } = require("@jest/globals");
const Employee = require("../dist/js/Employee");

test('adds 1 + 2 to equal 3', () => {
    expect(Employee(1,2)).toBe(3);
});