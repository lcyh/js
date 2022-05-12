/**
 * 说明:从数组里随机取出两个数,并且取出来的数中出现次数都是2次
 * 
 */
// 原数组:
// const data = ['A', 'B', 'C', 'D'];

// 输出：
// {
//   A: ['B', 'D'],  
//   B: ['A', 'C'],  
//   C: ['A', 'D'],  
//   D: ['B', 'C']   
// }

const data = ['A', 'B', 'C', 'D', 'E'];
function handleMap(list) {
    const result = {};
    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        if (!result[item]) {
            result[item] = []
        }
        let next1 = i + 1
        let next2 = i + 2
        if (i === list.length - 2) {
            next2 = 0
        } else if (i === list.length - 1) {
            next1 = 0
            next2 = 1
        }
        result[item].push(list[next1], list[next2])
    }
    return result
}
console.log(handleMap(data));