/*
 * @Author: changluo
 * @Description: Array.sort()
 */
// 选择排序->升序效果
Array.prototype.mySort = function (callback) {
    let arr = this;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (callback(arr[i], arr[j]) > 0) {
                let temp;
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

// let arr = [11, 2, 35, 4];
let arr = [{id:11,name:'11'},{id:2,name:'2'},{id:35,name:'35'},{id:4,name:'4'}];
arr.mySort((a, b) => a.id - b.id);
console.log('arr', arr);





