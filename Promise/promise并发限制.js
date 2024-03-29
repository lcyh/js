/*
 * @Author: changluo
 * @Description: promise并发限制
 */
class PromisePool {
  constructor(max, fn) {
    this.max = max; // 最大并发数
    this.fn = fn; // 自定义的请求函数
    this.pool = []; // 并发池
    this.urls = []; // 剩余的请求地址
  }
  start(urls) {
    this.urls = urls;
    // 先循环把并发池塞满
    while (this.pool.length < this.max) {
      let url = this.urls.shift();
      this.setTask(url);
    }
    // 利用Promise.race 方法来获得并发池中某任务完成的信号
    let race = Promise.race(this.pool);
    return this.run(race);
  }
  run(race) {
    race.then((res) => {
      // 每当并发池跑完一个任务，就再塞入一个任务
      let url = this.urls.shift();
      this.setTask(url);
      return this.run(Promise.race(this.pool));
    });
  }
  setTask(url) {
    if (!url) return;
    let task = this.fn(url);
    this.pool.push(task); // 将该任务推入pool并发池中
    // console.log(`\x1B[43m ${url} 开始，当前并发数：${this.pool.length}`);
    task.then((res) => {
      console.log(res);
      // 请求结束后将该Promise任务从并发池中移除
      this.pool.splice(this.pool.indexOf(task), 1);
      //   console.log(`\x1B[43m ${url} 结束，当前并发数：${this.pool.length}`);
    });
  }
}

// test
const URLs = [
  "bytedance.com",
  "tencent.com",
  "alibaba.com",
  "microsoft.com",
  "apple.com",
  "hulu.com",
  "amazon.com",
];
let dur = 0;
// 自定义请求函数
var requestFn = (url) => {
  return new Promise((resolve) => {
    console.log("进来的url", url);
    setTimeout(() => {
      resolve(`任务 ${url} 完成`);
    }, 1000 * Math.pow(2, dur++));
  });
  //   .then((res) => {
  //     console.log("外部逻辑 ", res);
  //   });
};

// const pool = new PromisePool(3, requestFn); // 并发数为3
// pool.start(URLs);

class Pool {
  constructor(limit, fn) {
    this.limit = limit;
    this.requestFn = fn;
    this.queue = [];
    this.runningCounts = 0;
  }
  start(urls) {
    this.queue.push(...urls);
    for (let i = 0; i < this.limit; i++) {
      this.request();
    }
  }
  request() {
    if (this.runningCounts >= this.limit || !this.queue.length) return;
    const url = this.queue.shift();
    this.runningCounts++;
    this.requestFn(url).then((res) => {
      this.runningCounts--;
      console.log(res);
      this.request();
    });
  }
}
// const pool1 = new Pool(3, requestFn); // 并发数为3
// pool1.start(URLs);

class Pool2 {
  constructor(limit, fn) {
    this.limit = limit;
    this.requestFn = fn;
    this.pool = [];
    this.queue = [];
  }
  start(urls) {
    this.queue.push(...urls);
    for (let i = 0; i < this.limit; i++) {
      const url = this.queue.shift();
      this.setTask(url);
    }
    let race = Promise.race(this.pool);
    return this.run(race);
  }
  run(race) {
    race.then(() => {
      const url = this.queue.shift();
      this.setTask(url);
      return this.run(Promise.race(this.pool));
    });
  }
  setTask(url) {
    if (!url) return;
    const p = this.requestFn(url);
    this.pool.push(p);
    p.then((res) => {
      this.pool.splice(this.pool.indexOf(p), 1);
      console.log(res);
    });
  }
}
const pool2 = new Pool2(3, requestFn); // 并发数为3
console.log("------Pool2");
pool2.start(URLs);
