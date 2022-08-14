/*
 * @Author: changluo
 * @Description: 实现模板字符串解析功能
 */
let template = "我是{{name}}，年龄{{age}}，性别{{sex}}";
let data = {
  name: "姓名",
  age: 18,
};
// render(template, data); // 我是姓名，年龄18，性别undefined

// function render(template, data){
//     const reg = /\{\{(\w+)\}\}/g;
//     const computed = template.replace(reg,function(match,key){
//         console.log('11',match,key);
//         return data[key];
//     })
//     console.log('computed',computed);
//     return computed;
// }

function render1(template, data) {
  const reg = /\{\{(\w+)\}\}/g;
  template = template.replace(reg, function (match, key) {
    console.log("match", match);
    console.log("key", key);
    return data[key] || match;
  });
  return template;
}
let res = render1(template, data);
console.log("res", res);
