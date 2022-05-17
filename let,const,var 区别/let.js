// 1.var声明的范围是函数作用域，而let声明的范围是块作用域：

if (true) {
    var message = "hi";
    console.log(message); // hi
}
console.log(message); // hi

// 1.块级作用域,不会 变量提升
if (true) {
    let message = "hi";
    console.log(message); // hi
}
console.log(message); // error: message is not defined


// 2.不能重复声明同一个变量
if (true) { 
    // error: 无法重新声明块范围变量“a”
    let a;
    let a;
}


let a = 666;
console.log(a); // 666
if (true) {
    let a = '啊哈哈';
    console.log(a); // 啊哈哈
}

//3.var和let声明的并不是不同类型的变量，它们只是指出变量在相关作用域如何存在，所以对声明冗余报错不会因混用var和let而受影响：
// error
var a;
let a;

// error
let b;
var b;



// 暂时性死区