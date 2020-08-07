const { flatten } = require("../../src/utils/flatten");

it("flatten's arrays", () => {
  expect(flatten([1, 2, [3, [[4], 5]], 6])).toEqual([1, 2, 3, 4, 5, 6]);
});

it("flatten's objects to arrays", () => {
  expect(flatten({ hello: 1, world: [2, 3, { foo: [[4]] }] })).toEqual([
    1,
    2,
    3,
    4
  ]);
});

it("flatten's array with boolean values", () => {
  expect(flatten([true, false, [true, false], true])).toEqual([
    true,
    false,
    true,
    false,
    true
  ]);
});
