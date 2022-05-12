/*
 * https://leetcode-cn.com/problems/unique-paths/
 * 
示例 1:
输入：(){}[]
输出：true

示例 2:
输入：()[{
输出：false


示例 2:
输入：([{}])
输出：true
 */

//  方法1；
function valid(s) {
    if (s.length < 2) return false;
    let memo = new Map();
    let result = []
    memo.set("(", ")")
    memo.set("{", "}")
    memo.set("[", "]")
    for (let i = 0; i < s.length; i++) {
        if (memo.has(s[i])) {
            result.push(memo.get(s[i]))
        } else {
            if (result.pop() !== s[i]) {
                return false;
            }
        }
    }
    if (result.length > 0) return false;
    return true;
}
console.log(valid('([{}])'));// true


function isValid(str) {
    let arr = []
    let mapObj = new Map();
    mapObj.set('(', ')');
    mapObj.set('[', ']');
    mapObj.set('{', '}');
    for (let i = 0; i < str.length; i++) {
        const item = str[i];
        if (mapObj.has(item)) {
            arr.push(mapObj.get(item)) // [')',']','}']
        } else {
            if (item !== arr.pop()) {
                return false
            }
        }
    }
    if (arr.length) return false
    return true;
}
console.log(isValid('([{}]'));// true


// 示例 1:
// 输入：(){}[]
// 输出：true

// 示例 2:
// 输入：()[{
// 输出：false


// 示例 2:
// 输入：([{}])
// 输出：true


function validString(s) {
    const map = new Map();
    map.set('(', ')')
    map.set('[', ']')
    map.set('{', '}')
    const stack = []
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            stack.push(map.get(s[i]))
        }
        else {
            if (s[i] !== stack.pop()) {
                return false
            }
        }
    }
    if (stack.length) return false
    console.log('stack', stack);
    return true
}
console.log('validString', validString('()[]()')); // ([{}])