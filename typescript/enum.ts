/*
 * @Author: changluo
 * @Description: enum 枚举
 *
 * 可以反向枚举：
 * 1.key和value相同
 * 2.key和value不同，但是key是字符串，value是数字；
 * 不可以反向枚举：
 * 1.key和value不同，key是字符串，value也是字符串
 */
// 可以反向枚举-key和value不同，但是key是字符串，value是数字，
// export enum ComponentGroupEnum {
//     "图片组件" = 1,
//     "商品组件" = 2,
//     "公告组件" = 3,
//     "优惠券组件" = 4,
//     "推文组件" = 5,
//     "搜索组件" = 6,
//     "顶部导航" = 7,
//     "九宫格图文" = 8,
//     "文本组件" = 9,
// }
// console.log(ComponentGroupEnum['图片组件']);
// console.log(ComponentGroupEnum[1]);

// export enum ageRangeEnum {
//   "0-17" = 0,
//   "17-24" = 1,
//   "24-30" = 2,
//   "31+" = 3,
// }
// console.log(ageRangeEnum["3"]);
// console.log(ageRangeEnum[0]);
// console.log(ageRangeEnum["0-17"]);

// 不能反向枚举-key和value不同，并且都是字符串
enum StringEnum {
  Up = "aa",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
console.log(StringEnum["Up"]);
console.log(StringEnum.Up);
console.log(StringEnum["aa"]);
// 会反向枚举
// enum negativeFeedback {
//   "不感兴趣" = 1,
//   "相似内容过多" = 2,
//   "与视频内容不相关" = 3,
//   "内容违规" = 4,
//   "广告质量差" = 5,
//   "视频不感兴趣" = 6,
//   "up主不感兴趣" = 7,
//   "分区不感兴趣" = 8,
//   "其他" = 0,
// }
// console.log(negativeFeedback[1]);
// console.log(negativeFeedback["相似内容过多"]);

//获取返回值类型
// const fn = () => {
//   return "haha";
// };
// type type1 = ReturnType<typeof fn> | null;
// let p: type1 = "12";

export enum dateMap {
  //不会反向枚举
  "今日" = "0-1",
  "昨日" = "1-1",
  "本周" = "W0",
  "本月" = "M0",
  "上周" = "W1",
  "上月" = "M1",
  "过去7天" = "1-7",
  "过去30天" = "1-30",
  //不会反向枚举
  "过去3个月" = 8,
  "自某日至今" = 9,
}

console.log(dateMap["8"]);
// console.log(dateMap["W1"]); // 报错

// 反向枚举-key和value相同
enum Week {
  Monday,
  Tuesday,
}
console.log(Week["Monday"]); //0

enum MyEnum {
  key1 = "val1",
  key2 = "val2",
}
const myFunction = (param: MyEnum | `${MyEnum}`) => {
  // ...
};
console.log(myFunction(MyEnum.key1)); // OK
console.log(myFunction("val1")); // OK
