/**
 * 题目描述:实现一个 add 方法 使计算结果能够满足如下预期： add(1)(2)(3)()=6 add(1,2,3)(4)()=10
其实就是考函数柯里化
*/
function add(...args) {
  let allArgs = [...args];
  function fn(...newArgs) {
    allArgs = [...allArgs, ...newArgs];
    if (!newArgs.length) {
      return allArgs.reduce((sum, cur) => sum + cur);
    }
    return fn;
  }
  //   fn.toString = function () {
  //     if (!allArgs.length) {
  //       return;
  //     }
  //     return allArgs.reduce((sum, cur) => sum + cur);
  //   };
  return fn;
}
// console.log("add(1)(2)(3)()", add(1)(2)(3)()); // 6

function add2(...args) {
  let res = [...args];
  const inner = (...innerArgs) => {
    res.push(...innerArgs);
    if (!innerArgs.length) {
      return res.reduce((pre, cur) => pre + cur);
    }
    return inner;
  };
  return inner;
}
console.log("add2(1)(2)(3)(4)()", add2(1)(2)(3)(4)()); // 6
