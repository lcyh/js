"use strict";
/*
 * @Author: changluo
 * @Description: enum 枚举
 */
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
exports.__esModule = true;
exports.dateMap = void 0;
// export enum ageRangeEnum {
//   "0-17" = 0,
//   "17-24" = 1,
//   "24-30" = 2,
//   "31+" = 3,
// }
// console.log(ageRangeEnum["3"]);
// console.log(ageRangeEnum[0]);
// console.log(ageRangeEnum["0-17"]);
// const enum StringEnum {
//   Up = "aa",
//   Down = "DOWN",
//   Left = "LEFT",
//   Right = "RIGHT",
// }
// console.log(StringEnum["Up"]);
// console.log(StringEnum.Up);
var negativeFeedback;
(function (negativeFeedback) {
    negativeFeedback[negativeFeedback["\u4E0D\u611F\u5174\u8DA3"] = 1] = "\u4E0D\u611F\u5174\u8DA3";
    negativeFeedback[negativeFeedback["\u76F8\u4F3C\u5185\u5BB9\u8FC7\u591A"] = 2] = "\u76F8\u4F3C\u5185\u5BB9\u8FC7\u591A";
    negativeFeedback[negativeFeedback["\u4E0E\u89C6\u9891\u5185\u5BB9\u4E0D\u76F8\u5173"] = 3] = "\u4E0E\u89C6\u9891\u5185\u5BB9\u4E0D\u76F8\u5173";
    negativeFeedback[negativeFeedback["\u5185\u5BB9\u8FDD\u89C4"] = 4] = "\u5185\u5BB9\u8FDD\u89C4";
    negativeFeedback[negativeFeedback["\u5E7F\u544A\u8D28\u91CF\u5DEE"] = 5] = "\u5E7F\u544A\u8D28\u91CF\u5DEE";
    negativeFeedback[negativeFeedback["\u89C6\u9891\u4E0D\u611F\u5174\u8DA3"] = 6] = "\u89C6\u9891\u4E0D\u611F\u5174\u8DA3";
    negativeFeedback[negativeFeedback["up\u4E3B\u4E0D\u611F\u5174\u8DA3"] = 7] = "up\u4E3B\u4E0D\u611F\u5174\u8DA3";
    negativeFeedback[negativeFeedback["\u5206\u533A\u4E0D\u611F\u5174\u8DA3"] = 8] = "\u5206\u533A\u4E0D\u611F\u5174\u8DA3";
    negativeFeedback[negativeFeedback["\u5176\u4ED6"] = 0] = "\u5176\u4ED6";
})(negativeFeedback || (negativeFeedback = {}));
console.log(negativeFeedback[1]);
console.log(negativeFeedback["相似内容过多"]);
//获取返回值类型
// const fn = () => {
//   return "haha";
// };
// type type1 = ReturnType<typeof fn> | null;
// let p: type1 = "12";
var dateMap;
(function (dateMap) {
    dateMap["\u4ECA\u65E5"] = "0-1";
    dateMap["\u6628\u65E5"] = "1-1";
    dateMap["\u672C\u5468"] = "W0";
    dateMap["\u672C\u6708"] = "M0";
    dateMap["\u4E0A\u5468"] = "W1";
    dateMap["\u4E0A\u6708"] = "M1";
    dateMap["\u8FC7\u53BB7\u5929"] = "1-7";
    dateMap["\u8FC7\u53BB30\u5929"] = "1-30";
    dateMap[dateMap["\u8FC7\u53BB3\u4E2A\u6708"] = 8] = "\u8FC7\u53BB3\u4E2A\u6708";
    dateMap[dateMap["\u81EA\u67D0\u65E5\u81F3\u4ECA"] = 9] = "\u81EA\u67D0\u65E5\u81F3\u4ECA";
})(dateMap = exports.dateMap || (exports.dateMap = {}));
console.log(dateMap["8"]);
