/*
 * https://leetcode-cn.com/problems/diagonal-traverse/
 * 
给你一个列表 nums ，里面每一个元素都是一个整数列表。请你依照下面各图的规则，按顺序返回 nums 中对角线上的整数。

输入：matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
输出：[1,4,2,7,5,3,8,6,9]

输入：nums = [
    [1,2,3,4,5],
    [6,7]
    [8],
    [9,10,11],
    [12,13,14,15,16]]
输出：[1,6,2,8,7,3,9,4,12,10,5,13,11,14,15,16]
 */
/**
* @param {number[][]} matrix
* @return {number[]}
*/
/**
    [1,2,3],
    [4,5,6],
    [7,8,9]

输出[1,4,2,7,5,3,8,6,9]
 */
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
/**
解题思路:
1.同一对角线上的元素下标和相同
2.根据行和列遍历数组，根据下标和聚类
3.再将二维数组扁平化；
 */
var findDiagonalOrder1 = function (nums) {
    if (nums.length === 0) return [];
    let arrays = [], result = [];
    // 根据下标和 聚类
    for (let i = 0; i < nums.length; i++) {
        let rows = nums[i];
        for (let j = 0; j < rows.length; j++) {
            if (!arrays[i + j]) arrays[i + j] = [];
            arrays[i + j].push(nums[i][j]);
        }
    }
    console.log('arrays', arrays);
    // 二维数组扁平化
    for (const rows of arrays) {
        rows.reverse()
        result.push(...row); //注意这里每个子数组都是倒序的，需要反转
    }
    return result;
};

let matrix1 = [
    [1, 2, 3, 4, 5],
    [6, 7],
    [8],
    [9, 10, 11],
    [12, 13, 14, 15, 16]
]
console.log('findDiagonalOrder1', findDiagonalOrder1(matrix));
