/**
 * 例子: [1,11,2,22,3,33,4,44]
 *
 * 输出:[[1,11],[2,22],[3,33],[4,44]]
 */


function handleArr(arr, n = 2) {
    const res = [];
    for (let i = 0; i < arr.length - 1; i += 2) {
        let index = Math.floor((i / n));
        const obj = {
            x: arr[i],
            y: arr[i + 1]
        }
        res[index] = obj
    }
    // console.log('res', res);
    return res;
}
let arr1 = [1, 11, 2, 22, 3, 33, 4, 44];
// console.log('handleArr', handleArr(arr1));