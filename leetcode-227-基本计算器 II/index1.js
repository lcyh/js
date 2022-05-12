/*
 * @Author: changluo
 * @Description: 
 * 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。整数除法仅保留整数部分
 * 
示例 1：

输入：s = "3+2*2"
输出：7

示例 2：

输入：s = " 3/2 "
输出：1

示例 3：

输入：s = " 3+5 / 2 "
输出：5

 */

var calculate = function (s) {
    s = s.trim();
    const stack = new Array();
    let preSign = '+';
    let num = 0;
    const n = s.length;
    for (let i = 0; i < n; ++i) {
        // 是数字并且不是 空字符串
        if (!isNaN(Number(s[i])) && s[i] !== ' ') {
            // num = num * 10 + s[i].charCodeAt() - '0'.charCodeAt();
            num = Number(s[i]);
        }
        // 符号
        if (isNaN(Number(s[i])) || i === n - 1) {
            switch (preSign) {
                case '+':
                    stack.push(num);
                    break;
                case '-':
                    stack.push(-num);
                    break;
                case '*':
                    stack.push(stack.pop() * num);
                    break;
                default:
                    stack.push(parseInt(stack.pop() / num));
            }
            preSign = s[i];
            // num = 0;
            console.log('stack', stack);
        }
    }
    let ans = 0;
    while (stack.length) {
        ans += stack.pop();
    }
    return ans;
};
// 1.s[i] = '3',preSign = '+',stack = [],num = 3; 
// 2.s[i] = '+',preSign = '+',stack = [3],num = 0;
// 3.s[i] = '2',preSign = '+',stack = [3],num = 2;
// 4.s[i] = '*',preSign = '*',stack = [3,2],num = 0;
// 满足两个条件: s[i] = 2 是 数字, i = n-1; 
// 5.s[i] = '2',preSign = '*',stack = [3,2*2],num = 2;

const s = "3+2*2"; 
const s1 = " 3/2 ";
const s2 = " 3+5 / 2 ";
console.log(calculate(s));

// let num = 0;
// let s = '3';
// num = num * 10 + s.charCodeAt() - '0'.charCodeAt();
// console.log('num', num);

// console.log('3', '3'.charCodeAt());
// console.log('0', '0'.charCodeAt());

// let s = ' 3/2 ';
// console.log('s',s);
