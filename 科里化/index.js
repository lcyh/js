// 1.科里化函数  每一次接收一个参数，返回一个函数，可以连续接收一个个参数，每次都返回一个函数
// 判断数据类型

// 封装成一个函数
function isType1(type) { //Array object string
    return function (value) {
        return Object.prototype.toString.call(value) === `[object ${type}]`;
    }
}
// es6 科里化 返回函数
const isType = (type) => (value) => Object.prototype.toString.call(value) === `[object ${type}]`;
const isArray = isType('Array');
const isObject = isType('Object');

console.log('isArray({})', isObject({}));

const isType1 = (type) => (value) => Object.prototype.toString.call(value) === `[object ${type}]`;
const isArray = isType1('Array');
console.log('isArray([])', isArray([]));

let con1 = [].constructor;
let con2 = {}.constructor;
const fn = function () { }
let con3 = fn.constructor;
console.log('con1-con2-con3', { con1, con2, con3 });
console.log([] instanceof Array);

function add(num1, num2, num3, num4) {
    return num1 + num2 + num3 + num4;
}
function curry(fn) {
    let len = fn.length;
    return function innerCurry(...args) {
        if (args.length < len) {
            return function (...innerArgs) {
                let newArgs = args.concat(innerArgs);
                return innerCurry(...newArgs)
            }
        } else {
            return fn.call(null, ...args)
        }
    }
}
let fn1 = curry(add);
console.log(fn1(1, 3)(2)(4));


function add(num1, num2, num3, num4) {
    return num1 + num2 + num3 + num4;
}
function curry(fn, arr = []) {
    let len = fn.length;
    return function innerCurry(...args) {
        arr.push(...args);
        if (arr.length < len) {
            return curry(fn, arr)
        } else {
            return fn.call(null, ...arr)
        }
    }
}
let fn1 = curry(add);
console.log(fn1(1, 3)(2)(5));


function sum(n1, n2, n3, n4, n5) {
    return n1 + n2 + n3 + n4 + n5;
}
function curryFn2(fn, arr = []) {
    let len = fn.length;
    return function (...args) {
        const context = this;
        arr.push(...args);
        if (arr.length < len) {
            return curryFn2(fn, arr)
        } else {
            return fn.call(context, ...arr)
        }
    }
}
const fn = curryFn2(sum);
const fn1 = curryFn2(sum);
const res1 = fn1(1, 2)(3)(4)(5);
const res = fn(1, 2)(3)(4)(6);
console.log('res', res)
console.log('res1', res1)