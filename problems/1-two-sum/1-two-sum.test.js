const twoSum = require('./1-two-sum');

test('two sum', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  expect(twoSum([3, 2, 4, 5], 6)).toEqual([1, 2]);
});