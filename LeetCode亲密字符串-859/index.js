/**
给你两个字符串 s 和 goal ，只要我们可以通过交换 s 中的两个字母得到与 goal 相等的结果，就返回 true ；否则返回 false 。

交换字母的定义是：取两个下标 i 和 j （下标从 0 开始）且满足 i != j ，接着交换 s[i] 和 s[j] 处的字符。

例如，在 "abcd" 中交换下标 0 和下标 2 的元素可以生成 "cbad"

输入：s = "ab", goal = "ba"
输出：true
解释：你可以交换 s[0] = 'a' 和 s[1] = 'b' 生成 "ba"，此时 s 和 goal 相等。

输入：s = "ab", goal = "ab"
输出：false
解释：你只能交换 s[0] = 'a' 和 s[1] = 'b' 生成 "ba"，此时 s 和 goal 不相等。

输入：s = "aa", goal = "aa"
输出：true
解释：你可以交换 s[0] = 'a' 和 s[1] = 'a' 生成 "aa"，此时 s 和 goal 相等。

输入：s = "aaaaaaabc", goal = "aaaaaaacb"
输出：true

 */
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  // 1.字符串长度不相等
  if (s.length !== goal.length) return false;
  // 2.字符串相同
  if (s === goal) {
    // 并且有重复的字符串 aabc aacb
    return s.length > new Set(s).size;
  }
  let a = '';
  let b = '';
  // s = 'ab' goal = 'ba'
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      a = s[i] + a; // 'ba'
      b = b + goal[i]; // 'ba'
    }
  }
  // 只交换 两个 字符
  return (a.length === 2) && (a === b)
};
let s1 = 'aaaabc';
let s2 = 'aaaabc';
let s3 = 'aaaabc';
console.log(buddyStrings(s1, s3));