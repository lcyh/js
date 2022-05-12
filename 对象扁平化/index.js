/*
 * @Author: changluo
 * @Description: 
 */
// 原始数据
var entryObj = {
    a: {
        d: {
            xx: 'adxx',
            f: [{ 'name': 'lc' }, 123]
        },
        e: 'ae',
    },
    x: 'x1'
};
function flatObj(target, key = '', res = {}) {
    for (let [k, v] of Object.entries(target)) {
        let newKey = k;
        if(Array.isArray(target)){
            newKey = key ? `${key}[${k}]` :k
        }else{
            newKey = key ? `${key}.${k}` :k
        }
        if (typeof v === 'object') {
            flatObj(v, newKey, res)
        } else {
            res[newKey] = v
        }
    }
    return res
}
function flatObj2(target) {
    const res = {};
    const recurion = (obj,preKey = '')=>{
        Object.entries(obj).forEach(([key,val]) => {
            let newKey = key;
            if(Array.isArray(obj)){
                newKey = preKey ? `${preKey}[${key}]`:key
            }else{
                newKey = preKey ? `${preKey}.${key}`:key
            }
            if(typeof val === 'object'){
                recurion(val,newKey)
            }else{
                res[newKey] = val
            }
        });
    }
    recurion(target)
    return res;
}
console.log('flatObj2', flatObj2(entryObj));
