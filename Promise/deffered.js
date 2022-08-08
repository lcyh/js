// 延迟执行 promise
class Deffered {
  promise = null;
  innerResolve = null;
  innerReject = null;
  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.innerResolve = resolve;
      this.innerReject = reject;
    });
  }
  resolve(value) {
    this.innerResolve(value);
  }
  reject(e) {
    this.innerReject(e);
  }
}

function add(num) {
  let deffer = new Deffered();
  let res;
  try {
    num++;
    deffer.resolve({ num: `${num}加1`, title: "hh" });
    res = num;
  } catch (error) {
    deffer.reject(error);
    res = error;
  }
  return { res, promise: deffer.promise };
}
let { res, promise } = add(10);
console.log("res", res);
promise.then((result) => {
  console.log("result", result);
});
