/*
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

示例 1：

输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map()
    let result = []
    for (let i = 0; i < nums.length; i++) {
        const num = target - nums[i];
        if (map.has(num)) {
            const res = [i, map.get(num)];
            result.push(res)
        } else {
            map.set(nums[i], i)
        }
    }
    if (result.length) return result;
    return -1
};
// let nums = [2, 7, 11, 15, 3, 6], target = 9;
// console.log(twoSum(nums, target));

function handleTwoSum(nums, target) {
    const res = [];
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                res.push([i, j])
            }
        }
    }
    return res
}
// let nums1 = [2, 7, 11, 15, 3, 6], target1 = 9;
// console.log('handleTwoSum', handleTwoSum(nums1, target1));



var twoSum1 = function (nums, target) {
    const res = [];
    // 必须要先排序
    nums.sort((a, b) => a - b)
    console.log('nums',nums);
    let i = 0, j = nums.length - 1;
    while (i < j) {
        if (nums[i] + nums[j] > target) {
            j--
        } else if (nums[i] + nums[j] < target) {
            i++
        } else {
            res.push([nums[i], nums[j]])
            i++
            j--
        }
    }
    return res
};
let nums1 = [2, 7, 11, 15, 3, 6], target1 = 9;
console.log('twoSum1', twoSum1(nums1, target1));