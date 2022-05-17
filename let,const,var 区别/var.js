/**
 * 
 1.var 声明的范围是函数作用域，let 和 const 声明的范围是块作用域
 2.var 声明的变量会被提升到函数作用域的顶部，let 和 const 声明的变量不存在提升，且具有暂时性死区特征
 3.var 允许在同一个作用域中重复声明同一个变量，let 和 const 不允许
 4.在全局作用域中使用 var 声明的变量会成为 window 对象的属性，let 和 const 声明的变量则不会
 5.const 的行为与 let 基本相同，唯一一个重要的区别是，使用 const 声明的变量必须进行初始化，且不能被修改
 */


// 1.未加 var声明的变量是 全局变量
// function test() {
//     message = "hi"; // 全局变量
// }
// test();
// console.log(message); // 'hi'


// 2.重复声明
function test() {
    var message = "hi";
    var message = false;
    var message = 666;

    console.log(message); 
}
test(); // 666

// 3.声明提升
function test() {
    console.log(message);
    var message = "hi";
}
test(); // undefined
