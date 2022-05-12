/*
 * @Author: changluo
 * @Description: 
 */

//promise的reject只能是promise().catch()捕获 
async function main() {
    console.log("1");
    try {
        console.log("2");
        await f1();
    } catch (error) { // try catch 无法捕获 promise的reject
        console.log("6");
        console.log("error----", error);
    }
}
function f1() {
    new Promise((resolve, reject) => {
        resolve("1");
        console.log("3");
    }).then(() => {
        console.log("4");
        f2();
    });
}
function f2() {
    new Promise((resolve, reject) => {
        console.log("5");
        reject("error: f2"); // triggerUncaughtException(err, true /* fromPromise */);
    }).catch((err) => {
        console.log('7');
        console.log('err', err);
    })
    // .catch((err)=>{
    //     console.log('7');
    //     console.log('err',err);
    // })
}
main(); // 分别打印: 1 2 3 4 5 7 err 'error: f2'

// try catch 捕获 throw new Error
function tryFn() {
    try {
        console.log('try');
        throw new Error('error-报错');
    } catch (err) {
        console.log('err', err);
    }
}
tryFn(); // 分别打印:try -> err Error: error-报错




