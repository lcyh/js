/**
 * https://leetcode-cn.com/problems/N6YdxV/
 * 给定一个排序的整数数组 nums 和一个整数目标值 target ，
 * 请在数组中找到 target ，并返回其下标。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 O(log n) 的算法。

输入: nums = [1,3,5,6], target = 5
输出: 2

输入: nums = [1,3,5,6], target = 2
输出: 1

输入: nums = [1,3,5,6], target = 7
输出: 4

输入: nums = [1,3,5,6], target = 0
输出: 0
 */
var searchInsert = function (nums, target) {
    let i = 0, j = nums.length - 1;
    while (i <= j) {
        if (nums[i] < target) {
            i++;
        } else if (nums[i] === target) {
            return i
        } else {
            return i
        }
    }
    return i
};
var searchInsert1 = function (nums, target) {
    let i = 0, j = nums.length - 1;
    while (i <= j) {
        let midIndex = Math.floor((i + j) / 2);
        if (nums[midIndex] < target) {
            i = midIndex + 1
        } else if (nums[i] === target) {
            return i
        } else {
            j = midIndex - 1
        }
    }
    return i
};
// let nums = [1, 3, 5, 6], target = 7;
// console.log('searchInsert1', searchInsert1(nums, target));

var searchInsert2 = function (nums, target) {
    let j = nums.length;
    for (let i = 0; i < j; i++) {
        if (nums[i] >= target) {
            return i
        }
    }
    return j;
}
let nums = [1, 3, 5, 6], target = 5;
console.log('searchInsert2', searchInsert2(nums, target));