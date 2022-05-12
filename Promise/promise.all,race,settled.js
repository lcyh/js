
let promise1 = () => {
    return new Promise((resolve, reject) => {
        console.log('promise1');
        resolve('promise1')
    })
}
let promise2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('promise2');
            resolve('promise2')
        }, 2000)
    })
}
let promiseError3 = () => {
    return new Promise((resolve, reject) => {
        console.log('promiseError3');
        reject('promiseError3')
    })
}

let PromiseAll = function (promiseArr) {
    let len = promiseArr.length;
    let arr = new Array(len);
    let count = 0;
    return new Promise((resolve, reject) => {
        for (let i = 0; i < len; i++) {
            Promise.resolve(promiseArr[i]).then((res) => {
                arr[i] = res;
                count++
                if (count === len) {
                    resolve(arr);
                }
            }, reject)
        }
    })
}
// let result = PromiseAll([promise1, promise2,promiseError3()]);
// result.then((res)=>{
//     console.log('PromiseAll-结果',res);
// }).catch(err=>{
//     console.log('err',err);
// })
// console.log('resultAll', result);

/**
 * @param {*} race 
 * race 函数返回一个 Promise，它将与第一个传递的 promise 相同的完成方式被完成。
 * 它可以是完成（ resolves），也可以是失败（rejects），这要取决于第一个完成的方式是两个中的哪个。
    如果传的迭代是空的，则返回的 promise 将永远等待。
 */

let PromiseRace = function (promiseArr) {
    return new Promise((resolve, reject) => {
        promiseArr.forEach((promiseItem) => {
            Promise.resolve(promiseItem).then((res) => {
                resolve(res);
            }, (err) => {
                reject(err)
            })
        })
    })
}
// let result2 = PromiseRace([promiseError3(),promise1, promise2,])
// result2.then((res) => {
//     console.log('resultRace', res);
// })

/**
 * 
 * @param {*} allSettled 
 * 该Promise.allSettled()方法返回一个在所有给定的promise都已经fulfilled或rejected后的promise，
 * 并带有一个对象数组，每个对象表示对应的promise结果。
 * 当您有多个彼此不依赖的异步任务成功完成时，或者您总是想知道每个promise的结果时，通常使用它。
 */
//allSettled
function allSettled(promises) {
    if (promises.length === 0) return Promise.resolve([])
    return new Promise((resolve, reject) => {
        let result = []
        let num = 0
        const check = () => {
            if (num === promises.length) resolve(result)
        }
        promises.forEach((item, index) => {
            Promise.resolve(item).then(
                res => {
                    result[index] = { status: 'fulfilled', value: res }
                    num++
                    check()
                },
                err => {
                    result[index] = { status: 'rejected', reason: err }
                    num++
                    check()
                }
            )
        })
    })
}
// let result = allSettled([promise1(), promise2(), promiseError3()])
// // let result = Promise.allSettled([promise1, promise2, promiseError3()])
// result.then((res) => {
//     console.log('result', res);
// })

/**
 * 
 * @param {*} allSettled
 * 该Promise.allSettled()方法返回一个在所有给定的promise都已经fulfilled或rejected后的promise，
 * 并带有一个对象数组，每个对象表示对应的promise结果。
当您有多个彼此不依赖的异步任务成功完成时，或者您总是想知道每个promise的结果时，通常使用它。
 */
function allSettledFn(promiseArr) {
    let count = 0;
    let arr = []
    return new Promise((resolve, reject) => {
        function check() {
            if (count >= promiseArr.length) {
                resolve(arr)
            }
        }
        promiseArr.forEach((promiseItem, index) => {
            Promise.resolve(promiseItem).then((res) => {
                count++
                arr[index] = { status: 'fulfilled', value: res }
                check()
            }, (err) => {
                count++
                arr[index] = { status: 'rejected', reason: err }
                check()
            })
        })
    })
}
let result2 = allSettledFn([promise1(), promise2(), promiseError3()]);
result2.then((res) => {
    console.log('res2', res);
})


/**
 * Promise.any() 接收一个Promise可迭代对象，只要其中的一个 promise 成功，就返回那个已经成功的 promise。
 * 如果可迭代对象中没有一个 promise 成功（即所有的 promises 都失败/拒绝），就返回一个失败的 promise 和AggregateError类型的实例，
 * 它是 Error 的一个子类，用于把单一的错误集合在一起。本质上，这个方法和Promise.all()是相反的。
 */
function promiseAny(promiseArr) {
    let count = 0;
    return new Promise((resolve, reject) => {
        promiseArr.forEach((promiseItem) => {
            Promise.resolve(promiseItem).then((res) => {
                resolve(res)
            }, (err) => {
                console.log('err-进来了', err);
                count++
                if (count === promiseArr.length) {
                    reject(new AggregateError('All promise are rejected'));
                }
            })
        })
    })
}
// let result = promiseAny([promiseError3()])
// result.then((res) => {
//     console.log('res-any', res);
// })