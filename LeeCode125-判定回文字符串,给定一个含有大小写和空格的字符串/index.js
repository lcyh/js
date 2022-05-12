/*
 * @Author: changluo
 * https://leetcode-cn.com/problems/valid-palindrome/
 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
说明：本题中，我们将空字符串定义为有效的回文串。

输入: "A man, a plan, a canal: Panama"
输出: true
解释："amanaplanacanalpanama" 是回文串

输入: "race a car"
输出: false
解释："raceacar" 不是回文串

输入: "ab_a"
输出: true
 */


var isPalindrome = function (s) {
    const reg = /\W/g
    s = s.replace(reg, '').replace('_', '')
    s = s.toLowerCase()
    let i = 0;
    let j = s.length - 1
    while (i < j) {
        if (s[i] !== s[j]) return false
        i++
        j--
    }
    return true
};
let str = "A man, a plan, a canal: Panama"
let str1 = "race a car"
let str2 = "ab_a"
console.log('isPalindrome', isPalindrome(str2));
