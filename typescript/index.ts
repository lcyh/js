/*
 * @Author: changluo
 * @Description: typescript
 */

/**
 * type和interface区别:https://juejin.cn/post/6844903749501059085
 * 相同点:
 * 1.都可以描述一个对象或者函数 
 * 2.都允许拓展（extends）,虽然效果差不多，但是两者语法不同
 * 不同点:
 * 1.type 可以声明基本类型别名，联合类型，元组等类型,interface不行;
 * 2.type 语句中还可以使用 typeof 获取实例的 类型进行赋值,interface不行;
 * 3.interface 能够声明合并,type不行
 */

let str: unknown = 12;
let num: unknown = 34
num = str;
console.log(str);


type Name = {
    name: string;
}
//&符,type也可以extends扩展
type User = Name & { age: number };
let obj: User = {
    name: 'll',
    age: 12
}

// 当你想获取一个变量的类型时，使用 typeof
let div = document.createElement('div');
type B = typeof div

// 联合类型
type str = 'a' | 'b' | 'c';
let s:str = 'a'

// interface声明合并
interface Person {
    name: string
    age: number
}
interface Person {
    sex: string
}
type Hobby = {
    hobby:string;
}
// interface extends type
interface Person extends Hobby{
    
}
let p:Person = {
    name:'mark',
    age:12,
    sex:'male',
    hobby:'旅游'
}


