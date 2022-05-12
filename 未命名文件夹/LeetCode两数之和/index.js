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
var twoSum = function(nums, target) {
    let map = new Map()
    let result = []
    for(let i=0;i<nums.length;i++){
        const num = target - nums[i];
        if(map.has(num)){
            const res =  [i,map.get(num)];
            result.push(res)
        }else{
            map.set(nums[i],i)
        }
    }
    if(result.length) return result;
    return -1
};
let nums = [2,7,11,15,3,6], target = 9;

console.log(twoSum(nums,target));
