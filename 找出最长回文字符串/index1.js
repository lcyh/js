/*
 * @Author: changluo
 * @Description: 找出最长的回文字符串
 */

function getLongestPalindrome(str) {
    let longestPalindrome = ''; //记录当前最长的回文字符串
    let currentPalindromeStr = ''; //当前的字符串
    for (let i = 0; i < str.length; i++) {
        currentPalindromeStr = '';
        for (let j = i; j < str.length; j++) {
            currentPalindromeStr += str.charAt(j); //逐个增加字符串的长度
            if (isPalindrome(currentPalindromeStr) && currentPalindromeStr.length > longestPalindrome.length) {
                longestPalindrome = currentPalindromeStr;
            }
        }
    }
    return longestPalindrome;
}
function isPalindrome(s) {
    let v = s.split('').reverse().join('');
    return v === s;
}
// 判断是否是回文字符串
function isPalindrome2(s) {
    if (typeof s !== String) return s;
    let str = '';
    for (let i = s.length - 1; i >= 0; i--) {
        str += s[i];
        // str += s.charAt(i);
    }
    return s === str;
}

function isPalindrome3(s) { // abcdcba
    let lastIndex = s.length - 1;
    let i = 0;
    let j = lastIndex;
    while (i < j) {
        if (s[i] === s[j]) {
            i++;
            j--;
        } else {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome3('abccba'))

let res = getLongestPalindrome('aabcddcbeff');
console.log('res', res);

// 找出最长回文字符串
function longestPalindrome(s) {
    let currentStr = '';
    let longestStr = '';
    for (let i = 0; i < s.length; i++) {
        currentStr = '';
        for (let j = i; j < s.length; j++) {
            currentStr += s.charAt(j);
            console.log('currentStr', currentStr);
            if (isPalindrome(currentStr) && currentStr.length > longestStr.length) {
                longestStr = currentStr;
            }
        }
    }
    return longestStr;
}
function isPalindrome(s) {
    let lastIndex = s.length - 1;
    let startIndex = 0;
    while (startIndex < lastIndex) {
        if (s[startIndex] !== s[lastIndex]) {
            return false;
        }
        startIndex++;
        lastIndex--;
    }
    return true;
}
console.log('最长回文字符串', longestPalindrome('abcdabba'));

console.log('abcdefg123'.charAt(1));


function longestPalindrome1(str) {
    let currentPalindrome = '';
    let longestPalindrome = ''
    for (let i = 0; i < str.length; i++) {
        currentPalindrome = '';
        for (let j = i; j < str.length; j++) {
            currentPalindrome += str.charAt(j)
            if (isPalindrome(currentPalindrome) && (currentPalindrome.length > longestPalindrome.length)) {
                longestPalindrome = currentPalindrome;
            }
        }
    }
    return longestPalindrome
}
function isPalindrome(str) {
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        if (str[i] !== str[j]) {
            return false
        }
        i++
        j--
    }
    return true;
}
console.log('最长回文字符串', longestPalindrome1('abcdabbadffdddff'));
