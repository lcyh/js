/**
 * 例子1: [1,11,2,22,3,33,4,44]
 *
 * 输出:[[1,11],[2,22],[3,33],[4,44]]
 *
 *
 * 例子2: [1,11,2,22,3,33,4,44]
 *
 * 输出:[{x:1,y:11},{x:2,y:22},{x:3,y:33},{x:4,y:44}]
 */

function handleArr(arr, n = 2) {
  const res = [];
  for (let i = 0; i < arr.length - 1; i += 2) {
    let index = Math.floor(i / n);
    const obj = {
      x: arr[i],
      y: arr[i + 1],
    };
    res[index] = obj;
  }
  // console.log('res', res);
  return res;
}
function handleArr2(arr, n = 2) {
  const res = [];
  for (let i = 0; i < arr.length - 1; i += 2) {
    let index = Math.floor(i / n);
    res[index] = [arr[i], arr[i + 1]];
  }
  // console.log('res', res);
  return res;
}
let arr1 = [1, 11, 2, 22, 3, 33, 4, 44];
console.log("handleArr", handleArr2(arr1));
