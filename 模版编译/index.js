/*
 * @Author: changluo
 * @Description: 模板编译原理  new Function + with()语法
 */

let obj = { age: 11, name: 'hello' }
let code = 'return name + age'
let str = `with(this) ${code}`; // this就是传进来的obj

function compileFn() {
    let fn = new Function(str);
    let res = fn.call(obj) // fn里的this就是obj
    return res;
}
let result = compileFn();
console.log('result', result); // 'hello11'