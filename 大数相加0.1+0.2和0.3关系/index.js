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
    if (carry > 0) {
        sum = '' + carry + sum;
    }
    return sum;
}
let a = "9000";
let b = "1234";
// console.log('111', add(a, b));
// console.log(a[a.length - 1]);// 1




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
function isEqual(a1, b1, sum) {
    const [int1, deci1] = a1.split('.')
    const [int2, deci2] = b1.split('.')
    const intV = add2(int1, int2);
    const deciV = add2(deci1, deci2);
    return (intV + '.' + deciV) === (sum).toString()
}
let a1 = '0.1'
let a2 = '0.2'
console.log('isEqual', isEqual(a1, a2, 0.3))