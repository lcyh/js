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

/**
Object.defineProperty()函数对对象的属性添加了只读的描述后，该属性也是不允许被修改的，
但是obj还是可以添加属性的，
用Object.seal()函数将obj包裹一下，就可以实现不允许添加属性的功能了

引用数据类型同时用Object.defineProperty()和Object.seal()函数封装包裹起来，
就可以实现Object.freeze()函数的效果了
*/
function ObjectFreeze(obj) {
  for (let key in obj) {
    if (Object.hasOwnProperty(obj, key)) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        ObjectFreeze(obj[key]);
      } else {
        Object.defineProperty(obj, key, {
          writable: false,
        });
      }
    }
  }
  // obj对象不允许添加新属性了
  Object.seal(obj);
}

function Freeze(obj) {
  const recursion = (obj) => {
    Object.freeze(obj);
    Object.keys(obj).forEach((key) => {
      if (
        obj[key] !== null &&
        (typeof obj[key] === "object" || typeof obj[key] === "function") &&
        !Object.isFrozen(obj[key])
      ) {
        recurion(obj[key]);
      }
    });
  };
  recursion(obj);
}
const obj = { name: "蟹黄", address: { email: "123@qq.com" } };
Freeze(obj);
obj.name = "同学"; // 如果被冻结了就不能set
console.log(obj.name); //蟹黄
