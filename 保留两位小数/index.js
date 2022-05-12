/*
 * @Author: changluo
 * @Description: 保留几位小数
 */

 /**
 * 
 * @param {*} num 数值
 * @param {*} decimal  保留位数
 */
const formatDecimal = (num, decimal) => {
    num = num.toString()
    const index = num.indexOf('.')
    if (index !== -1) {// 浮点型小数
        num = num.substring(0, decimal + index + 1)
        return parseFloat(num).toFixed(decimal) // 可以过滤掉小数点后面都是0的小数，如 parseFloat(123.0) === 123
    } else {// 整数即没有小数点时
        num = num.substring(0)
        return num
    }
}
// console.log(formatDecimal(123.0, 2));// 123
console.log('parseFloat(123.0)', parseFloat(123.0));// 123
console.log(formatDecimal(123.456, 2));// 保留两位小数： 123.45
console.log(formatDecimal(123.456, 3));// 保留三位小数： 123.456
// console.log('123.12'.substring(0, 3 + 1));// 123.  substring(startIndex,endIndex) // [) 左闭又开
// console.log('123.12345'.substring(0)); // 123.12345

function keepDecimal(num, decimal) {
    num = num.toString()
    const index = num.indexOf('.');
    if (index !== -1) {
        num = num.substring(0, index + 1 + decimal);// 截取 字符串
        return parseFloat(num).toFixed(decimal);
    } else {
        num = num.substring(0);
        return num;
    }
}