/*
 * https://leetcode-cn.com/problems/unique-paths/
 * 
编写一个函数来查找数组中 最长的公共前缀
如果不存在公共前缀,就返回 ""
示例 1:
输入：['flower','flow','flight']
输出：fl

示例 2:
输入：['dog','car','racecar']
输出：''
输入不存在公共前缀
 */

//  方法1；

function longestCommonPrefix(arr) {
    let longestStr = ''
    if (arr && !arr.length) return longestStr;
    let index = 0;
    let firstStr = arr[0];
    while (index < firstStr.length) {
        longestStr = firstStr.slice(0, index + 1);
        for (let i = 0; i < arr.length; i++) {
            if(!arr[i] || !arr[i].startsWith(longestStr)){
                return firstStr.slice(0,index);//slice(sIndex,eIndex) [) 左闭右开区间
            }
        }
        index++
    }

}
let arr = ['flower', 'flow', 'flight'];
console.log(longestCommonPrefix(arr));


