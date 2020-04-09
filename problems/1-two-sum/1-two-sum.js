var twoSum = function (nums, target) {
  let tempIndex = -1;
  for (let i = 0; i < nums.length; i++) {
    tempIndex = nums.indexOf(target-nums[i]);
    if(tempIndex !== i && tempIndex !== -1) {
      return [i, tempIndex]
    }
  }
};

module.exports = twoSum;