/*
 * @Description: 写版本号排序的方法
 * 题目描述:有一组版本号如下['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']。
 * 现在需要对其进行排序，排序的结果为 [ '0.1.1', '0.302.1', '2.3.3', '4.2', '4.3.4.5', '4.3.5' ]
 */
// let arr = [2, 5, 7, 3];
// arr.sort((a, b) => {
//     return a - b; // return a-b 升序; return b-a 降序
// })
// console.log('arr', arr);// arr [ 2, 3, 5, 7 ]
// 比较版本号
const arr2 = ["0.1.1", "2.3.3", "0.302.1", "4.2", "4.3.5", "4.3.4.5"];
arr2.sort((a, b) => {
  let i = 0;
  const arr1 = a.split(".");
  const arr2 = b.split(".");
  while (true) {
    const s1 = arr1[i];
    const s2 = arr2[i];
    i++;
    if (s1 === undefined || s2 === undefined) {
      return arr1.length - arr2.length;
    }
    if (s1 === s2) continue;
    return s1 - s2;
  }
});
// arr2.sort((a, b) => {
//     return a > b ? 1 : -1
// })
// console.log(arr2);// [ '0.1.1', '0.302.1', '2.3.3', '4.2', '4.3.4.5', '4.3.5' ]

console.log("0.302.1" > "2.3.3");
console.log("2.4.4" > "2.3.3");

console.log("0.302.1".split("."));
