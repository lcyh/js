/*
 * @Author: changluo
 * @Description: 单例模式
 */

// 方法1:
class SingleFn{
    static _instance = null
    static getInstance(){
        if(!SingleFn._instance){
            SingleFn._instance = new SingleFn();
        }
        return SingleFn._instance;
    }
    constructor(name,age){
        this.type = '单例模式'
        this.name = name;
        this.age = age;
    }
    say(){
        return 'hello'
    }
}
let u1 = SingleFn.getInstance();
let u2 = SingleFn.getInstance();
console.log('u1===u2',u1 === u2); // true

// 方法2: 可传入 一个构造函数扩展 + 闭包
function SingleFn(con){
    // 排除非函数与箭头函数,箭头函数的prototype是undefined
    if(!(con instanceof Function)|| !(con.prototype)){
        throw Error('请出入合法的构造函数')
    }
    let instance; // 闭包存入instance实例
    return function(){
        if(!instance){
            instance = new con();
        }
        return instance;
    }
}
function Person(){
    this.name = '单例'
}
let Single = SingleFn(Person);
let u1 = new Single();
let u2 = new Single();
let u3 =  Single();
let u4 =  Single();
console.log('u1===u2',u1 === u2);// true
console.log('u3===u4',u3 === u4);// true


// 方法2: constructor函数里判断单例,返回实例
class Single{
    static _instance;
    constructor(){
        if(!Single._instance){
            Single._instance = this;
        }
        return Single._instance;
    }
}
let u1 = new Single();
let u2 = new Single();
console.log('u1===u2',u1===u2);// true

// 方法4:使用包装对象结合闭包的形式实现
const Single = (function(){
    function user(){
        this.name = '单例'
    }
    return function(){
        if(!user._instance){
            user._instance = new user()
        }
        return user._instance;
    }
})();
let u1 =  new Single();
let u2 =  new Single();
console.log('u1===u2',u1 === u2);// true



const arrowFn = ()=>{
    console.log('arrow');
    return '箭头函数'
}
const fn = arrowFn.bind(null,arrowFn);
// console.log('fn', fn);
console.log('箭头函数的原型',arrowFn.prototype);// undefined
console.log('箭头函数的原型',arrowFn.__proto__); // ƒ () { [native code] }
// console.log('arrowFn instanceof Function',arrowFn instanceof Function); // true