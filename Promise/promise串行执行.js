/*
 * @Author: changluo
 * @Description: promise 串行执行:执行完当前的才能执行下一个
 *  正常思路串行嵌套写法
    request(1, 1000).then(()=>{
        return request(2,2000).then(()=>{
            return request(3,3000)
        })
     })
 */
// 正常思路串行嵌套写法
// request(1, 1000).then(() => {
//     return request(2, 2000).then(() => {
//         return request(3, 3000)
//     })
// })
// 方法1:for循环 + async/await
function excutor(i, time) {
    return function () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(i)
                console.log('i', i);
            }, time)
        })
    }
}
let promiseArr = [excutor(1, 1000), excutor(2, 2000), excutor(3, 3000)];
async function handleSerial2(promiseArr) {
    const result = new Array(promiseArr.length)
    for (let i = 0; i < promiseArr.length; i++) {
        const promise = promiseArr[i]
        const res = await promise();
        result[i] = res;
    }
    return result
}
function handleSerial(promiseArr) {
    const result = new Array(promiseArr.length)
    let resolve = Promise.resolve()
    promiseArr.forEach((fn, index) => {
        resolve = resolve.then((res) => {
            result[index] = res;
            return fn()
        })
    });
    return result
}
console.log('handleSerial(promiseArr)', handleSerial(promiseArr));



// 方法2:递归调用
function handleSerial3() {
    const result = []
    const request = (url, time) => {
        return () => new Promise((resolve) => {
            setTimeout(() => {
                resolve(url)
                console.log('url', url)
                next()
            }, time)
        })
    }
    let promiseArr = [request(1, 1000), request(2, 2000), request(3, 3000)];
    const next = () => {
        const cur = promiseArr.shift()
        cur && cur().then((res) => {
            result.push(res)
            console.log('res', result)
        })
    }
    next()
}
// console.log('handleSerial3', handleSerial3())








