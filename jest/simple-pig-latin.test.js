const pigIt = require("../js_files/simple-pig-latin");

test("basic test for simple sentence", function () {
  expect(pigIt("Pig latin is cool")).toBe("igPay atinlay siay oolcay");
});

test("basic test for single word input", function () {
  expect(pigIt("Pig")).toBe("igPay");
});

test("handles empty string input", function () {
  expect(pigIt("")).toBe("");
});

test("handles mixed punctuation and words", function () {
  expect(pigIt("Hello, world!")).toBe("elloHay, orldway!");
});
