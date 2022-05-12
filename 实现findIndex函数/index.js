/*
 * @Author: changluo
 * @Description: Array.findIndex()
 */
// 选择排序->升序效果
Array.prototype.myFindIndex = function (callback) {
    let arr = this;
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return i
        }
    }
}

// let arr = [{id:11,name:'11'},{id:2,name:'2'},{id:35,name:'35'},{id:4,name:'4'}];
// arr.myFindIndex((item,index,arr) => {
//     console.log(item,index,arr);
// });


let arr = [{ id: 11, name: '11' }, { id: 2, name: '2' }, { id: 35, name: '35' }, { id: 4, name: '4' }];
const index = arr.myFindIndex((item) => item.id === 35)
console.log('index', index);

