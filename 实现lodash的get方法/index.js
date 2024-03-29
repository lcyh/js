// 实现lodash的get方法
const resp = {
  message: null,
  code: 1,
  data: [
    { title: "hello" },
    {
      name: "wolrd",
      list: [{ age: 111 }],
    },
  ],
};

function _get(source, path, defaultVal = null) {
  const reg = /\[(\d+)\]/g;
  if (reg.test(path)) {
    path = path.replace(reg, ".$1");
  }
  let newPaths = path.split(".");
  let result = source;
  for (let key of newPaths) {
    result = Object(result)[key];
    if (result === undefined) {
      return defaultVal;
    }
  }
  return result;
}

console.log("_get", _get(resp, "data[1].list[0].age")); // hello
// console.log('_get', _get(resp, 'data[1].title')); // null

// console.log('_get', _get(resp, 'data[1].name')); // null

// let str = "data[1].list[0].age";
// console.log(str.replace(/\[(\d+)\]/g, ".$1"));
