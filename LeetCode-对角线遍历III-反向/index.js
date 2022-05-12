/*
 * https://leetcode-cn.com/problems/diagonal-traverse/
 * 
给你一个列表 nums ，里面每一个元素都是一个整数列表。请你依照下面各图的规则，按顺序返回 nums 中对角线上的整数。
输出规则:从右到左对角线输出

输入：matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
输出：[3,2,6,1,5,9,4,8,7]

/**
 * 先将原数组反转
    [3,2,1],
    [6,5,4],
    [9,8,7]

输出[3,2,6,1,5,9,4,8,7]
 */
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
/**
解题思路:
1.先将原数组反转
2.同一对角线上的元素下标和相同
3.根据行和列正向遍历数组，根据下标和聚类
4.再将二维数组扁平化；
 */
var findDiagonalOrder1 = function (nums) {
    if (nums.length === 0) return [];
    let arrays = [], result = [];
    // 根据下标和 聚类
    for (let i = 0; i < nums.length; i++) {
        let rows = nums[i];
        rows.reverse()
        for (let j = 0; j < rows.length; j++) {
            if (!arrays[i + j]) arrays[i + j] = [];
            arrays[i + j].push(nums[i][j]);
        }
    }
    // 二维数组扁平化
    for (const rows of arrays) {
        result.push(...rows); //注意这里每个子数组都是倒序的，需要反转
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
