/*
 * @Author: changluo
 * @Description: 
 */
let eventEmitter = {
    listeners: [],
    subscribe: function (fn) {
        this.listeners.push(fn);
        return () => {
            // let index = this.listeners.findIndex((i)=>i===fn);
            // this.listeners.splice(index,1);
            this.listeners = this.listeners.filter((item) => item !== fn);
        }
    },
    dispath: function (fn) {
        this.listeners.forEach((callback) => callback());
    }
}
let update1 = () => {
    console.log('update1');
}
let update2 = () => {
    console.log('update2');
}
// 订阅
let unsubscribe = eventEmitter.subscribe(update1); // 返回函数是取消订阅函数
unsubscribe(); // 取消 update1监听
eventEmitter.subscribe(update2);
console.log('取消监听-listeners', eventEmitter.listeners);
// 发布
eventEmitter.dispath();