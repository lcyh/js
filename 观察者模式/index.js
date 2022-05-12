
// 被观察者
class Subject{
    constructor(name){
        this.observers = [];
        this.state = '';
        this.name = name;
    }
    attach(o){
        this.observers.push(o);
    }
    setState(newState){
        this.state = newState;
        this.observers.forEach(o => {
            // o.update(newState);
            o.update(this);
        });
    }
}

class Observer{
    constructor(name){
        this.name = name;
    }
    update(subInstance){
        console.log('update',`${this.name}:${subInstance.name+subInstance.state}`);
    }
}

let baby = new Subject('baby');
let o1 = new Observer('爸爸');
let o2 = new Observer('妈妈');

baby.attach(o1);
baby.attach(o2);

baby.setState('我在玩');