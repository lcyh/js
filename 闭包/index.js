// 使用Promise和async改写成每隔1s打印1个数字

async function print(n) {
  const sleep = (time) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  };
  for (let i = 0; i < n; i++) {
    await sleep(1000);
    console.log("i", i);
  }
}
print(10);
