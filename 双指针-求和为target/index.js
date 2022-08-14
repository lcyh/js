/*
 * @Author: changluo
 * @Description:
 * 输入:[1,2,6,8,9] target = 8
 * 输出:[1,2]
 */
function sum(target) {
  let list = [1, 2, 6, 8, 9]; // 有序数组
  let i = 0,
    j = list.length - 1;
  while (i < j) {
    if (list[i] + list[j] > target) {
      j--;
    } else if (list[i] + list[j] < target) {
      i++;
    } else if (list[i] + list[j] === target) {
      return [i, j];
    }
  }
  return -1;
}
// console.log("sum", sum(8));

function sum2(target) {
  let list = [2, 1, 6, 7, 8, 9];
  let map = new Map();
  let res = [];
  for (let i = 0; i < list.length; i++) {
    const num = target - list[i];
    if (map.has(num)) {
      res.push([i, map.get(num)]);
    } else {
      map.set(list[i], i);
    }
  }
  return res;
}
console.log("sum2", sum2(8));
