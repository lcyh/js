/*
 * @Author: changluo
 * @Description: 
 */
function toThousandsNum(num) {
    return num.toLocaleString()
}
function formatNumber(num) {
    num = Number(num)
    let result = toThousandsNum(num)
    let temp = 0
    if (num >= 10 ** 5 && num < 10 ** 7) {
        temp = Math.round(num / 100) * 100
        if (temp === 10 ** 7) {
            return formatNumber(temp)
        } else {
            result = (temp / 10000).toFixed(2)
        }
    }
    if (num >= 10 ** 7 && num < 10 ** 9) {
        temp = Math.round(num / 10000) * 10000
        if (temp === 10 ** 9) {
            return formatNumber(temp)
        } else {
            result = toThousandsNum(temp / 10000)
        }
    }
    if (num >= 10 ** 9) {
        result = formatNum((Math.round(num / (10 ** 7)) / 100).toFixed(2))
    }
    return result
}
console.log('formatNumber', formatNumber('12345678'));



function fn() {
    let arr1 = [1, 2, 3, 4];
    let arr2 = [5, 6, 7];
    let res = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            res.push([arr1[i], arr2[j]])
        }
    }
    return res;
}
console.log('fn',fn());