//  一个Map对象在迭代时会根据对象中元素的插入顺序来进行
// 新添加的元素会被插入到map的末尾，整个栈倒序查看
class LRUCache {
    constructor(capacity) {
        this.secretKey = new Map();
        this.capacity = capacity;
    }
    get(key) {
        if (this.secretKey.has(key)) {
            let tempValue = this.secretKey.get(key);
            this.secretKey.delete(key);
            this.secretKey.set(key, tempValue);
            return tempValue;
        } else return -1;
    }
    put(key, value) {
        // key存在，仅修改值
        if (this.secretKey.has(key)) {
            this.secretKey.delete(key);
            this.secretKey.set(key, value);
        }
        // key不存在，cache未满
        else if (this.secretKey.size < this.capacity) {
            this.secretKey.set(key, value);
        }
        // 添加新key，删除旧key
        else {
            this.secretKey.set(key, value);
            // 删除map的第一个元素，即为最长未使用的
            console.log('this.secretKey.keys()', this.secretKey.keys());
            console.log('this.secretKey.keys().next()', this.secretKey.keys().next());
            console.log('this.secretKey.keys().next().value', this.secretKey.keys().next().value);
            this.secretKey.delete(this.secretKey.keys().next().value);
        }
    }
}
let cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
//   console.log('cache.secretKey-1',cache.secretKey);// { 1 => 1, 2 => 2 }
console.log("cache.get(1)", cache.get(1))// 返回  1
//   console.log('cache.secretKey-2',cache.secretKey);// { 2 => 2, 1 => 1 }
cache.put(3, 3);// 该操作会使得密钥 2 作废
console.log('cache.secretKey-3', cache.secretKey);// { 1 => 1, 3 => 3 }
console.log("cache.get(2)", cache.get(2))// 返回 -1 (未找到)
// cache.put(4, 4);// 该操作会使得密钥 1 作废
// console.log("cache.get(1)", cache.get(1))// 返回 -1 (未找到)
// console.log("cache.get(3)", cache.get(3))// 返回  3
// console.log("cache.get(4)", cache.get(4))// 返回  4


class LRUcache1 {
    constructor(capacity) {
        this.capacity = capacity;
        this.secretKey = new Map();
    }
    get(key) {
        if (this.secretKey.has(key)) {
            let tempVal = this.secretKey.get(key);
            this.secretKey.delete(key);
            this.secretKey.set(key, tempVal);
            return tempVal;
        }
        return -1;
    }
    put(key, value) {
        // 有key,没超过最大容量
        if (this.secretKey.has(key)) {
            this.secretKey.delete(key);
            this.secretKey.set(key, value);
            // 有key,并且没超过最大容量
        } else if (this.secretKey.size < this.capacity) {
            this.secretKey.set(key, value);
            //没有key,并且超过最大容量  //有key,并且超过最大容量
        } else {
            this.secretKey.set(key, value);
            this.secretKey.delete(key, this.secretKey.keys().next.value);

        }
    }
}




