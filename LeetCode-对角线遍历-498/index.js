/*
 * https://leetcode-cn.com/problems/diagonal-traverse/
 * 
给你一个大小为 m x n 的矩阵 mat ，请以对角线遍历的顺序，用一个数组返回这个矩阵中的所有元素。

 

输入：matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
输出：[1,2,4,7,5,3,6,8,9]

 */

/**
* @param {number[][]} matrix
* @return {number[]}
*/
/**
    [1,2,3],
    [4,5,6],
    [7,8,9]

    i:行的索引
    j:列的索引
 */
// 方法1:
var findDiagonalOrder = function (mat) {
    if (mat.length < 1 || mat[0].length < 1) {
        return []
    }
    let i = 0, j = 0, n = mat.length, m = mat[0].length;
    let result = [];
    for (let k = 0; k < m * n; k++) {
        result.push(mat[i][j]);
        if ((i + j) % 2 === 0) { // 偶数
            if (j === m - 1) { // 最后一列
                i++ // 向下
            } else if (i === 0) { // 第一行
                j++ // 向右
            } else { // 向右上
                i--;//向上
                j++;//向右
            }
        } else { // 奇数
            if (i === n - 1) { // 最后一行
                j++ // 向右
            } else if (j === 0) { // 第一列
                i++ // 向下
            } else { // 向左下
                i++; //向下
                j--; //向左
            }
        }
    }
    return result
};
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log('findDiagonalOrder', findDiagonalOrder(matrix));

//方法2:
/**
1.同一对角线上的下标和相等
2.根据行和列遍历改二维数组,下标和没有值创建空数组,有值就push进去
3.将得到的二维数组循环遍历,如果是偶数进行反转,奇数不反转
4.将得到的二维数组扁平化
 */

var findDiagonalOrder1 = function (matrix) {
    if (matrix.length < 1 || matrix[0].length < 1) return []
    let result = [];
    let temp = [];
    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        for (let j = 0; j < row.length; j++) {
            if (!temp[i + j]) temp[i + j] = []
            temp[i + j].push(matrix[i][j])
        }
    }
    console.log('temp', temp);
    for (let k = 0; k < temp.length; k++) {
        const arr = temp[k]
        if (k % 2 === 0) {
            arr.reverse()
        }
        result.push(...arr)
    }
    console.log('result', result);
    return result
}
console.log('findDiagonalOrder1', findDiagonalOrder1(matrix));
