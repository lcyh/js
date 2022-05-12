/*
 * https://blog.csdn.net/qq_41096610/article/details/107531031
 * @Description: 给出一个区间的集合，请合并所有重叠的区间。
 * 
示例 1:
输入: [[1,3],[2,6],[8,10],[15,18]] 输出: [[1,6],[8,10],[15,18]]
解释: 区间[1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

示例 2:
输入: [[1,4],[4,5]] 输出: [[1,5]]
解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
 */

//  方法1；
// splice方法 改变原数组
var merge = function (intervals) {
    if (intervals.length <= 1) { return intervals }
    intervals.sort((a, b) => a[0] - b[0]) // 行进行升序排序
    let arr = []
    for (var i = 0; i < intervals.length - 1; i++) { //边界intervals.length-1,因为删除元素变短了，此时，i--
        const a2 = intervals[i][1]        //取[[1,4],[4,5]]中第一个数组元素4
        const b1 = intervals[i + 1][0]      //取[[1,4],[4,5]]中第二个数组元素4
        const b2 = intervals[i + 1][1]      //取[[1,4],[4,5]]中第二个元素5
        if (a2 >= b1) {
            intervals[i][1] = a2 > b2 ? a2 : b2
            intervals.splice(i + 1, 1) //删除后面多余的元素，删除数量为1
            arr.push(a2, b1)
            i--  //根据此例子,当i=0时,因为删除arr[1]项之后，数组的长度发生了变化，需减1-1,0-1=-1,然后i++,此时又从-1+1 = 0开始遍历
        }
        console.log('i++之后', i);
    }
    return intervals
};
let arr = [[1, 3], [2, 6], [8, 10], [9, 11], [15, 18]];
console.log(merge(arr));

// 方法2:
/**i和j双指针,不改变原数组,返回新数组
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge2 = function (intervals) {
    if (intervals.length <= 1) { return intervals }
    intervals.sort((a, b) => {
        return a[0] - b[0]
    })
    let res = [intervals[0]], j = 0;
    for (let i = 1; i < intervals.length; i++) {
        if (res[j][1] >= intervals[i][1]) {
            res[j] = res[j]
        } else if (res[j][1] >= intervals[i][0] && res[j][1] < intervals[i][1]) {
            res[j][1] = intervals[i][1]
        } else {
            res.push(intervals[i])
            j++
        }
    }
    return res;
};
let arr = [[1, 3], [8, 10], [2, 6], [15, 18]];
console.log(merge2(arr));


function merge3(intervals) {
    if (intervals.length < 2) return intervals
    intervals.sort((a, b) => a - b)
    for (let i = 0; i < intervals.length - 1; i++) {
        if (intervals[i][1] >= intervals[i + 1][0]) {
            intervals[i][1] = Math.max(intervals[i][1], intervals[i + 1][1])
            intervals.splice(i + 1, 1);
            i--
        }
    }
    return intervals
}
let arr = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log(merge3(arr));