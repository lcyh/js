/*
 * @Author: changluo
 * @Description: 始终获取的是n个不同的随机值
 */
// 方法1://arr是不相同数值组成的数组,始终获取的是n个不同的值
function fn() {
    let arr = [1, 2, 2, 3, 3, 4];
    let n = 2;
    let res = []
    for (let i = 0; i < n; i++) {
        const index = Math.floor(Math.random() * arr.length);
        console.log('index', index);
        if (res.includes(arr[index])) {
            i--
        } else {
            res.push(arr[index]) 
        }
    }
    return res;
}
console.log('fn', fn());

// 方法2://arr存在相同的数值组成的数组, 始终获取的是n个不同的值
function getTenNum(n) {
    let arr = [1, 2, 2, 3, 3, 4, 4, 5, 5, 6];
    let map = new Map()
    let result = []
    for (let i = 0; i < n; i++) {
        let random = Math.floor(Math.random() * arr.length);
        if (map.has(arr[random])) {
            i--
        } else {
            map.set(arr[random], i)
            result.push(arr[random]);
        }
    }
    return result;
}
// var resArr = getTenNum(5);
// console.log('resArr', resArr);

// 方法3://arr存在相同的数值组成的数组, 始终获取的是n个不同的值
function getTenNum(n) {
    let result = [];
    let testArray = [1, 2, 2, 3, 3, 4, 4, 5, 5, 6];
    for (let i = 0; i < n; ++i) {
        let random = Math.floor(Math.random() * testArray.length);
        if (result.includes(testArray[random])) {
            testArray.splice(random, 1);
            i--
        } else {
            result.push(testArray[random]);
            testArray.splice(random, 1);
        }
    }
    return result;
}
var resArr = getTenNum(5);
console.log('resArr', resArr);


