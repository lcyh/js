//  js 货币千分位
const toThousandsString = number => {
    const splitNum = number.toSting().split('.');
    let integer = splitNum[0];
    const decimal = splitNum[1] || '';
    let reuslt = '';
    while (integer.length > 3) {
        result = ',' + integer.slice(-3) + result;
        integer = integer.slice(0, integer.length - 3);
    }

    if (integer) {
        result = integer + result;
    }
    if (decimal == '') return result;
    return result + '.' + decimal;
}
// toLocaleString

(123456789).toLocaleString('en-US');

// 重试
const retry = (fn, interval, times) => {
    return new Promise((resolve, reject) => {
        const attempt = () => {
            fn.then(res => {
                resolve(res);
            }).catch(err => {
                if (times != 0) {
                    times--;
                    setTimeout(attempt, interval);
                } else {
                    reject(err);
                }
            })
        };

        attempt();
    });
}

const reTry = (fn, interval, times) => {
    return new Promise((resolve, reject) =>{
        const attempt = () =>{
            fn.then(res => {
                resolve(res)
            }).catch(err => {
                if (times != 0) {
                    times--;
                    setTimeout(attempt, interval);
                } else {
                    reject(err)
                }
            })
        }
        attempt();
    })
}

//请求并行

function parallelRequest(reqArr, pool) {
    let pool = pool || 5
    let results = [],
        parallel = new Array(pool).fill(null),
        index = 0;
    parallel = parallel.map(() => {
        return new Promise((res, rej) => {
            const run = function run() {
                if (index >= reqArr.length) {
                    res()
                    return
                }
                let tmpIdx = index,
                    req = reqArr[index++];
                req().then(res => {
                    results[tmpIdx] = res;
                    run()
                }).catch(err => rej(err))
            }
            run();
        })
    })
    return Promise.all(parallel).then(() => results);
}

var asyncFn = (i) => new Promise((resolve) => setTimeout(() => resolve(i), 50));

class Pool {
    pool = 0;
    MAX = 6;
    list = [];

    results = [];
    queues = [];

    constructor(list = []) {
        this.list = list;
    }

    exec() {
        return new Promise((resolve, reject) => {

            for (let i = 0; i < this.list.length; i++) {
                const cb = () => {
                    this.list[i]().then((res) => {
                        this.results[i] = res;
                        this.pool--;
                        console.log(`执行完成`)
                        const next = this.queues.shift();
                        if (next) {
                            this.pool++;
                            next();
                        }
                        if (!this.pool) {
                            resolve(this.results);
                        }

                        if (this.results.length >= this.list.length) {
                            resolve(this.results);
                        }
                    });
                };
                if (this.pool < this.MAX) {
                    this.pool++;
                    cb();
                } else {
                    this.queues.push(cb);
                }
            }
        });
    }
}
var all = (list) => {
    return new Pool(list).exec();
};

var list = new Array(100).fill(null).map((v, i) => () => asyncFn(i));
all(list).then((res) => {
    console.log(`返回`, res);
});

// 串行执行
// iterator 
const excu = (i) => {
    return Promise(res => {
        setTimeout(() => {
            res(i);
        }, 1000)
    })
}

const serial = async (promiseArr) => {
    for (const [key, value] of promiseArr.entries()) {
        const result = await excu(value)
    }
}

// reduce
const request = (url) => {
    return new Promise((res) => {
        setTimeout(() => {
            res(url)
        }, 1000)
    })
}
const promiseList = (arr, handler) => {
    if (!Array.isArray(arr)) {
        return false;
    }

    arr.reduce((pre, next) => {
        return pre.then(() => handler(next));
    }, Promise.resolve())
}


function mySetInterVal(fn, a, b) {
    this.a = a;
    this.b = b;
    this.time = 0;
    this.timer = -1;

    this.start = () => {
        this.timer = setTimeout(() => {
            fn();
            this.time++;
            this.start();
        }, this.a + this.time * this.b);
    }

    this.stop = () => {
        clearTimeout(this.timer);
        this.time = 0;
    }
}

Function.prototype._bind = function (context) {
    var self = this;
    var args = Array.prototype.slice(arguments, 1);
    var bind = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        self.apply(this instanceof self ? this : context, args.concat(bindArgs));
    }
    return bind;
}

Function.prototype._call = function (context) {
    var ctx = context || window;
    ctx.func = this;
    var args = Array.from(arguments).slice(1);
    const res = args.length > 1 ? ctx.func(...args) : ctx.func();
    delete ctx.func;
    return res;
}

