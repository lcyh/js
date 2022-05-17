/*
 * https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/
 给两个整数数组 nums1 和 nums2 ，返回 两个数组中 公共的 、长度最长的子数组的长度 。

输入：nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
输出：3
解释：长度最长的公共子数组是 [3,2,1] 。

输入：nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
输出：5

 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
/**
     1 2 3 2 1(i)
   3 0 0 1 0 0
   2 0 1 0 2 0
   1 1 0 0 0 3
   4 0 0 0 0 0
   7 0 0 0 0 0
  (j) 
 */
var findLength = function (nums1, nums2) {
    // const dp = Array(nums1.length).fill(Array(nums2.length).fill(0))
    const dp = Array.from(Array(nums1.length), () => Array(nums2.length).fill(0));
    let max = 0
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                if (dp[i - 1] && dp[i - 1][j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1
                } else {
                    dp[i][j] = 1
                }
            } else {
                dp[i][j] = 0
            }
            max = Math.max(max, dp[i][j])
        }
    }
    return max

};

// let nums1 = [1, 2, 3, 2, 1], nums2 = [3, 2, 1, 4, 7]
// let nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
let nums1 = [1, 2, 3, 2, 1, 1], nums2 = [3, 2, 1, 1, 4, 7]
console.log('findLength', findLength(nums1, nums2));
