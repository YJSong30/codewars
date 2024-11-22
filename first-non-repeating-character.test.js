const firstNonRepeatingCharacter = require("./first-non-repeating-character.js");

test("basic test for a", function () {
  expect(firstNonRepeatingCharacter("a")).toBe("a");
});

test("basic test for stress", function () {
  expect(firstNonRepeatingCharacter("stress")).toBe("t");
});

test("basic test for moonmen", function () {
  expect(firstNonRepeatingCharacter("moonmen")).toBe("e");
});

// end to end, integration, unit tests