Function.prototype._apply = function (context) {
    var ctx = context || window;
    ctx.func = this;
    var args = arguments[1] || [];
    const res = ctx.func(...args);
    delete ctx.func;
    return res;
}


function debounce(fn, wait = 3000) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(fn, wait, ...args)
    }
}

function throttle(fn, wait = 3000) {
    let pre = new Date(), timer;
    return (...args) => {
        let now = new Date();
        if (now - pre > wait) {
            fn.apply(this, args)
            pre = now;
        } else {
            clearTimeout(timer);
            timer = setTimeout(() => {
                fn.apply(this, args);
                pre = now
            }, wait)
        }
    }
}


let quick = (arr, left, right) => {
    let index;
    let len = arr.length;
    if (len > 1) {
        index = partition(arr, left, right);
        if (left < index - 1) {
            quick(arr, left, index - 1);
        }

        if (index - 1 < right) {
            quick(arr, index, right);
        }
    }
    return arr;
}

let partition = (arr, left, right) => {
    let pivot = arr[Math.floor((left + right) / 2)],
        i = left,
        j = right;

    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }

        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(arr) {
    if (!Array.isArray(arr)) return;
    if (arr.length <= 1) return arr;
    var left = [], right = [];
    var num = Math.floor(arr.length / 2);
    var numValue = arr.splice(num, 1)[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < numValue) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), numValue, ...quickSort(right)];
}

function curry(fn, args) {
    let len = fn.length;
    let args = args || [];
    return function () {
        let _args = [].slice.apply(arguments);
        let _arguments = args.concat(_args);
        if (_arguments.length < len) {
            return curry.call(this, fn, _arguments);
        }
        return fn.call(this, _arguments);
    }
}

function _new(func) {
    var res = {};
    if (func.prototype !== null) {
        res.__proto__ = func.prototype;
    }

    var ret = func.apply(res, Array.prototype.slice.call(arguments, 1));
    if ((typeof ret === 'object' || typeof ret === 'function') && ret !== null) {
        return ret;
    }
    return res;
}

// axios 拦截器原理
// redux中间件原理
// 终止循环 
// 事件循环
// class组件跟hook组件区别 hook解决了class什么痛点
// 哪些方法引起react组件渲染
// commonjs esmodule
// co原理

function _instanceof(L, R) {
    var O = R.prototype;
    var L = L.__proto__;

    while (true) {
        if (L === null) return false;
        if (O === L) {
            return true
        }
        L = L.__proto__;
    }
}

function myInstanceOf(L, R) {
    let P = R.prototype;
    let L = L.__proto__;
    while(true) {
        if (L == null) return false;
        if (L == P) return true;
        L = L.__proto__;
    }
}

Function.prototype.__call = function (context) {
    const ctx = context || window
    ctx.fn = this;
    let args = [...arguments].slice(1)
    let result =  args.length > 1 ?  ctx.fn(...args) : ctx.fn();
    delete ctx.fn;
    return result
}

Function.prototype.mycall = function (context) {
    const ctx = context || window;
    ctx.fn = this;
    let args = [...arguments].slice(1);
    let result = args.length > 1 ? ctx.fn(...args) : ctx.fn();
    delete ctx.fn;
    return result;
 }

Function.prototype.__apply = function (context) {
    const ctx = context || window
    ctx.fn = this;
    let args = arguments[1] || []
    let result = ctx.fn(...args);
    delete ctx.fn;
    return result
}

Function.prototype.myApply = function(context) {
    const ctx = context || window;
    ctx.fn = this;
    let args = arguments[1] || [];
    let result = ctx.fn(...args);
    delete ctx.fn;
    return result
}

Function.prototype.__bind = function (context) {
    const self = this;
    let args = Array.prototype.slice(arguments, 1);
    const _bind = function () {
        let _args = Array.prototype.slice.call(arguments);
        let _allArgs = args.concat(_args);
        self.apply(this instanceof self ? this : context, _allArgs)
    }
    // _bind函数实例化会影响原型链 空函数处理
    function temp() { }
    temp.prototype = this.prototype;
    _bind.prototype = new temp();
    return _bind;
}


function jsonStingify(obj) {
    let type = typeof obj;
    if (type !== 'object') {
        if (type == 'string' || type == 'undefined' || type == 'function') {
            return '"' + obj + '"';
        }
        return String(obj);
    } else {
        let isArr = Array.isArray(obj);
        let json = []
        for (const key in obj) {
            if (Object.hasOwnProperty.call(obj, key)) {
                let element = obj[key];
                console.log(element);
                let _type = typeof element;
                if (_type == 'string' || _type == 'undefined' || _type == 'function') {
                    element = '"' + element + '"';
                } else if (_type === 'object') {
                    element = jsonStingify(element);
                }
                json.push((isArr ? '' : '"' + key + '":') + String(element));
            }
        }
        return (isArr ? "[" : "{") + String(json) + (isArr ? "]" : "}");
    }
}

