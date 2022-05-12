/*
 * @Author: changluo
 * @Description: 
 */
var MyCircularDeque = function(k) {
  this.queue = new Array(k); // 设置k个连续存储区
  this.head = 0; // 头指针
  this.tail = 0; // 尾指针
  this.cnt = 0; // 队列中元素数量
};
// 将index-1，需要考虑index到达数组首尾时需要循环
MyCircularDeque.prototype.reduceIndex = function (index) {
  return (index - 1 + this.queue.length) % this.queue.length;
};

// 将index+1，需要考虑index到达数组首尾时需要循环
MyCircularDeque.prototype.addIndex = function (index) {
  return (index + 1) % this.queue.length;
};
/**
 * Adds an item at the front of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) { // 头部插入
  if (this.isFull()) return false;
  this.head -= 1; // 头指针会有元素，所以在头部插入应该先把头指针往前走一步然后插入。
  if (this.head === -1) this.head = this.queue.length - 1;
  this.queue[this.head] = value;
  this.cnt += 1;
  return true; 
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) { // 尾部插入
  if (this.isFull()) return false;
  this.queue[this.tail] = value;
  this.tail += 1;
  if (this.tail === this.queue.length) this.tail = 0;
  this.cnt += 1;
  return true;
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
  if (this.isEmpty()) return false;
  this.head = this.addIndex(this.head); // 头指针往后走一步，预防超过长度处理
  this.cnt -= 1;
  return true;
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
  if (this.isEmpty()) return false;
  this.tail = this.reduceIndex(this.tail); // 尾指针往前走一步，预防出现 -1 进行处理。
  this.cnt -= 1;
  return true;
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
  if (this.isEmpty()) return -1;
  return this.queue[this.head];
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
  if (this.isEmpty()) return -1;
  return this.queue[this.reduceIndex(this.tail)]; // 尾指针对应的是最后一位元素的下一位，所以要减一，并预防出现负数。
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
  return this.cnt === 0;
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
  return this.cnt === this.queue.length;
};

// const circularDeque = new MyCircularDeque(3); // 设置容量大小为3
// console.log(circularDeque.insertLast(1));;			        // 返回 true
// console.log(circularDeque.insertLast(2));;			        // 返回 true
// console.log(circularDeque.insertFront(3));;			        // 返回 true
// console.log(circularDeque.insertFront(4));;			        // 已经满了，返回 false
// console.log(circularDeque.getRear());;  				// 返回 2
// console.log(circularDeque.isFull());;				        // 返回 true
// console.log(circularDeque.deleteLast());;			        // 返回 true
// console.log(circularDeque.insertFront(4));;			        // 返回 true
// console.log(circularDeque.getFront());;
