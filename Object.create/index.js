/*
 * @Author: changluo
 * @Description: Object.create
 */

 function ObjectCreate1(obj){
    let o = {};
    o.__proto__ = obj;
    return o;
 }
 function ObjectCreate(obj){
    function fn(){};
    fn.prototype = obj;
    return new fn();
 }
 let obj = {
     name:'hello'
 }
//  let newObj = Object.create(obj);
 let newObj = ObjectCreate(obj);
 console.log(newObj.name);