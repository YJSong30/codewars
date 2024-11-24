const friend = require("../js_files/friend-or-foe");

test("handles array with different lengths", function () {
  expect(friend(["Ryan", "Kieran", "Mark"])).toEqual(["Ryan", "Mark"]);
});

test("handles array with different types of strings", function () {
  expect(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])).toEqual(["Ryan"]);
});

test("handles array with long strings", function () {
  expect(
    friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])
  ).toEqual(["Jimm", "Cari", "aret"]);
});
