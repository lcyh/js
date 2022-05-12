function Say(name,animal){
    console.log('Say-this',this);
    this.name = name;
    this.animal = animal;
}
// bind 内部通过call或者apply改变this指向
Function.prototype.myBind = function(context,...args){
    let fn = this;
    context = Object(context) || window;
    // 继承fn原型对象上的属性和方法，防止返回新函数后丢失了原函数的属性方法
    function fn1(){};
    fn1.prototype = fn.prototype;
    function newFn(...innerArgs){
        let _this = this; 
        let newContext = _this instanceof newFn ? _this : context; // 判断是否是 newFn的实例
        args = [...args,...innerArgs];
        let result = fn.apply(newContext,args);
        return result;
    }
    newFn.prototype = new fn1();
    return newFn;
}
let obj = {id:'lc'};
// Say.prototype.before = function(val){
//     console.log('before',val);
// }
// let newFn = Say.myBind(obj,'猫咪');
// newFn.prototype.before('111');
// let instance = new newFn('Cat');
// instance.before('instance实例');
// console.log('instance',instance);



// call,apply 通过函数方法的调用改变this指向
Function.prototype.myCall = function(context,...args){
    let fn = this;
    context = Object(context) || window;
    let key = Symbol();
    context[key] = fn;
    let result = context[key](...args);
    delete context[key]; // 防止污染 context上下文
    console.log('context',context);
    return result;
}
let res = Say.myCall(obj,'小狗','Dog');
console.log('call',res);

Function.prototype.myApply = function(context,args){
    let fn = this;
    context = Object(contex) || window;
    let key = Symbol();
    context[key] = fn;
    let result = context[key](...args);
    delete context[key];
    return result;
}
let res = Say.myApply(obj,'小狗','Dog');
console.log('call',res);


Function.prototype.myBindFn1 = function(context,...args){
    let fn = this;
    context = Object(context);
    function fn1(){}
    fn1.prototype = fn.prototype;
    function newFn(...innerArgs){
        let _this = this;
        let newContext = _this instanceof newFn ? _this : context;
        let result = fn.apply(newContext,[...args,...innerArgs])
        return result;
    }
    newFn.prototype = new fn1();
    return newFn
}
function Animal(name,age){
    this.name = name;
    this.age = age;
}
Animal.prototype.say = 'hello'
let catFn = Animal.myBindFn1(null,'tom')
let cat = new catFn('12');
console.log(cat.say);




Function.prototype.BindFn = function(context,...args){
    const fn = this;
    context = Object(context);
    function innerFn(...innerArgs){
        const _this = this;
        context = _this instanceof innerFn ? _this : context;
        const result = fn.apply(context,[...args,...innerArgs])
        return result
    }
    innerFn.prototype = Object.create(fn.prototype)
    return innerFn
}
function fn(num1,num2){
    console.log('this',this);
    return num1 + num2;
}
let obj = {
    a:1,
    b:2
}
const newFn = fn.bind(obj)()


Function.prototype.bindFn = function(context,...args){
    context = Object(context);
    let fn = this;
    const innerFn = function(...innerArgs){
        const _this = this;
        context = _this instanceof innerFn ? _this:context
        const result = fn.apply(context,[...args,...innerArgs])
        return result
    }
    innerFn.prototype = Object.create(fn.prototype)
    // function fn1(){}
    // fn1.prototype = fn.prototype;
    // innerFn.prototype = new fn1() 
    return innerFn
}