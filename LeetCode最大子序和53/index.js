/*
 * https://leetcode-cn.com/problems/merge-sorted-array
 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
子数组 是数组中的一个连续部分。

输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

输入：nums = [1]
输出：1

输入：nums = [5,4,-1,7,8]
输出：23

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (!nums.length) return [];
  if (nums.length === 1) return nums;
  let maxNum = nums[0];
  let memo = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    memo[i] = Math.max(nums[i], nums[i] + memo[i - 1]);
    maxNum = Math.max(maxNum, memo[i]);
  }
  return maxNum;
};

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("maxSubArray", maxSubArray(nums));

var maxSub = function (arr) {
  if (arr.length === 1) return arr[0];
  let max = arr[0];
  let memo = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    memo[i] = Math.max(arr[i] + memo[i - 1], arr[i]);
    max = Math.max(memo[i], max);
  }
  return max;
};

console.log("maxSub", maxSub([5, 4, -1, 7, 8]));
