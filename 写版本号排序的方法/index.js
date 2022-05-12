/*
 * @Description: 写版本号排序的方法
 * 题目描述:有一组版本号如下['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']。
 * 现在需要对其进行排序，排序的结果为 ['4.3.5','4.3.4.5','2.3.3','0.302.1','0.1.1']
 */
let arr = [2, 5, 7, 3];
arr.sort((a, b) => {
    return a - b; // return a-b 升序; return b-a 降序
})
console.log('arr', arr);// arr [ 2, 3, 5, 7 ]
// 比较版本号
const arr2 = ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5'];
arr2.sort((a, b) => {
    let i = 0;
    const arr1 = a.split('.');
    const arr2 = b.split('.');
    while (true) {
        const s1 = arr1[i];
        const s2 = arr2[i];
        i++
        if (s1 === undefined || s2 === undefined) {
            return arr2.length - arr1.length
        }
        if (s1 === s2) continue;
        return s2 - s1;
    }
});
console.log('arr2', arr2);// arr2 ['4.3.5','4.3.4.5','4.2','2.3.3','0.302.1','0.1.1']


// let arr1 = ['1.2','1.1.4','0.1.2','2.4','2.4.1'];
// arr1.sort((a, b) => {
//     let s1 = a.split('.');
//     let s2 = b.split('.');
//     let i = 0;
//     while (true) {
//         let a1 = s1[i];
//         let b1 = s2[i];
//         i++
//         if (a1 === b1) {
//             continue;
//         }
//         return a1 - b1;
//     }
// })
// console.log('arr1',arr1);


var i = 0;
//continue
//当continue在while或do while循环中，执行之后是继续执行判断
while (i < 5) {
    i++;
    if (i == 3) {
        continue
    }
    console.log(i) // 1,2,4,5
}

//当continue在for循环中，执行之后是继续执行表达式3
for (var i = 0; i < 5; i++) {
    if (i == 3) {
        continue
    }
    console.log(i) // 0,1,2,4
}

// while 循环里的return 会 终止fn函数
function fn() {
    let arr = [3, 5, 10]
    let i = -1;
    while (i < 3) {
        i++
        if (arr[i] > 5) {
            continue
        }
        console.log('i', i);
        return arr[i]
    }
    // return 'hh'
}
console.log('fn', fn());