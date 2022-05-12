
// 谨记：
/*
 * 1.this 的指向并不是在创建的时候就可以确定的，在 es5 中，this 永远指向最后调用它的那个对象。
 * 2.众所周知，ES6 的箭头函数是可以避免 ES5 中使用 this 的坑的。箭头函数的 this 始终指向函数定义时的 this，而非执行时。
 *   箭头函数需要记着这句话：“箭头函数中没有 this 绑定，必须通过查找作用域链来决定其值，如果箭头函数被非箭头函数包含，
 *   则 this 绑定的是最近一层非箭头函数的 this，否则，this 为 undefined”。
  */
// es5 this是调用时或者执行时(运行时)决定的
// 栗1
var name = "windowsName";
var a = {
    name: "Cherry",
    fn: function () {
        console.log(this.name); // Cherry
    }
}
a.fn();

// 栗2
var name = "windowsName";
var a = {
    name: "Cherry",
    fn: function () {
        console.log(this.name);// windowsName
    }
}
var f = a.fn;
f();

// 栗3
var name = "windowsName";
var a = {
    name: "Cherry",
    func1: function () {
        console.log(this.name)
    },
    func2: function () {
        setTimeout(function () {
            console.log('this', this); // window
            this.func1(); //打印: this.func1 is not a function

        }, 100);
        // 优化如下:
        // setTimeout(function () {
        //     console.log('this', this); // window
        //     this.func1(); // 打印:Cherry
        // }.bind(a), 100);  // bind改变this指向a
    }
};
a.func2()     // this.func1 is not a function

// 栗4 => es6 箭头函数的this是定义时或创建时 决定的
var name = "windowsName";
var a = {
    name : "Cherry",
    func1: function () {
        console.log(this.name)     
    },
    func2: function () {
        console.log('this',this); // a对象
        setTimeout( () => { // 箭头函数的this是由定义时的非箭头函数的块级作用域决定的
            this.func1()
        },100);
    }
};
a.func2()     // Cherry
