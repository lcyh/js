/*
 * @Author: changluo
 * @Description: 实现一个MyQueue类，该类用两个栈来实现一个队列

 * 
MyQueue queue = new MyQueue();

queue.push(1);
queue.push(2);
queue.peek();  // 返回 1
queue.pop();   // 返回 1
queue.empty(); // 返回 false
 */
var MyQueue = function() {
    // 入队栈
    this.stackin = []
    // 出队栈
    this.stackout = []
  };
  
  /**
   * Push element x to the back of queue. 
   * @param {number} x
   * @return {void}
   */
//   stackin:[1,2,3]
  MyQueue.prototype.push = function(x) {
    this.stackin.push(x)
  };
  
  /**
   * Removes the element from in front of queue and returns that element.
   * @return {number}
   */
  MyQueue.prototype.pop = function() {
    // 出队栈为空时，从入队栈导入所有元素
    if(!this.stackout.length){
        while(this.stackin.length){
            this.stackout.push(this.stackin.pop())
        }
    }
    // 出队栈不为空时,直接取
    return this.stackout.pop()
  };
  
  /**
   * Get the front element.
   * @return {number}
   */
//   stackout : [3,2,1]
  MyQueue.prototype.peek = function() {
    // 出队栈为空时，从入队栈导入所有元素
    if(!this.stackout.length){
        while(this.stackin.length){
            this.stackout.push(this.stackin.pop())
        }
    }
    // 出队栈不为空时,直接取
    return this.stackout[this.stackout.length-1]
  };
  
  /**
   * Returns whether the queue is empty.
   * @return {boolean}
   */
  MyQueue.prototype.empty = function() {
      return this.stackin.length === 0 && this.stackout.length === 0;
  };

const queue = new MyQueue();
queue.push(1);
queue.push(2);
queue.push(3);
console.log('queue.stackin',queue.stackin);
console.log('queue.peek()',queue.peek());;  // 返回 1
console.log('queue.pop()',queue.pop());   // 返回 1
console.log('queue.pop()',queue.pop());   // 返回 2
console.log('queue.pop()',queue.pop());   // 返回 3
console.log('queue.stackin',queue.stackin);
console.log('queue.stackout',queue.stackout);
// console.log('queue.empty()',queue.empty());; // 返回 false