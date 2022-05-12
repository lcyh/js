/*
 * @Author: changluo
 * @Description: 快速排序
 */

function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let left = [];
    let right = [];
    let midIndex = Math.floor(arr.length / 2);
    let mid = arr.splice(midIndex, 1);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= mid) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left)].concat(mid).concat([...quickSort(right)]);
}
let arr = [3, 2, 4, 1, 7, 6];
console.log(quickSort(arr));