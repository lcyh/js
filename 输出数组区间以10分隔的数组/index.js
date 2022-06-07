/**
 * 输入 [10,40,130]
 * 输出 [10,20,30,40,50,60,70,80,90,100,110,120,130]
 */

function handleGetArr(arr) {
  const list = [];
  let s = arr[0];
  let e = arr[arr.length - 1];
  while (s <= e) {
    if (s % 10 === 0) {
      list.push(s);
    }
    if (s !== e && e % 10 === 0) {
      list.push(e);
    }
    s += 10;
    e -= 10;
  }
  return list;
}
function handleGetArr2(arr) {
  const list = [];
  let s = arr[0];
  let e = arr[arr.length - 1];
  for (let i = s; i <= e; i += 10) {
    if (i % 10 === 0) {
      list.push(i);
    }
  }
  return list;
}
const arr = [10, 40, 130];
console.log("handleGetArr", handleGetArr2(arr));
