/*
 * @Description: 归并排序--时间复杂度 nlog(n)
 题目描述:实现一个时间复杂度为 nlog(n)的排序算法，二分查找(logn) + for循环(o(n)) -》嵌套关系-》O(nlogn)
 */
// merge合并两个有序数组并排序
function merge(left, right) {
  let i = 0;
  let j = 0;
  let res = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }
  if (i < left.length) {
    res.push(...left.slice(i));
  }
  if (j < right.length) {
    res.push(...right.slice(j));
  }
  return res;
}
// let arr1 = [2, 5, 7];
// let arr2 = [1, 3, 6];
// console.log("merge", merge(arr1, arr2));

function MergeSort(arr) {
  if (arr.length < 2) return arr;
  const midIndex = Math.floor(arr.length / 2);
  let leftVal = arr.slice(0, midIndex);
  let rightVal = arr.slice(midIndex);
  let left = MergeSort(leftVal);
  let right = MergeSort(rightVal);
  return merge(left, right);
}
// console.log(MergeSort([5, 2, 8, 1, 6])); //[2,5] [1,6,8]

// console.log("[5, 2, 8, 1, 6].slice(0,2)", [5, 2, 8, 1, 6].slice(0, 2)); // [5,2]
// console.log("[5, 2, 8, 1, 6].slice(2)", [5, 2, 8, 1, 6].slice(2));// [ 8, 1, 6 ]

function MergeSort2(arr) {
  if (arr.length < 2) return arr;
  let midIndex = Math.floor(arr.length / 2);
  let left = arr.slice(0, midIndex);
  let right = arr.slice(midIndex);
  let leftVal = MergeSort2(left);
  let rightVal = MergeSort2(right);
  console.log({ leftVal, rightVal });
  return merge2(leftVal, rightVal);
}

function merge2(arr1, arr2) {
  let i = 0,
    j = 0;
  let res = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }
  if (i < arr1.length) {
    res = res.concat(arr1.slice(i));
  }
  if (j < arr2.length) {
    res = res.concat(arr2.slice(j));
  }
  return res;
}

console.log("===", MergeSort2([5, 3, 7, 2, 9]));
