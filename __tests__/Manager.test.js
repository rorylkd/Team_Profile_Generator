
const { test, expect } = require("@jest/globals");
const Manager = require("../dist/js/Manager");

test('adds 1 + 2 to equal 3', () => {
    expect(Manager(1,2)).toBe(3);
});
