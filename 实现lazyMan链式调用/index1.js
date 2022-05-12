/*
 * @Author: changluo
 * @Description: 
 * 
 *  
LazyMan('Hank');
// 输出:
// Hi! This is Hank!

LazyMan('Hank').sleep(3).eat('dinner')
// 输出:
// Hi! This is Hank!
// //等待3秒..
// Wake up after 3
// Eat dinner~

LazyMan('Hank').eat('dinner').eat('supper')
// 输出:
// Hi This is Hank!
// Eat dinner~
// Eat supper~

LazyMan('Hank').sleepFirst(2).eat('dinner').sleep(3).eat('supper')
// 输出:
// //等待2秒..
// Wake up after 2
// Hi This is Hank!
// Eat dinner~
// //等待3秒..
// Wake up after 3
// Eat supper~

// 以此类推

 1、如果有调用firstSleep,无论firstSleep在什么位置，必须在执行完firstSleep延迟时间后，才开始按顺序执行
 2、遇到sleep必须延迟后再继续执行后面的函数
 */


// promise

class _LazyMan {
    constructor(name) {
        this.name = name
        this.stack = []
        const task = () => {
            return new Promise((resolve) => {
                console.log(`Hi! This is ${this.name}!`);
                resolve()
            })
        }
        this.stack.push(task)
        setTimeout(() => {
            let queue = Promise.resolve()
            // this.stack.forEach((fn) => {
            //     queue = queue.then(() => fn())
            // })
            for (let i = 0; i < this.stack.length; i++) {
                queue = queue.then(() => this.stack[i]())
            }
            // const next = async () => {
            //     for (let i = 0; i < this.stack.length; i++) {
            //         await this.stack[i]()
            //     }
            // }
            // next()
        })
    }
    eat(e) {
        const task = () => {
            return new Promise((resolve) => {
                console.log(`Eat ${e}~`);
                resolve()
            })
        }
        this.stack.push(task)
        return this
    }
    sleep(t) {
        const task = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log(`Wake up after ${t}`)
                    resolve()
                }, t * 1000)
            })
        }
        this.stack.push(task)
        return this
    }
    firstSleep(t) {
        const task = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log(`firstSleep Wake up after ${t}`)
                    resolve()
                }, t * 1000)
            })
        }
        this.stack.unshift(task)
        return this
    }
}
function LazyMan(name) {
    return new _LazyMan(name)
}

LazyMan('Hank').firstSleep(2).eat('dinner').sleep(3).eat('supper')



