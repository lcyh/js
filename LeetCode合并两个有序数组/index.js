function merge(num1, num2) {
    num1 = num1.filter((i) => i);
    num2 = num2.filter((j) => j);
    num1 = num1.concat(num2).sort((a, b) => a - b);
    return num1;
}
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
        sorted[p1 + p2 - 1] = cur;
    }
    for (let i = 0; i < m + n; ++i) {
        nums1[i] = sorted[i];
    }
};
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
let nums1 = [1, 2, 3, 7, 0, 0, 0], m = 4;
let nums2 = [2, 5, 6], n = 3;
function handleMergeArray(nums1, nums2) {
    nums1 = nums1.filter(Boolean)
    nums2 = nums2.filter(Boolean)
    let len1 = nums1.length;
    let len2 = nums2.length;
    let arr = []
    let i = 0;
    let j = 0;
    while (i < len1 && j < len2) {
        if (nums1[i] < nums2[j]) {
            arr.push(nums1[i++])
        } else {
            arr.push(nums2[j++])
        }
    }
    arr = arr.concat(nums1.slice(i, len1))
    arr = arr.concat(nums2.slice(j, len2))
    return arr
}
console.log('handleMergeArray', handleMergeArray(nums1, nums2));

function mergeArr(nums1, nums2) {
    nums1 = nums1.filter(Boolean)
    nums2 = nums2.filter(Boolean)
    let len1 = nums1.length;
    let len2 = nums2.length;
    let i = 0, j = 0;
    let res = []
    while (i < len1 || j < len2) {
        let l1 = nums1[i]
        let l2 = nums2[j]
        if (l1 && !l2) {
            res.push(l1)
            i++
        } else if (!l1 && l2) {
            res.push(l2)
            j++
        } else if (l1 < l2) {
            res.push(l1);
            i++
        } else if (l1 >= l2) {
            res.push(l2);
            j++
        }
    }
    return res
}
let nums1 = [1, 2, 3, 7, 8, 0, 0, 0], m = 4;
let nums2 = [2, 5, 6], n = 3;
console.log('mergeArr', mergeArr(nums1, nums2));
