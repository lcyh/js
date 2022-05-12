class Animal {
    name = '动物'; // 实例属性
    constructor(age) {
        this.age = age;
        this.getAge = this.getAge.bind(this)
    }
    say() {
        return this;
    }
    getName() { // 类Animal原型上的方法
        return this.name;
    }
    getAge = () => { // 实例方法
        console.log('getAge', this); // // this => Animal { name: '动物', age: 11, getAge: [Function: getAge] }
        return this;
    }
    render() {
        // return <p onClick="()=>this.getAge()"></p>
    }
}
let cat = new Animal(11, '上海');
cat.getAge()
console.log('class-say', cat.say()); // this => Animal { name: '动物', age: 11, getAge: [Function: getAge] }
