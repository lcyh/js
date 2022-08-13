/*
 * @Author: changluo

1.为什么 0.1+0.2 !== 0.3
2.如何实现 0.1+0.2 === 03
浮点数(0.1和0.2是十进制数)转成二进制丢失了精度，因此在二进制计算完后，再转回十进制时可能会和理论结果不同

原因：
1.计算机是通过二进制来进行计算的，即 0 和 1
就拿 0.1 + 0.2 来说： 
  0.1表示为0.0001100110011001...，//无限循环小数
  0.2表示为0.0011001100110011...//无限循环小数
而在二进制中 1 + 1 = 10，所以 0.1 + 0.2 = 0.0100110011001100...
转成10进制就近似表示为 0.30000000000000004

console.log(0.1 + 0.2);// 0.30000000000000004
 */

function add(a, b) {
  let maxLen = Math.max(a.length, b.length);
  a = a.padStart(maxLen, 0);
  b = b.padStart(maxLen, 0);
  console.log(a, b);
  let cur = 0; // 当前值
  let carry = 0; // 进位值
  let sum = ""; // 相加的值
  for (let i = maxLen - 1; i >= 0; i--) {
    cur = parseInt(a[i]) + parseInt(b[i]) + carry;
    carry = Math.floor(cur / 10);
    sum = (cur % 10) + sum;
  }
  if (carry > 0) {
    sum = "" + carry + sum;
  }
  return sum;
}
let a = "19000";
let b = "1234";
console.log("111", add2(a, b));

function add2(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let res = [];
  let carry = 0;
  while (i >= 0 || j >= 0) {
    const v1 = a[i] || 0;
    const v2 = b[j] || 0;
    const v = Number(v1) + Number(v2) + carry;
    carry = Math.floor(v / 10);
    res.unshift(v % 10);
    i--;
    j--;
  }
  if (carry) {
    res.unshift(carry);
  }
  return res.join("");
}
// 方法1：
function isEqual(a1, b1, sum) {
  const [int1, deci1] = a1.split(".");
  const [int2, deci2] = b1.split(".");
  const intV = add2(int1, int2);
  const deciV = add2(deci1, deci2);
  return intV + "." + deciV === sum.toString();
}
let a1 = "0.1";
let a2 = "0.2";
console.log("isEqual", isEqual(a1, a2, 0.3));

// 方法2 ：实现 0.1+0.2=0.3
function mathPlus(n1, n2) {
  let r1 = 0,
    r2 = 0,
    m = null;

  if (n1.toString().split(".").length > 1) {
    r1 = n1.toString().split(".")[1].length; // 获取小数点后字符长度
  }

  if (n2.toString().split(".").length > 1) {
    r2 = n2.toString().split(".")[1].length;
  }

  m = Math.pow(10, Math.max(r1, r2)); // 确保所有参数都为整数
  return (n1 * m + n2 * m) / m;
}
console.log(mathPlus(0.1, 0.2)); // 0.3
console.log(mathPlus(1, 2)); // 3
