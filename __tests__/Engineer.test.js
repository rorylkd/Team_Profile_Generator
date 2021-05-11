
const { test, expect } = require("@jest/globals");
const Engineer = require("../dist/js/Engineer");

test('adds 1 + 2 to equal 3', () => {
    expect(Engineer(1,2)).toBe(3);
});
