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
class MyCircularQueue {
  constructor(k) {
    this.arr = new Array(k);
    this.max = k;
    this.head = 0;
    this.tail = 0;
    this.count = 0;
  }
  // 先进先出
  enQueue(value) {
    if (this.isFull()) return false;
    this.arr[this.tail] = value;
    this.tail++
    //因是循环队列，当tail达到最大值，就会变为0，再重头开始，所以使用取余方法
    this.tail %= this.arr.length; // tail指向的是尾部元素的后一位
    // 如果尾指针到达arr的最后,重置tail为0
    // if (this.tail === this.arr.length) {
    //   this.tail = 0;
    // }
    this.count++
    console.log('this.enQueue', this.count, this.head, this.tail, this.arr);
    return true;
  }
  // 先进先出,始终删除最老的(最先放进去的)
  deQueue() {
    if (this.isEmpty()) return false;
    this.head++ // 头指针往后走一步
    this.head %= this.arr.length;
    // if (this.head === this.arr.length) this.head = 0; // 如果头指针超出最后一位，将尾指针移到0位置
    this.count--;
    console.log('this.deQueue', this.count, this.head, this.tail, this.arr);
    return true;
  }
  Front() {
    if (this.isEmpty()) return -1;
    return this.arr[this.head]
  }
  Rear() {
    if (this.isEmpty()) return -1;
    // 如果当前tail指向0,说明指向队列数组的最后一项
    // 因为this.arr[this.tail]=value之后,在this.tail++了,所以要获取前一项的值,需要 this.tail -1
    return this.tail === 0 ? this.arr[this.arr.length - 1] : this.arr[this.tail - 1]
  }
  isFull() {
    return this.count === this.arr.length;
  }
  isEmpty() {
    return this.count === 0;
  }
  size() {
    return this.count
  }
  clear() {
    this.head = this.tail = this.count = 0
  }
}
let circularQueue = new MyCircularQueue(3)
console.log(circularQueue.enQueue(1));;  // 返回 true
console.log(circularQueue.enQueue(2));  // 返回 true
console.log(circularQueue.enQueue(3));  // 返回 true
console.log(circularQueue.deQueue());
console.log(circularQueue.Front());
// console.log(circularQueue.enQueue(4));  // 返回  false
// console.log(circularQueue.Rear());// 返回  3
// console.log(circularQueue.isFull());  // 返回 true
// console.log(circularQueue.deQueue()); // 返回 true
// console.log(circularQueue.enQueue(4));  // 返回 true
// console.log(circularQueue.Rear());  // 返回 4