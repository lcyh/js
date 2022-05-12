/**
设计你的循环队列实现。 循环队列是一种线性数据结构，其操作表现基于 FIFO（先进先出）原则并且队尾被连接在队首之后以形成一个循环。它也被称为“环形缓冲器”。

循环队列的一个好处是我们可以利用这个队列之前用过的空间。在一个普通队列里，一旦一个队列满了，我们就不能插入下一个元素，即使在队列前面仍有空间。但是使用循环队列，我们能使用这些空间去存储新的值。

你的实现应该支持如下操作：

MyCircularQueue(k): 构造器，设置队列长度为 k 。
Front: 从队首获取元素。如果队列为空，返回 -1 。
Rear: 获取队尾元素。如果队列为空，返回 -1 。
enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
isEmpty(): 检查循环队列是否为空。
isFull(): 检查循环队列是否已满。

示例:
MyCircularQueue circularQueue = new MyCircularQueue(3); // 设置长度为 3
circularQueue.enQueue(1);  // 返回 true
circularQueue.enQueue(2);  // 返回 true
circularQueue.enQueue(3);  // 返回 true
circularQueue.enQueue(4);  // 返回 false，队列已满
circularQueue.Rear();  // 返回 3
circularQueue.isFull();  // 返回 true
circularQueue.deQueue();  // 返回 true
circularQueue.enQueue(4);  // 返回 true
circularQueue.Rear();  // 返回 4
 */

 /**
 * 循环队列
 */
class Queue{
  constructor(n) {
    this.arr = new Array(n);
    this.head = 0;
    this.tail = 0;
    this.cnt = 0;
  }
}

// 入队 [11,22,33,44]
Queue.prototype.enqueue = function(val) {
  if(this.full()) return;
  this.arr[this.tail] = val;
  this.tail += 1;

  this.tail %= this.arr.length; 
  // if(this.tail === this.arr.length) this.tail = 0; // 如果尾指针超出最后一位，将尾指针移到0位置
  this.cnt++;

}
// 出队
Queue.prototype.dequeue = function() {
  if(this.empty()) return false;
  this.head += 1;
  this.head %= this.arr.length;
  if(this.head === this.arr.length) this.head = 0; // 如果头指针超出最后一位，将尾指针移到0位置

  this.cnt--;
  return true;
}

Queue.prototype.empty = function() {
  return this.cnt === 0;
}
Queue.prototype.full = function() {
  this.cnt === this.arr.length;
}
Queue.prototype.front = function() {
  return this.arr[this.head];
}
Queue.prototype.size = function() {
  return this.cnt;
}
Queue.prototype.clear = function() {
  this.head = this.tail = this.cnt = 0;
}
Queue.prototype.output = function(val) {
  let temp = [];
  for (let i = 0, j = this.head; i < this.cnt; i++) {
    temp.push(this.arr[j]);
    j++;
    if(j === this.arr.length) j = 0;
  }
  return temp;
}


function test(opts, vals) {
  let queue = new Queue(5);

  for (let i = 0; i < opts.length; i++) {
    switch(opts[i]) {
      case 'insert': 
        queue.enqueue(vals[i]);
        break;
      case 'front': 
        console.log(`front element: ${queue.front()}`);
        break;
      case 'dequeue': 
        queue.dequeue();
        break;
      case 'size': 
        console.log(`queue size: ${queue.size()}`);
        break;
      default: 
        break;
    }
    console.log(queue.output());
  }
}

let opts = ['insert', 'insert', 'insert','dequeue', 'insert', 'insert', 'dequeue', 'insert', 'insert'];
let vals = [1, 2, 3, '', 4, 5, '', 6, 7]
test(opts, vals)