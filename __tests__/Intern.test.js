
const { test, expect } = require("@jest/globals");
const Intern = require("../dist/js/Intern");

test('adds 1 + 2 to equal 3', () => {
    expect(Intern(1,2)).toBe(3);
});
