/*
 * @Author: changluo
 * @Description:
 */
// 原始数据
var entryObj = {
  f: [{ name: "lc" }, 123],
  x: "x1",
};
function flatObj(target, key = "", res = {}) {
  for (let [k, v] of Object.entries(target)) {
    let newKey = k;
    if (Array.isArray(target)) {
      newKey = key ? `${key}[${k}]` : k;
    } else {
      newKey = key ? `${key}.${k}` : k;
    }
    if (typeof v === "object") {
      flatObj(v, newKey, res);
    } else {
      res[newKey] = v;
    }
  }
  return res;
}
function flatObj2(target) {
  const res = {};
  const recursion = (obj, preKey = "") => {
    Object.entries(obj).forEach(([key, val]) => {
      let neweKey = key;
      if (Array.isArray(obj)) {
        neweKey = preKey ? `${preKey}[${key}]` : key;
      } else {
        neweKey = preKey ? `${preKey}.${key}` : key;
      }
      if (typeof val === "object") {
        recursion(val, neweKey);
      } else {
        res[neweKey] = val;
      }
    });
  };
  recursion(target);
  return res;
}
console.log("flatObj2", flatObj2(entryObj));
