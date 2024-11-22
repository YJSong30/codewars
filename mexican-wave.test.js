const mexican_wave = require("./mexican-wave.js");

test("basic test for hello", function () {
  expect(mexican_wave("hello")).toEqual([
    "Hello",
    "hEllo",
    "heLlo",
    "helLo",
    "hellO",
  ]);
});

test("basic test for hello", function () {
  expect(mexican_wave("codewars")).toEqual([
    "Codewars",
    "cOdewars",
    "coDewars",
    "codEwars",
    "codeWars",
    "codewArs",
    "codewaRs",
    "codewarS",
  ]);
});

test("basic test for gap", function () {
  expect(mexican_wave(" gap ")).toEqual([" Gap ", " gAp ", " gaP "]);
});
