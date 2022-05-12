/*
 * https://leetcode-cn.com/problems/find-the-difference/
 * 
给定两个字符串 s 和 t ，它们只包含小写字母。

字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
请找出在 t 中被添加的字母。

输入：s = "abcd", t = "abcde"
输出："e"
解释：'e' 是那个被添加的字母。

输入：s = "", t = "y"
输出："y"

输入：s = "baba", t = "bebacab"
输入：s = "aba", t = "ebacab"
输入：s = "", t = "ecb"
输出："ecb"
 */


var findTheDifference = function (s, t) {
    if (!s || !s.length) return t;
    let res = ''
    const sArr = s.split('')
    const tArr = t.split('')
    for (let i = 0; i < tArr.length; i++) {
        if (sArr.includes(tArr[i])) {
            const index = sArr.indexOf(tArr[i]);
            sArr.splice(index,1)
            tArr.splice(i,1)
            i--
            continue
        }
        res += tArr[i]
    }
    return res
};
// let s = "abcd", t = "abcde";
// let s = "", t = "y";
// let s = "baba", t = "bebacab"
let s = "aa", t = "aaa"
console.log('findTheDifference', findTheDifference(s, t));