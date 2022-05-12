/*
 * @Author: changluo
 * @Description: 题目描述:实现一个发布订阅模式拥有 on emit once off 方法
 */
class EventEmitter {
    constructor() {
        this.events = {}
    }
    // 订阅
    on(type, callback) {
        if (!this.events[type]) {
            this.events[type] = [callback]
        } else {
            this.events[type].push(callback)
        }
    }
    // 取消订阅
    off(type, callback) {
        if (this.events[type]) {
            this.events[type] = this.events[type].filter((fn) => fn !== callback);
        }
    }
    // 只执行一次订阅事件,触发一次后,就会取消订阅
    once(type, callback) {
        function fn(args) {
            callback(args);
            this.off(type, fn);// 这里是删除订阅 fn函数
        }
        this.on(type, fn)
    }
    // 发布(事件触发)
    emit(type, ...rest) {
        if (this.events[type]) {
            this.events[type].forEach((fn) => {
                fn.call(this, ...rest)
            })
        }
    }
}
let event = new EventEmitter()
const handle1 = (arg) => {
    console.log('click', arg);
}
const handle2 = (arg) => {
    console.log('change', arg);
}
const handle3 = (arg) => {
    console.log('mousemove', arg);
}
// event.on('click', handle1);
// event.on('change', handle2);
// event.emit('click', 'haha')
// event.off('click', handle1);
// event.emit('click', 'haha')
event.once('mousemove', handle3);
event.emit('mousemove', '触发once了111')



