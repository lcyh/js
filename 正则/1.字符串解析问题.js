/*
 * @Author: changluo
 * @Description: 实现函数使得将str字符串中的{}内的变量替换，如果属性不存在保持原样（比如{a.d}）
 */
var a = {
  b: 123,
  c: "456",
  e: "789",
};
var str = `a{a.b}aa{a.c}aa {a.d}aaaa`;
// 输出 => 'a123aa456aa {a.d}aaaa'
function render(str, obj) {
  const reg = /\{\w+\.(\w+)\}/g;
  const computed = str.replace(reg, function (match, key) {
    console.log(match, key);
    return obj[key] || match;
  });
  return computed;
}
// console.log(render(str, a));

function render1() {
  let str = "assdd1234ddfdf678";
  const reg1 = /\{\w+\.(\w+)\}/g;
  const reg = /\d+/g;
  let num = [];
  const computed = str.replace(reg, function (match, key) {
    console.log(match, key);
    num.push(match);
    return "";
  });
  console.log("computed", computed, num);
  return computed;
}
render1();
// let a;
// let b = {
//     dispatch:a
// };
// a = function fn1(){};
// console.log('b',b);
// console.log('b',b.dispatch());

// let a = {
//     id:1
// };
// let b = a
// a.id = 2;
// console.log('b',b);
