/*
 * @Author: changluo
 * @Description: 二分查找
 */

function binarySearch(arr, target) {
    if (!Array.isArray(arr)) return;
    arr.sort((a, b) => a - b);// 排序
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let midIndex = Math.floor(start + end / 2);
        let mid = arr[midIndex];
        if (mid === target) {
            // return mid;
            return midIndex;
        } else if (mid < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}
// let arr = [2, 4, 1, 7, 8, , 9]; // [1, 2, 4, 7, 8, 9]
// let target = 7;
// console.log(binarySearch(arr, target));


function handleBinarySearch1(arr, target) {
    if (!Array.isArray(arr)) return
    arr.sort((a, b) => a - b)
    let start = 0;
    let end = arr.length - 1
    while (start <= end) {
        let middleIndex = Math.floor((start + end) / 2)
        let mid = arr[middleIndex];
        if (mid === target) return middleIndex
        else if (mid < target) {
            start = middleIndex + 1;
        } else {
            end = middleIndex - 1;
        }
        start++
        end--
    }
}
let arr = [2, 4, 1, 7, 8, , 9]; // [1, 2, 4, 7, 8, 9]
let target = 7;
console.log('handleBinarySearch1', handleBinarySearch1(arr, target));