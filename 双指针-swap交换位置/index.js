/*
 * @Author: changluo
 * @Description: 
 * 输入:[0, 0, 0, 1, 0, 1, 0, 1, 0, 1]
 * 输出:[0, 0, 0, 0, 0, 0, 1, 1, 1, 1]
 */
function swap() {
    let list = [0, 0, 0, 1, 0, 1, 0, 1, 0, 1]
    for (let i = 0; i < list.length; i++) {
        const cur = list[i];
        if (cur) {
            list.splice(i, 1)
            list.push(cur)
        }
    }
    return list
}
function swap1() {
    let list = [0, 0, 0, 1, 0, 1, 0, 1, 0, 1]
    let i = 0, j = list.length - 1;
    while (i < j) {
        if (list[i] === 0) {
            i++
        }
        if (list[j] === 1) {
            j--
        }
        if (list[i] === 1 && list[j] == 0) {
            [list[i],list[j]] = [list[j],list[i]]
            i++
            j--
        }
    }
    return list
}
console.log('swap111', swap1());