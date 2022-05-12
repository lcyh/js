/*
 * https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/
 * 
输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。

输入：nums = [1,2,3,4]
输出：[1,3,2,4] 
注：[3,1,2,4] 也是正确的答案之一。
 */


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
    let i = 0; j = nums.length - 1;
    while (i < j) {
        if (nums[i] % 2 !== 0) { // 奇数
            i++
            continue;
        }
        if (nums[j] % 2 === 0) { // 偶数
            j--
            continue;
        }
        // i为偶数,j为奇数
        [nums[i], nums[j]] = [nums[j], nums[i]]
        i++;
        j--
    }
    return nums;
};
let arr = [1, 2, 3, 4, 6, 7, 8, 10]
console.log('exchange', exchange(arr));