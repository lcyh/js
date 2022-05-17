/*
 * @Author: changluo
 * @Description: 给你一个由 '('、')' 和小写字母组成的字符串 s
 * 
你需要从字符串中删除最少数目的 '(' 或者 ')' （可以删除任意位置的括号)，使得剩下的「括号字符串」有效。
请返回任意一个合法字符串。
有效「括号字符串」应当符合以下 任意一条 要求：
空字符串或只包含小写字母的字符串
可以被写作 AB（A 连接 B）的字符串，其中 A 和 B 都是有效「括号字符串」
可以被写作 (A) 的字符串，其中 A 是一个有效的「括号字符串」

示例 1：
输入：s = "lee(t(c)o)de)"
输出："lee(t(c)o)de"
解释："lee(t(co)de)" , "lee(t(c)ode)" 也是一个可行答案。

示例 2：
输入：s = "a)b(c)d"
输出："ab(c)d"

示例 3：

输入：s = ")(("
输出：""
解释：空字符串也是有效的

示例 4：

输入：s = "(a(b(c)d)"
输出："a(b(c)d)"
 */
var minRemoveToMakeValid = (s) => {
    let stack = [];
    let remove = [];
    let flag = ['(', ')']
    for (let i = 0; i < s.length; i++) {
        if (flag.includes(s[i])) {
            if (s[i] === '(') {
                stack.push(i)
            } else {
                if (stack.length) {
                    stack.pop()
                } else {
                    remove.push(i)
                }
            }
        }
    }
    remove = [...stack, ...remove]
    console.log('remove', remove);
    const res = s.split('').filter((item, index) => !remove.includes(index)).join('')
    return res;
}
let s = "lee(t(c)o)de)"
let s1 = "(a(b(c)d)"
let s2 = ")(("
let s3 = "a)b(c)d"
// console.log(minRemoveToMakeValid(s));
console.log('/[a-z]+/', /[a-z]+/.test('aa'));

function remove(s) {
    const remove = [];
    const stack = []
    const reg = /[a-z]+/
    for (let i = 0; i < s.length; i++) {
        if (!reg.test(s[i])) {
            if (s[i] === '(') {
                stack.push(i)
            } else {
                if (stack.length === 0) {
                    remove.push(i)
                }else{
                    stack.pop()
                }
            }
        }
    }
    let arr = stack.concat(...remove);
    console.log(arr)
    let res = s.split('').filter((i,index) => !arr.includes(index)).join('')
    // console.log('res', res);
    return res;
}

function remove2(s) {
    const stack = []
    const reg = /[a-z]+/;
    for (let i = 0; i < s.length; i++) {
        if (!reg.test(s[i])) {
            if (s[i] === '(') {
                stack.push(i);
            } else {
                if (stack.length) {
                    stack.pop()
                } else {
                    stack.push(i)
                }
            }
        }
    }
    let res = s.split('').filter((item, index) => {
        return !stack.includes(index)
    });
    res = res.join('')
    return res;
}
console.log('remove', remove(s));