function curry(fn, args) {
    var len = fn.length;
    var args = args || [];
    return function () {
        var _args = args.concat(Array.prototype.slice.call(arguments));
        if (_args.length >= len) {
            return fn.apply(this, _args)
        } else {
            return curry.call(this, fn, _args);
        }
    }
}

function deepCopy(obj) {
    if (typeof obj == 'object') {
        var result = Array.isArray(obj) ? [] : {};
        for (const key in obj) {
            result[key] = typeof obj[key] == 'object' ? deepCopy(obj[key]) : obj[key];
        }

        return result;
    } else {
        return obj
    }
}


function instanceOf(L, R) {
    let left = L.__proto__, right = R.prototype;
    while (true) {
        if (left === null) {
            return false
        }

        if (left === right) {
            return true;
        }
        left = left.__proto__;
    }
}

function __New(fn) {
    var obj = {};
    Object.setPrototypeOf(obj, fn.prototype);
    var result = fn.apply(obj, [...arguments].slice(1))
    return result instanceof Object ? result : obj
}

function _new (fn) {
    var obj = Object.create(null);
    Object.setPrototypeOf(obj, fn.prototype)
    var result = fn.apply(obj, [...arguments].slice(1))
    return result instanceof Object ? result : obj;
}


function thunkMiddleware({ dispatch, getState }) {
    return next => action => typeof action == 'function' ?
        action(dispatch, getState)
        : next(action);
}

function add(n1) {
    return function (n2) {
        return function (n3) {
            return n1 + n2 + n3
        }
    }
}

let temp = [];
function mergeSort(arr, left, right) {
    if (left < right) {
        let mid = (left + right) / 2
        arr = mergeSort(arr, left, mid);
        arr = mergeSort(arr, mid + 1, right);
        let k = 0, i = left, j = mid + 1;
        while (i <= mid && j <= right) {
            if (a[i] <= a[j]) {
                temp[k++] = a[i++];
            } else {
                temp[k++] = a[j++];
            }
        }

        while (i <= mid) {
            temp[k++] = a[i++];
        }

        while (j <= right) {
            temp[k++] = a[j++];
        }

        for (let v of temp) {
            a[left++] = v;
        }

    }
    return arr;
}


function addSelf(num) {
    let add = x => {
        num += x;
        return add;
    }

    add.sum = () => num;
    return add;
}




// add(1)(2)(3)
const add = (...args) => {
    return args.reduce((a,b) => a+b)
}

const curry = (fn) => {
    let args = [];
    return function tmp (...newArgs) {
        if(newArgs.length) {
            args = [
                ...args,
                ...newArgs
            ]
            return tmp
        } else {
            let v = fn.apply(this, args);
            args = []
            return val
        }
    }
}


// 合并有序数组

// merge

function merge(nums1, nums2) {
    let ret = [];
    while(nums1.length || nums2.length) {
        if (nums1.length === 0) {
            ret.push(muns2.shift())
            continue;
        }

        if (muns2.length === 0) {
            ret.push(nums1.shift())
            continue;
        }
        if (nums1[0] > nums2[0]) {
            ret.push(nums2.shift())
        } else {
            ret.push(nums1.shift())
        }
    }
    return ret;
}

// 双指针
var merger = function (nums1, m, nums2, n) {
    let current = m + n - 1;
    while (current >= 0) {
        if (n === 0) return;
        if (m<1) {
            nums1[current--] = nums2[--n];
            continue;
        }

        if (n<1) {
            nums1[current--] = nums1[--m]
            continue;
        }

        if(nums1[m-1]>nums2[n-1]) {
            nums1[current--] = nums1[--m]
        } else {
            nums1[current--] = nums2[--n]
        }

    }
}

const merge = function (nums1, m, nums2, n) {
    let len1 = m - 1,
        len2 = n - 1,
        len = m + n - 1;
    while(len2 >= 0) {
        if(len1 < 0) {
            nums1[len--] = nums2[len2--]
            continue
        }

        nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--]
    }

}

// 二进制转十进制

const binaryToDecimal = binary => {
    let result = 0;
    if (!binary.includes('.')) {
        if(binary.length < 8) {
            binary = '0'.repeat(8-binary.length) + binary
        }

        if (binary[0] === '0') {
            // 正整数
            result = 1
        } else if(binary[0] === '1') {
            // 负整数
        }
    }
}




