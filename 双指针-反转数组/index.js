/*
 * @Author: changluo
 * @Description: 反转数组
 * 输入:[1,2,6,8,9] 
 * 输出:[9,8,6,2,1]
 */
function reverse() {
    let list = [1, 2, 6, 8, 9]
    let i = 0, j = list.length - 1;
    while (i < j) {
        [list[i], list[j]] = [list[j], list[i]]
        i++
        j--
    }
    return list
}
console.log('reverse', reverse());

