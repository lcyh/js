/*
 * @Author: changluo
 * @Description: 
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
    说明：本题中，我们将空字符串定义为有效的回文串。
 */

/*示例 1:

输入: "A man, a plan, a canal: Panama"
输出: true
示例 2:

输入: "race a car"
输出: false
*/

var isPalindrome = function (s) {
    const reg = /\W_/g
    let str = s.replace(reg, '');
    str.trim();
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        newStr += str[i].toLowerCase();
    }
    console.log('newStr', newStr);
    let i = 0;
    let j = newStr.length - 1;
    while (i < j) {
        if (newStr[i] !== newStr[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};

function isPalindrome1() {
    let str = "A man, a plan, a canal: Panama";
    str = str.replace(/\W/g, '')
    console.log('str--', str);

    let s = ''
    for (let i = 0; i < str.length; i++) {
        s += str[i].toLowerCase()
    }
    let startIndex = 0;
    let lastIndex = s.length - 1;
    while (startIndex <= lastIndex) {
        if (s[startIndex] !== s[lastIndex]) {
            return false
        }
        startIndex++
        lastIndex--
    }
    // console.log('str', str);
    // console.log('s', s);
    return true
}
console.log('isPalindrome1', isPalindrome1());

let a = 'ABcd';
a = a.toLowerCase()
console.log('str', a[1]);