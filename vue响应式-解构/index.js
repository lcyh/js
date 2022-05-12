/*
 * @Author: changluo
 * @Description: reactive响应式对象解构后,什么情况会失去响应式
 * 
1.解构的值是基本数据类型，会丢失响应式，如果是引用数据类型，仍会保持响应式
2.丢失响应式是 vue 内部帮我们做的吗？不是,失去响应式不在于Vue而是在于Proxy对象本身。
 */

// 2.代理对象解构出来的是基本类型,改基本类型属性失去响应式
const obj = {
    count: 1
};
const proxy = new Proxy(obj, {
    get(target, key) {
        console.log("get");
        return target[key]
    },
    set(target, key, value) {
        console.log("set");
        target[key] = value
        return true;
    }
});
const {count} = proxy // 触发 get
proxy.count = 2 // 触发 set
// count = 3 // 不会触发 set
// console.log(proxy.count);



// 2.代理对象解构出来的属性是引用类型,解构出来的引用类型仍然是响应式

// const obj1 = {
//     counter: {
//         count: 1
//     }
// };
// const reactive = (target) => {
//     return new Proxy(obj1, {
//         get(target, key) {
//             console.log("get");
//             if (typeof target[key] === 'object') {
//                 return reactive(target[key]);
//             }
//             return target[key]
//         },
//         set(target, key, value) {
//             console.log("set");
//             target[key] = value
//             return true;
//         }
//     });
// }
// let {
//     counter
// } = reactive(obj1);
// counter.count = 2