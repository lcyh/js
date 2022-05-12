/*
 * @Author: changluo
 * @Description: https://blog.csdn.net/xiaoluodecai/article/details/107297404
 */
// 对于异步函数-宏任务
// window 有全局的错误捕获函数 onerror
try {
  setTimeout(function () {
    console.log(b);
  }, 0);
} catch (error) {
  console.log("error", error); // 这里是不会执行的
}
// window.onerror = function () {
//   console.log(...arguments);
// };

// 对于异步函数-微任务
// 对于微任务，js 有专门捕获没有写 catch 的 promise，如下：
window.addEventListener("unhandledrejection", function () {
  console.log("unhandledrejection", ...arguments);
});

// 更多知识点
// try-catch 中的异常只会抛出一层，即不会冒泡，也就是如果你有多层的 try-catch 然后异常已经被内层的 catch 捕获了，外层的 catch 是捕获不到异常的
try {
  try {
    throw new Error("oops");
    // new Promise((resolve, reject) => {
    //   reject("error111");
    // });
  } catch (ex) {
    console.error("inner", ex.message);
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.error("outer", ex.message);
}

// 打印:
// "inner" "oops"
// "finally"
