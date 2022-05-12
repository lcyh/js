/**
 * 
给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。

你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。

输入：num1 = "11", num2 = "123"
输出："134"

输入：num1 = "456", num2 = "77"
输出："533"

输入：num1 = "0", num2 = "0"
输出："0"
 */

/**
* @param {string} num1
* @param {string} num2
* @return {string}
*/
var addStrings = function (num1, num2) {
    let len = Math.max(num1.length, num2.length);
    num1 = num1.padStart(len, '0')
    num2 = num2.padStart(len, '0')
    let sum = '';
    let carry = 0;
    let cur = ''
    for (let i = len - 1; i >= 0; i--) {
        cur = Number(num1[i]) + Number(num2[i]) + carry;
        carry = Math.floor(cur / 10)
        sum = (cur % 10) + sum
    }
    if (carry) {
        sum = carry.toString() + sum
    }
    return sum
};
let num1 = "456", num2 = "77";
// console.log('addStrings', addStrings(num1, num2));


var addStrings1 = function (num1, num2) {
    let i = num1.length - 1, j = num2.length - 1, carry = 0, sum = '';
    while (i >= 0 || j >= 0) {
        let l1 = num1[i] === undefined ? 0 : num1[i]
        let l2 = num2[j] === undefined ? 0 : num2[j]
        let cur = Number(l1) + Number(l2) + carry
        carry = Math.floor(cur / 10);
        sum = (cur % 10) + sum
        i--;
        j--
    }
    if(carry){
        sum = carry + sum
    }
    return sum
}
console.log('addStrings111', addStrings1(num1, num2));
