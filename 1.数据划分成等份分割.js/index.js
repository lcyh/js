let dataSource = [
  { name: "1-1", id: 1 },
  { name: "1-2", id: 2 },
  { name: "1-3", id: 3 },
  { name: "1-4", id: 4 },

  { name: "1-5", id: 5 },
  { name: "1-6", id: 6 },
  { name: "1-7", id: 7 },
  { name: "1-8", id: 8 },

  { name: "1-9", id: 9 },
  { name: "1-10", id: 10 },
  { name: "2-1", id: 11 },
  { name: "2-2", id: 12 },

  { name: "2-3", id: 13 },
  { name: "2-4", id: 14 },
  { name: "2-5", id: 15 },
  { name: "2-6", id: 16 },

  { name: "2-7", id: 17 },
  // {name:'2-8',id:18},
];
function handleXAxisTicks() {
  const times = Array.from(new Set(dataSource.map((item) => item.name))); // 数组去重 Array.from(new Set(ticks))
  let len = times.length;
  let ticks = [];
  let criticalVal = 10; // 做成多少段
  let sum = 15;
  // 数据量大于15, 做多分成10段
  if (len > sum) {
    const space = Math.ceil(len / criticalVal); // 数据间隔 31/10 -> 4
    const ll = criticalVal + 1; // 10段有11个点，， 5段的话就是6个点
    for (let i = 0; i < ll; i++) {
      const index = i * space;
      if (index < len) {
        ticks.push(times[index]);
      }
      if (index >= len) {
        ticks.push(times[len - 1]); //能整除时的最后一个
      }
    }
    // if (len % criticalVal) {
    //   ticks.push(times[len - 1]);   // 不能整除时的最后一个
    // }
  } else {
    // 数据量<=10段以内
    ticks = times;
  }
  return ticks;
}
let result = handleXAxisTicks();

console.log("result", result);

/**
 *
 * @param {*} list 数组
 * @param {*} ticks  划分成几等份
 */
function handleSplit(list, ticks = 10) {
  const res = [];
  const len = list.length;
  const count = Math.ceil(len / ticks); // 每一等份有多少个
  let i = 0;
  while (i <= len - 1) {
    res.push(list[i]);
    i += count;
  }
  console.log("i-len", i, len);
  if (count % 2 !== 0 && i > len - 1) {
    res.push(list[len - 1]);
  }
  return res;
}
console.log("handleSplit", handleSplit(dataSource));
