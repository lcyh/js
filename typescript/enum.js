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
exports.ageRangeEnum = void 0;
var ageRangeEnum;
(function (ageRangeEnum) {
    ageRangeEnum[ageRangeEnum["0-17"] = 0] = "0-17";
    ageRangeEnum[ageRangeEnum["17-24"] = 1] = "17-24";
    ageRangeEnum[ageRangeEnum["24-30"] = 2] = "24-30";
    ageRangeEnum[ageRangeEnum["31+"] = 3] = "31+";
})(ageRangeEnum = exports.ageRangeEnum || (exports.ageRangeEnum = {}));
console.log(ageRangeEnum['3']);
console.log(ageRangeEnum[0]);
console.log(ageRangeEnum['0-17']);
console.log("UP" /* 'Up' */);
console.log("UP" /* Up */);
