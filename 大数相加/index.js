/*
 * @Author: changluo
 * @Description: 题目描述:实现一个add方法完成两个大数相加
 * 
let a = "9007199254740991";
let b = "1234567899999999999";
function add(a ,b){
   //...
}
 */

function add(a, b) {
    let maxLen = Math.max(a.length, b.length);
    a = a.padStart(maxLen, 0);
    b = b.padStart(maxLen, 0);
    console.log(a, b);
    let cur = 0;// 当前值
    let carry = 0;// 进位值
    let sum = '';// 相加的值
    for (let i = maxLen - 1; i >= 0; i--) {
        cur = parseInt(a[i]) + parseInt(b[i]) + carry;
        carry = Math.floor(cur / 10);
        sum = cur % 10 + sum;
    }
    console.log('carry', carry);
    console.log('sum', sum);
    if (carry > 0) {
        sum = '' + carry + sum;
    }
    return sum;
}
let a = "9000";
let b = "1234";
// console.log('111', add(a, b));
// console.log(a[a.length - 1]);// 1



let a1 = '0.12345'
let a2 = '1.456'
function add2(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let res = [];
    let carry = 0;
    while (i >= 0 || j >= 0) {
        const v1 = a[i] || 0
        const v2 = b[j] || 0
        const v = Number(v1) + Number(v2) + carry
        carry = Math.floor(v / 10);
        res.unshift(v % 10);
        i--;
        j--;
    }
    if (carry) {
        res.unshift(carry)
    }
    return res.join('')
}
console.log('add2', add2(a1, a2))