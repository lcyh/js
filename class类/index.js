/*
 * @Author: changluo
 * @Description: 
 */
class Animal{
	name = '动物'; // 实例属性
	age = 0 ;// 实例属性
  	constructor(age, address){
    	this.age = age;
    }
  	say(){
    	console.log('say',this instanceof Animal); //true
    	console.log('say-this',this); // Animal { name: '动物', age: 11, getAge: [Function: getAge] }
      	return this;
    }
  	getName(){ // 类Animal原型上的方法
    	return this.name;
    }
  	getAge = () => { // 实例方法
		console.log('getAge-this',this);
		return '实例方法-getAge'
	}
	render(){
		// return <p onClick="()=>this.getAge()"></p>
	}
}
let cat = new Animal(11,'上海');
console.log('class-getAge',cat.getAge()); // this => undefined
console.log('class-say',cat.say()); // this => Animal { name: '动物', age: 11, getAge: [Function: getAge] }


// let testObj = {
// 	name:'Tom',
// 	age:12,
// 	getAge:()=>{
// 		console.log('getAge',this); // 浏览器里打印是  window对象
// 		return 'getAge'
// 	}
// }
// console.log('testObj',testObj.getAge());
