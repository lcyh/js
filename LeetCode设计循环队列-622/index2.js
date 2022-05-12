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
// ['a','b','c','d']
var MyCircularQueue = function(k) {
  this.arr = new Array(k);
  this.head = 0;
  this.tail = 0;
  this.count = 0;
};

/**
* @param {number} value
* @return {boolean}
*/
MyCircularQueue.prototype.enQueue = function(value) {
  if(this.isFull()){
      return false
  }
  this.arr[this.tail] = value;
  this.tail++;// 尾指针往后走一步
  // 当this.tail===this.arr.length时,将this.tail指针指向队列的头部(索引为0)的位置
  this.tial %= this.arr.length;
  // 记录队列里放了多少个值
  this.count++;
  return true;
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.deQueue = function() {
  if(this.isEmpty()) return false;
  this.head+=1;// 出栈/删除时,头指针往后走一步,此时队列里的头指针就向右/向后 移动了一步
  // 如果是出栈,this.head++,当全部都出栈了,队列为空,此时this.head === this.arr.length,需要重置this.head =0
  this.head %= this.arr.length;
  // 记录队列里值的个数
  this.count--;
  return true;
};

/**
* @return {number}
*/
MyCircularQueue.prototype.Front = function() {
  if(this.isEmpty()) return -1;
  return this.arr[this.head];
};

/** 
* @return {number}
*/
MyCircularQueue.prototype.Rear = function() {
  if(this.isEmpty()) return -1;
  let last = this.tail === 0 ? this.arr[this.arr.length-1] : this.arr[this.tail-1];
  return last;
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.isEmpty = function() {
  return this.count ===0;
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.isFull = function() {
  return this.count === this.arr.length;
};

let circularQueue = new MyCircularQueue(3)
console.log(circularQueue.enQueue(1));;  // 返回 true
console.log(circularQueue.enQueue(2));  // 返回 true
console.log(circularQueue.enQueue(3));  // 返回 true
console.log(circularQueue.enQueue(4));  // 返回  false
console.log(circularQueue.Rear());// 返回  3
console.log(circularQueue.isFull());  // 返回 true
console.log(circularQueue.deQueue()); // 返回 true
console.log(circularQueue.enQueue(4));  // 返回 true
console.log(circularQueue.Rear());  // 返回 4