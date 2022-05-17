// const的行为与let基本相同，唯一一个重要的区别是：
// 用const声明变量时必须同时初始化变量，且尝试修改const声明的变量会导致运行时报错：

// 1.必须赋值
const a; // error: 必须初始化 "const" 声明

// 2.不能修改 引用地址
const b = 250;
b = 520; // error: 无法赋值给 "b" ，因为它是常数

// 注意，const声明的限制只适用于它指向的变量的引用，
// 换句话说，如果const变量引用的是一个对象，那么修改这个对象内部的属性并不违反const限制：

const obj = { x: 666 };
obj.x = 888; // ok
obj.y = '啊哈哈'; // ok

// 3.全局声明
// 使用var在全局作用域中声明的变量会成为window对象的属性，let和const声明的变量则不会：
var a = 666;
console.log(window.a); // 666

let b = 666;
console.log(window.b); // undefined

const c = 666;
console.log(window.c); // undefined
