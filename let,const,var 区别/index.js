/**
 * var，let和const之间的区别
 */


//  1.如何使const声明的对象内属性不可变，只可读呢？
//  如果const声明了一个对象，对象里的属性是可以改变的

// const obj = { name: '蟹黄', address: { email: '123@qq.com' } };
// Object.freeze(obj)
// obj.name = '同学';// 如果被冻结了就不能set
// console.log(obj.name);//蟹黄

// 因为const声明的obj只是保存着其对象的引用地址，只要地址不变，就不会出错
// 使用Object.freeze(obj) 冻结obj,就能使其内的属性不可变,
// 但它有局限，就是obj对象中要是有属性是对象，该对象内属性还能改变，
// 要全不可变，就需要使用递归等方式一层一层全部冻结。


function Freeze(obj) {
    const recurion = (obj) => {
        Object.freeze(obj)
        Object.keys(obj).forEach((key) => {
            if (
                obj[key] !== null &&
                (typeof obj[key] === 'object' || typeof obj[key] === 'function') &&
                !Object.isFrozen(obj[key])
            ) {
                recurion(obj[key])
            }
        })
    }
    recurion(obj)
}
const obj = { name: '蟹黄', address: { email: '123@qq.com' } };
Freeze(obj)
obj.name = '同学';// 如果被冻结了就不能set
console.log(obj.name);//蟹黄



const obj = {
    name: 'lc',
    age: 12,
    adress: {
        email: '123@qq.com'
    }
}
for (let k in obj) {
    console.log('k', k, obj[k]);
}