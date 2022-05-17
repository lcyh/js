/*
 * https://leetcode-cn.com/problems/fan-zhuan-dan-ci-shun-xu-lcof/
 输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。
 为简单起见，标点符号和普通字母一样处理。例如输入字符串"I am a student. "，则输出"student. a am I"。


输入: "the sky is blue"
输出: "blue is sky the"

输入: "  hello world!  "
输出: "world! hello"
解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。

输入: "a good   example"
输出: "example good a"
解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。

 */
// let s = "a good   example";
// s = s.trim()
// s = s.replace(/\s+/g, ',')
// console.log('s', s);

var reverseWords = function (s) {
    let i = 0, len = s.length, j = 0, arr = [];
    // 先去除字符串前面或后面的多余空格
    s = s.trim();
    while (j < len) {
        // j 指针找到第一个空格为止
        while (j < len && s[j] !== ' ') {
            j++;
        }
        arr.unshift(s.slice(i, j));
        // j 指针找到第一个非空格字符为止
        while (j < len && s[j] === ' ') {
            j++;
        }
        i = j;
    }
    return arr.join(' ');
};
let str = 'a good   example'
console.log('reverseWords:', reverseWords(str));


function reverseStr(s) {
    let i = 0, j = 0, len = s.length - 1, arr = [];
    s = s.trim()
    while (j < len) {
        while (j < len && s[j] !== ' ') {
            j++
        }
        arr.unshift(s.slice(i, j))
        while (j < len && s[j] === ' ') {
            j++
        }
        i = j
    }
    return arr.join(' ')
}
// console.log('reverseStr:', reverseStr('a good   example'));


function reverseStr2(s) {
    s = s.trim()
    let arr = s.split(' ')
    let i = 0;
    let j = arr.length - 1;
    while (i <= j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
        i++
        j--
    }
    return arr.join(' ');
}
console.log('reverseStr2:', reverseStr2('a good   example'));
