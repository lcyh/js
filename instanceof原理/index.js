/*
 * @Author: changluo
 * @Description: instanceof 原理
 */

function _instanceof(left,right){
    let l = left.__proto__;
    let r = right.prototype;
    while(true){
        if(l === null){
            return false;
        }
        if(l === r){
            return true;
        }
        l = l.__proto__;
    }
}
function Animal(name){
    this.name = name
}
// let cat = new Animal('tom');
// console.log('cat.__proto__ === Animal.prototype',cat.__proto__ === Animal.prototype); // true
// console.log(_instanceof(cat,Animal));// true



function myInstanceof(left,right){
    let l = left.__proto__;
    let r = right.prototype;
    while(l){
        if(l === r) return true;
        // if(l === null) return false
        l = l.__proto__;
    }
    return false
}
let cat = new Animal('tom');
console.log('cat.__proto__ === Animal.prototype',cat.__proto__ === Animal.prototype); // true
console.log(myInstanceof(cat,Animal));// true