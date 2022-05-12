/*
 * @Author: changluo
 * @Description: Array.forEach()
 */
// 选择排序->升序效果
Array.prototype.myForEach = function (callback) {
    let arr = this;
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr)
    }
}

let arr = [{ id: 11, name: '11' }, { id: 2, name: '2' }, { id: 35, name: '35' }, { id: 4, name: '4' }];
arr.myForEach((item, index, arr) => {
    if (index === 1) {
        return
    }
    console.log(item, index);
});





