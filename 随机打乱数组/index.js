/*
 * @Author: changluo
 * @Description: 随机打乱数组用的函数
 */

function getRandom() {
    let list = [2, 5, 8, 3, 1, 4]
    list.sort(() => {
        return Math.random() > .5 ? 1 : -1
    })
    // console.log('list', list);
    return list
}
// console.log('getRandom', getRandom());



// 随机数函数
function getRandomNum(curIndex) {
    // 返回[min, max]之间的随机数
    return Math.floor(Math.random() * curIndex)
}
// 洗牌函数
function shuffle() {
    // 实现洗牌函数（随机打乱数组）
    let arr = [1, 2, 3, 4, 5]
    let newArr = arr.slice()  // 不改变原数组，将数组剪切一份给newArr
    for (let i = 0; i < newArr.length; i++) {
        // const j = getRandomNum(i)
        const j = Math.floor(Math.random() * newArr.length);// 小于当前索引的随机值进行 交换
        const temp = newArr[i]
        newArr[i] = newArr[j]
        newArr[j] = temp
    }
    return newArr
}
let randomArr = shuffle()
console.log('randomArr',randomArr);
