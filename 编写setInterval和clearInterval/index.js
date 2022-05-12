/*
 * @Author: changluo
 * @Description: 用 settimeout实现下setinterval和clearinterval
 */

const setIntervalFn = (callback, time) => {
    let timer;
    const fn = () => {
        timer = setTimeout(() => {
            callback();
            fn();
        }, time)
    }
    // fn.cancle = function(timerId){
    //     clearTimeout(timerId)
    // }
    fn()
    return timer;
}
const timerId = setIntervalFn(() => { console.log('hh') }, 2000);

const clearIntervalFn = (timerId) => {
    if (timerId) clearTimeout(timerId);
}
clearIntervalFn(timerId);


/*题目2: 实现一个简单版本的 setInterval*/
const SetInterval = (cb, time) => {
    let timerId = null;
    const fn = () => {
        if (timerId) clearTimeOut(timerId);
        timerId = setTimeOut(() => {
            cb()
            timerId = null;
            fn()
        }, time);
    }
    fn();
}


// setTimeout和setInterval 的执行时间是不稳定的,它当前执行栈里或者回调函数里面的js执行执行很长的话,要等里面的回调函数执行完,
// 才继续下一次轮训
setInterval(() => {
    console.log('111');
    // while(true){
    // }
    // console.log('222');
}, 2000)