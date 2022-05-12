/*
 * @Author: changluo
 * @Description: 
 */

let obj = {
    'a': {
        'b': {
            c: '111'
        }
    }
}
function fn(obj, str) {
    let reg = /^(\w.)+/; // \w是转译w，\w是数字字母下划线，而不是w单词
    if (!reg.test(str)) return;
    let arr = str.split('.');
    for (let i = 0; i < arr.length; i++) {
        obj = obj[arr[i]]
    }
    return obj;
}
let res = fn(obj, 'a.b.c');
console.log('res', res);
