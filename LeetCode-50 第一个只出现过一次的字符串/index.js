/*
 * https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/
 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

输入：s = "abaccdeff"
输出：'b'

输入：nums = 'eeeeee'
输出：' '

输入：s = "" 
输出：' '

 */
var firstUniqChar = function (s) {
    if (!s || s.length < 2) return s;
    let memo = new Map();
    for (let i = 0; i < s.length; i++) {
        if (!memo.has(s[i])) {
            memo.set(s[i], -1)
        } else {
            let val = memo.get(s[i])
            memo.set(s[i], val + 1)
        }
    }
    for (let [key, val] of memo) {
        if (val === -1) {
            return key
        }
    }
    return ''
};
let s = "eettcode"
let s1 = "eeeee"
let s2 = "leetcode"
//   console.log('firstUniqChar', firstUniqChar(s2));

var firstUniqChar2 = function (s) {
    if (!s || s.length < 2) return s;
    let memo = new Map();
    for (let i = 0; i < s.length; i++) {
        let val = memo.get(s[i])
        val = val ? val+1 : 1
        memo.set(s[i], val)
    }
    console.log('memo',memo);
    for (let [key, val] of memo) {
        if (val === 1) {
            return key
        }
    }
    console.log('memo',memo);
    return ''
};
console.log('firstUniqChar2', firstUniqChar2(s2));

  // var firstUniqChar2 = function(s) {
  //   for(let i=0;i<s.length;i++) {
  //       k = s.indexOf(s[i]);
  //       e = s.indexOf(s[i],k+1);
  //       if(e == -1) return s[i];
  //   }
  //   return " ";
  // };
  // console.log('firstUniqChar2',firstUniqChar2('eettcode'));