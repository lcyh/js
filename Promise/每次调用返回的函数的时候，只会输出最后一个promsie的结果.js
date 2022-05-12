/*
 * @Description:
 *  编写一个高阶函数，这个高阶函数接收一个返回promise的函数作为参数，然后返回一个函数。
 *  每次调用返回的函数的时候，只会输出最后一个promsie的结果。
 * // 示例
let count = 1;
// 这是一个函数，返回promise
let promiseFunction = () =>
    new Promise(resolve =>
        setTimeout(() => {
            resolve(count++);
        })
    );

let lastFn = lastPromise(promiseFunction);
lastFn().then(console.log); // 无输出
lastFn().then(console.log); // 无输出
lastFn().then(console.log); // 3

 */
let count = 1;
// 这是一个函数，返回promise
let promiseFunction = () => {
    return new Promise(resolve =>
        setTimeout(() => {
            resolve(count++);
        },1000)
    );
}

function lastPromise(promiseFunction) {
    let time1 = 0;
    let time2 = 0;
    return function(){
        // time1优先加1
        time1++;
        return new Promise((resolve,reject)=>{
            // 等promiseFunction函数里的setTimeout,resolve之后，time2加1
             promiseFunction().then((res)=>{ 
                time2++;
                if(time1===time2){
                    resolve(res)
                }
            })
        })
    }
}
let lastFn = lastPromise(promiseFunction)
lastFn();
lastFn();
lastFn().then((res)=>{
    console.log(res)
});