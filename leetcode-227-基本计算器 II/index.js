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
    let len = s.length;
    let stack = [];
    let num = 0;
    let preSign = '+';
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(Number(s[i])) && s[i] !== ' ') {
            num = num * 10 + Number(s[i]); // 记录当前数字
        }
        if (isNaN(Number(s[i])) || i === len - 1) {
            switch (preSign) {
                case '+':
                    stack.push(num);
                    break;
                case '-':
                    stack.push(-num);
                    break;
                case '*':
                    stack.push(stack.pop() * num)
                    break;
                default:
                    stack.push(parseInt(stack.pop() / num))
                    break;
            }
            num = 0;
            preSign = s[i];
        }
    }
    console.log('stack', stack);
    if (!stack.length) {
        return 0;
    }
    return stack.reduce((pre, cur) => pre + cur)
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
const s3 = " 421 ";
console.log(calculate(s3));

// let num = 0;
// let s = '3';
// num = num * 10 + s.charCodeAt() - '0'.charCodeAt();
// console.log('num', num);

// console.log('3', '3'.charCodeAt());
// console.log('0', '0'.charCodeAt());

// let s = ' 3/2 ';
// console.log('s',s);

function fn() {
    const s = " 3+5 / 2 ";
    for (let i = 0; i < s.length; i++) {
        console.log('s[i]', s[i])
        if (s[i] !== ' ') {
            console.log(i, s[i]);
        }
    }
}
fn()