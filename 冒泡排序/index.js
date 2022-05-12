/*
 * @Author: changluo
 * @Description: 冒泡排序
 */
// 方法一
function BubbleSort(arr) {
    let newArr = [...new Set(arr)];  // [2, 5, 3, 1, 7, 9]
    for (let i = 0; i < newArr.length; i++) {
        for (let j = 1; j < newArr.length - i; j++) {
            let temp;
            if (newArr[j - 1] > newArr[j]) {
                temp = newArr[j];
                newArr[j] = newArr[j - 1];
                newArr[j - 1] = temp;
            }
        }
    }
    return newArr;
}
let arr = [2, 5, 3, 1, 7, 3, 9];
let res = BubbleSort(arr);
console.log('res', res);

// 方法二,减少了跟i自身的比较,效率更快
// 选择排序/打擂台法：
// 规律：通过比较首先选出最小的数放在第一个位置上，然后在其余的数中选出次小数放在第二个位置上,依此类推,直到所有的数成为有序序列。
function BubbleSort2(arr) {
    //比较的轮数
    for (let i = 0; i < arr.length; i++) {
        //每轮比较的次数
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp;
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
let arr = [5, 3, 2, 6, 1];
console.log(BubbleSort2(arr));