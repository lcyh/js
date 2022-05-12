/*
 * https://leetcode-cn.com/problems/merge-sorted-array
 * @Description: 合并两个有序数组
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
   初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。
    示例 1：
    输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
    输出：[1,2,2,3,5,6]

    示例 2：
    输入：nums1 = [1], m = 1, nums2 = [], n = 0
    输出：[1]
 */
// 方法1 :先合并在sort排序
function merge(num1, num2) {
    num1 = num1.filter((i) => i);
    num2 = num2.filter((j) => j);
    num1 = num1.concat(num2).sort((a, b) => a - b);
    return num1;
}
let nums1 = [1, 2, 3, 0, 0, 0], m = 3;
let nums2 = [2, 5, 6], n = 3;
console.log(merge(nums1, nums2));

// 方法2 :我们为两个数组分别设置一个指针p1和p2来作为队列的头部指针
const merge2 = function (nums1, m, nums2, n) {
    let p1 = 0, p2 = 0;
    const sorted = new Array(m + n).fill(0);
    let cur;
    while (p1 < m || p2 < n) {
        if (p1 === m) {
            cur = nums2[p2++];
        } else if (p2 === n) {
            cur = nums1[p1++];
        } else if (nums1[p1] < nums2[p2]) {
            cur = nums1[p1++];
        } else {
            cur = nums2[p2++];
        }
        sorted[p1 + p2 - 1] = cur; //p1=3,p2=3,cur=6 [1,2,2,3,5,6]
    }
    for (let i = 0; i < m + n; ++i) {
        nums1[i] = sorted[i];
    }
};
let nums1 = [1, 2, 3, 0, 0, 0], m = 3;
let nums2 = [2, 5, 6], n = 3;
merge2(nums1, m, nums2, n);
console.log('nums1', nums1); // [1,2,2,3,5,6]


let nums1 = [1, 2, 3], p1 = 0;
let cur;
cur = nums1[p1++];
// 等价
// cur = nums1[p1];
// p1 = p1 + 1
console.log({ cur, p1 }); // { cur: 1, p1: 1 }



function mergeTwoList(nums1, m, nums2, n) {
    const sorted = new Array(m + n).fill(0);
    let p1 = 0;
    let p2 = 0;
    let cur;
    while (p1 < m || p2 < n) {
        if (p1 === m) {
            cur = nums2[p2]
            p2++
        } else if (p2 === n) {
            cur = nums1[p1]
            p1++
        } else if (nums1[p1] <= nums2[p2]) {
            cur = nums1[p1]
            p1++
        } else {
            cur = nums2[p2]
            p2++
        }
        sorted[p1 + p2 - 1] = cur;
    }
    for (let i = 0; i < sorted.length; i++) {
        nums1[i] = sorted[i]
    }
    return nums1
}
//p1
let nums1 = [1, 2, 3, 7, 0, 0, 0], m = 4;
//p2
let nums2 = [2, 5, 6], n = 3;
//  sorted = [1,2,2,3,5,6]
console.log('===--==', mergeTwoList(nums1, m, nums2, n));