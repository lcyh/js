/*
 * @Author: changluo
 * @Description: 
 */
// promise打印顺序问题
new Promise((resolve, reject) => {
    console.log('1');
    resolve('1')
}).then((res1) => {
    console.log('2')
    console.log('res1', res1);
    return '3'
}).catch((err1) => {
    console.log('err1', err1);
}).then((res2) => {
    console.log(res2);
    throw Error('报错了')
}).catch((err2) => {
    console.log('err2', err2);
})
console.log('promise外面');

// then()函数的参数不是函数
new Promise((resolve) => {
    resolve()
}).then(2).then((res) => {
    console.log('res', res);
})

//解决异步的情况： 先把then的回调函数push到数组中，等到达异步时间时resolve()函数将状态变成Fulfilled，最后一次调用then回调函数
new Promise((resolve) => {
    console.log('3');
    setTimeout(() => {
        resolve()
    }, 1000)
}).then(() => {
    console.log('1');
}).then((res) => {
    console.log('2');
})
// 打印：3->1->2


new Promise((resolve) => {
    console.log('1');
    resolve()
}).then(() => {
    console.log('2');
}).then(() => {
    console.log('3');
})
// 打印：1->2->3


//
const mypromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('成功1'), 1000)
})
const mypromise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('成功2'), 2000)
})
mypromise.then(data => {
    console.log(data, '1')
    return mypromise2
}).then(data => {
    console.log(data, '2')
})

