
/*
 * 实现一个normalize函数，能将输入的特定字符串转化为特定结构化数据
 * 注：字符串仅由小写字母和[ ]组成，且字符串不会包含多余空格
 * 示例一：'abc' -> {value:'abc'}
 * 示例二：'[abc[bcd[def]]]' ->{value:'abc',children:{value:'bcd',children:{value:'def'}}}
 */
// {value:'abc'},
// {value:'abc',children:{value:'bcd'}},
// {value:'abc',children:{value:'bcd',children:{value:'def'}}},

function normalize(str) {
  const reg = /\w+/g;
  const arr = str.match(reg);
  console.log('arr', arr);
  const obj = {}
  arr.reduce((pre, cur, index, arr) => {
    pre.value = cur;
    if (index < arr.length - 1) {
      pre.children = {}
    }
    return pre.children;
  }, obj)
  return obj;
}
console.log('normalize()', normalize('abc'));// {value:'abc'}
console.log('normalize()', normalize('[abc[bcd[def]]]'));//{value:'abc',children:{value:'bcd',children:{value:'def'}}}



function fn() {
  const obj1 = {};
  return obj1.children = {}
}
console.log('fn', fn()); // {}

console.log('abc'.match(/\w+/g));



function fn1() {
  let arr = ['abc', 'def', 'ghi']// 
  let obj = {}
  let cur = obj;
  // arr.reduce((pre, cur, index, arr) => {
  //   pre.value = cur;
  //   if (index < arr.length-1) {
  //     pre.children = {};
  //   }
  //   return pre.children;
  // }, obj)
  // console.log('obj', obj);
  for (let i = 0; i < arr.length; i++) {
    cur.value = arr[i];
    if (i < arr.length - 1) {
      cur.children = {};
      cur = cur.children
    }
  }
  return obj;
}
console.log('fn11', fn1());