/*
 * @Author: changluo
 * @Description: Reduce
 */

Array.prototype.myReduce = function (callback, prev) {
    let arr = this;
    for (let i = 0; i < arr.length; i++) {
        // 如果没有初始值，此时 i 连续加了两次1，
        // i = 2
        if (prev !== undefined) {
            prev = callback(prev, arr[i], i, arr);  // callback(prev,arr[2],2,arr)
        } else {
            // i = 0;
            prev = callback(arr[i], arr[i + 1], i + 1, arr);  // callback(arr[0],arr[1],1,arr)
            i++; // 指针下移，如果没有初始值的话，取 索引0和1项，此时初始值prev有值后，i++ 
            // i = 1;
        }
    }
    return prev;
}

// let arr = [1, 2, 3, 4];
// let result = arr.myReduce((prev, cur) => prev + cur, 5);
// console.log('result', result);


// let num = 0;
// // console.log(++num);
// console.log(num++);

Array.prototype.myReduce1 = function (callback, prev) {
    const arr = this;
    for (let i = 0; i < arr.length; i++) {
        if (prev === undefined) {
            prev = callback(arr[i], arr[i + 1], i + 1, arr);
            i++
        } else {
            prev = callback(prev, arr[i], i, arr);
        }
    }
    return prev;
}

let arr1 = [1, 2, 3, 4];
let result1 = arr1.myReduce1((prev, cur) => prev + cur, 5);
console.log('result1', result1);




let arr = ['--port', '3000', '--env', 'dev'];

let obj = {}
arr.reduce((memo, cur, index, arr) => {
    if (cur.startsWith('--')) {
        memo[cur.slice(2)] = arr[index + 1]
    }
    return memo;
}, obj)
console.log('obj', obj);