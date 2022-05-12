
function sum(a, b) {
    return a + b;
}
function str(num) {
    return num.toString();
}
function len(str) {
    return str + 'hello'.length;
}

// es6简版compose
const ArrowCompose = (...fns) => fns.reduce((a, b) => (...args) => a(b(...args)));
const resFn = ArrowCompose(sum, str, len);

// console.log(resFn(1, 2));


function a1(str1) {
    console.log("1");
    return "a1" + str1;
}
function b1(str2) {
    console.log("2");
    return "b1" + str2;
}
function c1(str3) {
    console.log("3");
    return "c1" + str3;
}
function composeReducer(composes) {
    return composes.reduce((pre, cur) => {
        return function (...args) {
            return pre(cur(...args));
        };
    });
}
// let str1 = composeReducer([a1, b1, c1])("hello");
// console.log(str1);

function compose(...fns) {
    if (fns.length === 0) return (arg) => arg;
    if (fns.length === 1) return fns[0];
    return fns.reduce((pre, cur) => {
        return function (...args) {
            return pre(cur(...args))
        }
    })
}
let str2 = compose(a1, b1, c1)("hello");
console.log('str2', str2);