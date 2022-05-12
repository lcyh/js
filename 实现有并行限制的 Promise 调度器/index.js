/*
 * @Description: 实现有并行限制的 Promise 调度器
 * 题目描述:JS 实现一个带并发限制的异步调度器 Scheduler，保证同时运行的任务最多有两个
 *  
 addTask(1000,"1");
 addTask(500,"2");
 addTask(300,"3");
 addTask(400,"4");
 的输出顺序是：2 3 1 4

 整个的完整执行流程：

一开始1、2两个任务开始执行
500ms时，2任务执行完毕，输出2，任务3开始执行
800ms时，3任务执行完毕，输出3，任务4开始执行
1000ms时，1任务执行完毕，输出1，此时只剩下4任务在执行
1200ms时，4任务执行完毕，输出4
 */

class Scheduler {
    constructor(limit) {
        this.queue = [];
        this.maxRun = limit;
        this.runningCounts = 0;
    }
    add(time, order) {
        const promiseFn = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(order);
                }, time)
            })
        }
        this.queue.push(promiseFn)
    }
    start() {
        for (let i = 0; i < this.maxRun; i++) {
            this.request()
        }
    }
    request() {
        if (!this.queue || !this.queue.length || this.runningCounts >= this.maxRun) {
            return;
        }
        this.runningCounts++
        const firstFn = this.queue.shift();
        firstFn().then((res) => {
            this.runningCounts--;
            console.log(res);
            this.request();
        })
    }
}
let schedulerInstance = new Scheduler(2);
const addTask = (time, order) => {
    schedulerInstance.add(time, order);
}
addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');

schedulerInstance.start(); // 2,3,1,4



function promiseFn(time,order){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(order)
        },time)
    })
}
function task(){
    promiseFn(3000,'hello').then(res=>{
        console.log('res',res);
    })
}
task()