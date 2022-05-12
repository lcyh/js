
function Animal(name, age) {
    this.name = name;
    this.age = age;
    console.log('Animal', this); // this就是obj,obj既拥有Animal的私有属性 name,age，又有 原型对象上的属性 eat方法
}
Animal.prototype.eat = function(){
    console.log('eating');
}
function mockNew() {
    let args = [...arguments]; // arguments 是object伪数组，有 Symbol.iterator,所以转化成数组后拥有数组所有的方法
    let constructor = args.shift();
    let obj = {};
    obj.__proto__ = constructor.prototype;
    let result = constructor.apply(obj, args);
    return typeof result === 'object' ? result : obj;
}
let result = mockNew(Animal, 'cat', '12');
console.log('result', result);
result.eat();