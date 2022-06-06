/*
 * @Author: changluo
 * @Description: 
 */
// 实例一:
let obj = {
    'a': {
        'b': {
            'c': 'value'
        }
    }
}
function getValue(obj, str) {
    let reg = /^(\w.)+/; // \w是转译w，\w是数字字母下划线，而不是w单词
    if (!reg.test(str)) return;
    let arr = str.split('.');
    let source = obj;
    for (let i = 0; i < arr.length; i++) {
        source = source[arr[i]]
    }
    return source;
}
let res = getValue(obj, 'a.b.c');
console.log('res', res);

// 实例二
// const target = {}
// setValue(target, 'a.b.c', 'value')  //{a:{b:{c:'value'}}}

function setValue(target = {}, path, val) {
    const paths = path.split('.');
    paths.reduce((pre, cur, index) => {
        if (index < paths.length - 1) {
            pre[cur] = {}
        } else {
            pre[cur] = val;
        }
        return pre[cur]
    }, target)
    return target
}
let o = {}
console.log('setValue', setValue(o, 'a.b.c', 'value'));  //{a:{b:{c:'value'}}}
