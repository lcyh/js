/*
 * @Author: changluo
 * @Description: 箭头函数
 * 
 * 1.语法更加简洁、清晰
 * 2.箭头函数没有 prototype (原型)，所以箭头函数本身没有this​​​​​​​
 * 3.箭头函数不会创建自己的this,箭头函数没有自己的this，
 * 箭头函数的this指向在定义（注意：是定义时，不是调用时）的时候继承自外层第一个普通函数的this。
 * 所以，箭头函数中 this 的指向在它被定义的时候就已经确定了，之后永远不会改变。
 * 4.call | apply | bind 无法改变箭头函数中this的指向
 * 5.箭头函数不能作为构造函数使用
 * 6.箭头函数不绑定arguments，取而代之用rest参数...代替arguments对象，来访问箭头函数的参数列表,
 * 箭头函数没有自己的arguments对象。在箭头函数中访问arguments实际上获得的是外层局部（函数）执行环境中的值。
 * 7.箭头函数不能用作Generator函数，不能使用yield关键字
 */
// 2.箭头函数没有 prototype (原型)，所以箭头函数本身没有this​​​​​​​
// 箭头函数
let a = () => { };
console.log(a.prototype); // undefined

// 普通函数
function a() { };
console.log(a.prototype); // {constructor:f}


// 3.箭头函数不会创建自己的this,箭头函数中 this 的指向在它被定义的时候就已经确定了，之后永远不会改变。
let obj = {
    a: 10,
    b: () => {
        console.log(this.a); // undefined
        console.log(this); // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
    },
    c: function () {
        console.log(this.a); // 10
        console.log(this); // {a: 10, b: ƒ, c: ƒ}
    }
}
obj.b();
obj.c();


// 4.call | apply | bind 无法改变箭头函数中this的指向,箭头函数中 this 的指向在它被定义的时候就已经确定了，之后永远不会改变。
var id = 10;
let fun = () => {
    console.log(this.id)
};
fun();     // 10
fun.call({ id: 20 });     // 10
fun.apply({ id: 20 });    // 10
fun.bind({ id: 20 })();   // 10


// 5.箭头函数不能作为构造函数使用
let Fun = (name, age) => {
    this.name = name;
    this.age = age;
};

// 报错
let p = new Fun('dingFY', 24);


//7.箭头函数不能用作Generator函数，不能使用yield关键字
// 普通函数
function A(a) {
    console.log(arguments);
}
A(1, 2, 3, 4, 5, 8);  //  [1, 2, 3, 4, 5, 8, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// 箭头函数
let B = (b) => {
    console.log(arguments);
}
B(2, 92, 32, 32);   // Uncaught ReferenceError: arguments is not defined

// rest参数...
let C = (...c) => {
    console.log(c);
}
C(3, 82, 32, 11323);  // [3, 82, 32, 11323]