function quickSort(arr) {
    // 交换
    function swap(arr, a, b) {
        var temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }

    // 分区
    function partition(arr, left, right) {
        /**
         * 开始时不知最终pivot的存放位置，可以先将pivot交换到后面去
         * 这里直接定义最右边的元素为基准
         */
        var pivot = arr[right];
        /**
         * 存放小于pivot的元素时，是紧挨着上一元素的，否则空隙里存放的可能是大于pivot的元素，
         * 故声明一个storeIndex变量，并初始化为left来依次紧挨着存放小于pivot的元素。
         */
        var storeIndex = left;
        for (var i = left; i < right; i++) {
            if (arr[i] < pivot) {
                /**
                 * 遍历数组，找到小于的pivot的元素，（大于pivot的元素会跳过）
                 * 将循环i次时得到的元素，通过swap交换放到storeIndex处，
                 * 并对storeIndex递增1，表示下一个可能要交换的位置
                 */
                swap(arr, storeIndex, i);
                storeIndex++;
            }
        }
        // 最后： 将pivot交换到storeIndex处，基准元素放置到最终正确位置上
        swap(arr, right, storeIndex);
        return storeIndex;
    }

    function sort(arr, left, right) {
        if (left > right) return;

        var storeIndex = partition(arr, left, right);
        sort(arr, left, storeIndex - 1);
        sort(arr, storeIndex + 1, right);
    }

    sort(arr, 0, arr.length - 1);
    return arr;
}


// 链表有环 JSON.stringify

function hasCycle(head) {
    if(!head || !head.next) return false;
    let fast = head.next.next, slow = head.next; // 快慢指针
    while(fast !== slow) {
        if(!fast || !fast.next) {
            return false
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
}

// 链表中间节点
function findMiddle (head) {
    let fast = head, slow = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

// 反转链表
function reverse(head) {
    if(!head || !head.next) return head;
    let pre = null, cur =head;
    while(cur) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    head = pre
    return pre;
}

// 计算多个数组的交集

const intersection = (...args) => {
    if(args.length == 0) return [];
    if(args.length == 1) return [args[0]];
    return [...new Set(args.reduce((res, arg)=> {
        return res.filter(i => arg.includes(i))
    }))]
}

// 两数之和

const twoSum = (nums, target) => {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let k = target - nums[i];
        if(map.has(k)) {
            return [map.get(k), nums[i]]
        }
        map.set(nums[i], i)
    }
    return [];
}

// LRU 缓存

var LRUCache = function (capacity) {
    this.cache = new Map();
    this.capacity = capacity;
}

LRUCache.prototype.get = function (key) {
    if(this.cache.has(key)) {
        var temp = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, temp);
        return temp;
    }
    return -1;
}

LRUCache.prototype.put = function (key, value) {
    if(this.cache.has(key)) {
        this.cache.delete(key)
    } else if (this.cache.size >= this.capacity) {
        this.cache.delete(this.cache.keys().next.value);
    }
    this.cache.set(key, value)
}


// 合并2个有

function mergeTwo(l1,l2) {
    if(l1 == null) return l2;
    if(l2 == null) return l1;
    if(l1.val <= l2.val) {
        l1.next = mergeTwo(l1.next, l2);
        return l1
    } else {
        l2.next = mergeTwo(l2.next, l1);
        return l2;
    }
}


function preOrder (root) {
    if(!root) return [];
    let result = [],
        stack = [root];

    while (stack.length !== 0) {
        let top = stack.pop();
        if(top.right) {
            stack.push(top.right)
        }
        if(top.left) {
            stack.push(top.left)
        }
        result.push(top.val)
    }
    return result;
}

function inOrder(root) {
    if (!root) return []
    let result = [];
    let stack = [];
    while(stack.length !== 0 || root) {
        while(root) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop();
        result.push(root.val)
        root = root.right;
    }
    return result;
}



function postOrder(root) {
    if(!root){
        return [];
     }
     let result = []
     let stack = [root]
     while(stack.length!==0) {
         let top = stack.pop();
         result.unshift(top.val);
         if(top.left) {
             stack.push(top.left)
         }
         if(top.right) {
             stack.push(top.right)
         }
     }
     return result;
}

function level (root) {
    if(!root) return [];
    let queue = [root];
    let result = [];

    while(queue.length !==0) {
        let node = queue.shift();
        result.push(node.val);
        if(node.left) {
            queue.push(node.left)
        }

        if(node.right) {
            queue.push(node.right)
        }
    }
    return result
}


function clone (target, map = new WeakMap()) {
    if(typeof target == 'object') {
        let _clone = Array.isArray(target) ? [] : {};
        if (map.get(target)) {
            return map.get(target)
        }
        for(let key in target){
            _clone[key] = typeof target[key] == 'object' ? clone(target[key], map) : target[key];
         }
         return _clone;
    } else {
        return target
    }
}

function curry(fn, args) {
    let args = args || [];
    return function() {
        let _args = args.concat(Array.prototype.slice.call(arguments))
        if(_args.length >= fn.length) {
            return fn.apply(this, _args)
        } else {
            return curry.call(this, fn, _args)
        }
    }
}

function debounce(fn, delay = 3000){
    let timer = null;
    return function () {
        if(timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(fn, delay);
    }
}

function throttle (fn, delay = 3000) {
    let pre = +new Date();
    let timer = null;
    return function() {
        let cur = +new Date();
        let args = [].slice.call(arguments)
        if(cur - pre > delay) {
            fn.apply(this, args)
            pre = cur
        } else {
            clearTimeout(timer)
            timer = setTimeout(() => {
                fn.apply(this, args)
            }, delay) 
        }
    }
}



function isObject(val) {
    return typeof val === 'object' && val !== null;
}

function flatten(obj) {
    if(!isObject(obj)) return;
    let res = {};

    const dfs = (cur, prefix) => {
        if (isObject(cur)) {
            if(Array.isArray(cur)) {
                cur.forEach((item, index) => {
                    dfs(item, `${prefix}[${index}]`)
                })
            } else {
                for (const k of cur) {
                    dfs(cur[k], `${prefix}${prefix ? "." : ""}${k}`)
                }
            }
        }else {
            res[prefix] = cur
        }
    }

    dfs(obj, "");

    return res
}

function listToTree(data) {
    let temp = {};
    let treeData = [];
    for (let i = 0; i < data.length; i++) {
        temp[data[i].id] = data[i]
        
    }
    for (const i in temp) {
        if(+temp[i].parentId !== 0) {
            if(!temp[temp[i].parentId].children) {
                temp[temp[i].parentId].children = []
            }
            temp[temp[i].parentId].children.push(temp[i])
        }else {
            treeData.push(temp[i])
        }
    }
    return treeData;
}

function treeToList (data) {
    let res = [];
    const dfs = tree => {
        tree.forEach(item => {
            if(item.children) {
                dfs(item.children)
                delete item.children
            }
            res.push(item)
        })
    }
    dfs(data);
    return res
}

function add(a, b) {
    let maxLength = Math.max(a.length, b.length);
    a = a.padStart(maxLength, 0);
    b = b.padStart(maxLength, 0);

    let temp = 0;
    let radix = 0;
    let sum = '';
    for (let i = maxLength - 1; i >= 0; i--) {
        temp = parseInt(a[i]) + parseInt(b[i]) + radix;
        radix = Math.floor(temp / 10);
        sum = temp%10 +sum
    }

    if(radix!==0) {
        sum = '' + radix + sum
    }

    return sum;
}

function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback
    })

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        let id = setInterval(tick, delay);
        
        return () => clearInterval(id);

    }, [delay])
}


