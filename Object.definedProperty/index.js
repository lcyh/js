/*
 * @Author: changluo
 * @Description: 
 */

// 递归深度观察对象,使其成响应式对象,defineReactive
let obj = {
    name: 'tom',
    age: 1,
    hobby:{
        play:'打球'
    }
}
function observer(obj) {
    if (typeof obj !== 'object' || obj === null) return obj;
    Object.keys(obj).forEach((key) => {
        defineReactive(obj, key, obj[key]);
    })
}
function defineReactive(obj, key, value) {
    // 如果value属性值是object,继续代理观测
    observer(value);
    Object.defineProperty(obj, key, {
        get() {
            console.log('get',key, value);
            return value;
        },
        set(newVal) {
            console.log('set更新',key, newVal);
            value = newVal;
        }
    })
}

observer(obj);
obj.hobby.play = 'hh1';
