/*
 * @Author: changluo
 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

 * @Description: 给定两个字符串 s 和 t,判断 s是否被t包裹,包裹的条件,s字符串在位置信息不发生交换的情况下,
 * 所有的字符可以再 t 字符串中按顺序找到
 * 
输入：s = "abc", t = "ahbgdc"
输出：true

输入：s = "axc", t = "ahbgdc"
输出：false

 * 比如:给定 'ace'和'abcde',那么'ace'是被'abcde'包裹的;
 *         'aec'和'abcde',那么 'aec'不是被'abcde'包裹的;
 */


const wrapStr = (s1, s2) => {
    let arr2 = s2.split('');
    let res = []
    for (let i = 0; i < s1.length; i++) {
        let index = arr2.findIndex((item) => item === s1[i])
        res.push(index);
    }
    // console.log('res',res);
    if (!res.length) return false;
    for (let i = 1; i < res.length; i++) {
        if (res[i] < res[i - 1]) {
            return false
        }
    }
    return true;
}
let s1 = 'aec';
let s2 = 'abdce';
// i         0   1   2   3
// index     0  -1   2
// curIndex  0   0   -1
//              
// console.log('str11', wrapStr(s1, s2));


var isSubsequence = function (s, t) {
    if (s.length === 0) return true
    let i = 0;
    let j = 0;
    while (j < t.length) {
        if (s[i] === t[j]) {
            i++
        }
        j++
    }
    return s.length === i
};
let s = "abc", t = "ahbgdc";
console.log('isSubsequence', isSubsequence(s, t));



  