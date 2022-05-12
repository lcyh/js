/*
 * https://leetcode-cn.com/problems/unique-paths/
 * 
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
问总共有多少条不同的路径？
示例 1:
输入：m = 3, n = 7
输出：28

示例 2:
输入：m = 3, n = 2
输出：3
 */

//  方法1；
// m=3,n=7 =>28(3行7列)
var uniquePaths = function (r, c) {  // r 行 c 列
    const memo = []
    for (let i = 0; i < c; i++) {
        memo.push([]);
    }
    for (let row = 0; row < c; row++) { // 第一行都是1
        memo[row][0] = 1;
    }
    for (let col = 0; col < r; col++) { // 第一列都是1
        memo[0][col] = 1;
    }
    for (let row = 1; row < c; row++) {
        for (let col = 1; col < r; col++) {
            memo[row][col] = memo[row - 1][col] + memo[row][col - 1]
        }
    }
    return memo[c - 1][r - 1]
};
console.log(uniquePaths(3, 7));

// m=3,n=7 =>28(3行7列)
function uniquePath2(m, n) { // 3*7
    const memo = [];
    for (let i = 0; i < n; i++) {
        memo.push([])
    }
    for (let col = 0; col < n; col++) { // 第一行都是1 二维数组
        memo[col][0] = 1;
    }
    for (let row = 0; row < m; row++) { // 第一列都是1 二维数组
        memo[0][row] = 1;
    }
    for (let col = 1; col < n; col++) { // 第2列开始
        for (let row = 1; row < m; row++) { // 第2行开始
            memo[col][row] = memo[col][row-1] + memo[col-1][row]
        }
    }
    return memo[n-1][m-1]
}
console.log(uniquePath2(3, 7));
