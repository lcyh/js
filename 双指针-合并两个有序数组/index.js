/*
 * @Author: changluo
 * @Description: 合并两个数组并排序
 */
function merge(left, right) {
    let i = 0;
    let j = 0;
    let res = []
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            res.push(left[i]);
            i++
        } else {
            res.push(right[j]);
            j++;
        }
    }
    if (i < left.length) {
        res.push(...left.slice(i)); // res.concat(let.slice(i))
    }
    if (j < right.length) {
        res.push(...right.slice(j)); // res.concat(let.slice(j))
    }
    return res;
}
let num1 = [1, 2, 3];
let num2 = [2, 3, 5];
console.log('merge', merge(num1, num2));