Array.prototype.__reduce = function(fn, prev) {
    var arr = Array.prototype.slice.call(this);
    if(!arr.length) {
        return
    }

    var res;
    res = prev ? prev : arr[0];
    for (let i = 0; i < arr.length; i++) {
        res = fn.call(null, res, arr[i], i, this) 
    }

    return res

}

Array.prototype.__filter = function(callback, arg) {
    if(this == undefined) {
        throw new TypeError('this is undefined')
    }

    if(typeof callback !== 'function') {
        throw new TypeError(callback + 'is not a function')
    }
    const res = [];

    const O = Object(this);
    const len = O.length;
    for (let i = 0; i < len; i++) {
        if(i in O) {
            if(callback.call(arg, O[i], i, O)) {
                res.push(O[i])
            }
        }
    }
    return res;
}


Array.prototype.__map = function(callback, arg) {
    if(this == undefined) {
        throw new TypeError('this is undefined')
    }

    if(typeof callback !== 'function') {
        throw new TypeError(callback + 'is not a function')
    }
    const res = [];
    const O = Object(this);
    const len = O.length;
    for (let i = 0; i < len; i++) {
       res[i] = callback.call(arg, O[i], i, this)
    }
    return res
}

Array.prototype.__forEach = function(callback, context) {
    if(this == undefined) {
        throw new TypeError('this is undefined')
    }

    if(typeof callback !== 'function') {
        throw new TypeError(callback + 'is not a function')
    }
    const O = Object(this);
    const len = O.length;
    while(k<len) {
        if(k in O) {
            callback.call(context, O[k], k, O)
        }
        k++
    }
}
