/**
 * https://juejin.cn/post/6937469222251560990
 * 
 * 闭包经典使用场景:
 *  1.return 回一个函数
 *  2.函数作为参数
 *  3.IIFE（自执行函数）
 *  4.循环赋值
 *  5.使用回调函数就是在使用闭包
 *  6.节流防抖
 *  7.柯里化实现

 */
// 1.return 回一个函数 : 这里的 return f, f()就是一个闭包，存在上级作用域的引用。
var n = 10
function fn() {
    var n = 20
    function f() {
        n++;
        console.log(n)
    }
    return f
}

var x = fn()
x() // 21


// 2.函数作为参数
var a = 'lc一一'
function foo() {
    var a = 'foo'
    function fo() {
        console.log(a)
    }
    return fo
}

function f(p) {
    var a = 'f'
    p()
}
f(foo())
console.log('a', a);
/* 输出: foo
*/

// 3.IIFE（自执行函数）
var n = '林一一';
(function p() {
    console.log(n)
})()
/* 
同样也是产生了闭包p()，存在 window下的引用 n。

输出 : 林一一
*/


// 4.循环赋值
for (var i = 0; i < 10; i++) {
    (function (j) {
        setTimeout(function () {
            console.log(j)
        }, 1000)
    })(i)
}
/**
  因为存在闭包的原因上面能依次输出1~10，闭包形成了10个互不干扰的私有作用域。
    将外层的自执行函数去掉后就不存在外部作用域的引用了，输出的结果就是连续的 10。
    为什么会连续输出10，因为 JS 是单线程的遇到异步的代码不会先执行(会入栈)，
    等到同步的代码执行完 i++ 到 10时，异步代码才开始执行此时的 i=10 输出的都是 10。
 */

// 5.使用回调函数就是在使用闭包
global.name = '123'
setTimeout(function timeHandler() {
    console.log(global.name);  // 123
}, 100)


// 6.节流防抖
// 节流
function throttle(fn, timeout) {
    let timer = null
    return function (...arg) {
        if (timer) return
        timer = setTimeout(() => {
            fn.apply(this, arg)
            timer = null
        }, timeout)
    }
}

// 防抖
function debounce(fn, timeout) {
    let timer = null
    return function (...arg) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, arg)
        }, timeout)
    }
}


// 7.柯里化实现

function curry(fn,arr = []) {
    let len = fn.length;
    return function (...args) {
        arr.push(...args);
        if (arr.length >= len) {
            return fn.apply(this, arr)
        } else {
            return curry(fn, arr)
        }
    }
}
function logFn(a, b, c, d, e) {
    console.log(a + b + c + d + e)
}
let fn = curry(logFn)

// fn(1, 2, 3, 4, 5)  // 15
// fn(1, 2)(3, 4, 5)  // 15
// fn(1, 2)(3)(4)(5)  // 15
// fn(1)(2)(3)(4)(5)  // 15
