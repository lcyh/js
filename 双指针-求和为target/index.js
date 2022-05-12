/*
 * @Author: changluo
 * @Description: 
 * 输入:[1,2,6,8,9] target = 8
 * 输出:[1,2]
 */
function sum(target) {
    let list = [1, 2, 6, 8, 9] // 有序数组
    let i = 0, j = list.length - 1;
    while (i < j) {
        if (list[i] + list[j] > target) {
            j--
        } else if (list[i] + list[j] < target) {
            i++
        } else if (list[i] + list[j] === target) { 
            return [i, j]
        }
    }
    return -1
}
console.log('sum', sum(8));

